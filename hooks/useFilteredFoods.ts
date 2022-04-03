import { useEffect, useState } from 'react'
import TABS from '../constants/ui/tabs'
import DESIRABILITY from '../constants/desirability'
import foods from '../data/foods'
import Food from '../types/food'
import Timing from '../types/timing'
import intersection from 'lodash.intersection'

export default function useFilteredFoods(
  inputText: string,
  checkedTimings: Timing[],
  activeTabIndex: number
): Food[] {
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([])

  useEffect(() => {
    let filtered: Food[] = []

      // タブで絞り込み
    filtered = TABS[activeTabIndex].desirability === DESIRABILITY.all
      ? foods
      : foods.filter(
        f => f.ingredients.some(
          i => i.ingredient.desirability === TABS[activeTabIndex].desirability
        )
      )

    // 入力テキストで絞り込み（食材名、成分名）
    filtered = inputText === ''
      ? filtered
      : filtered.filter(f => {
          return [f.name, ...f.ingredients.map(i => i.ingredient.name)]
            .some(n => n.includes(inputText))
        })

    // 時期で絞り込み
    filtered = filtered
      .filter(f => f.ingredients.some(i => intersection(i.ingredient.timing, checkedTimings).length > 0))
    
    setFilteredFoods(filtered)
  })

  return filteredFoods
}
