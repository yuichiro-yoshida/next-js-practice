import TIMING_CHECKBOXES from '../../constants/ui/timingCheckboxes'
import DESIRABILITY from '../../constants/desirability'
import TimingCheckbox from '../../types/ui/timingCheckbox'
import Food from '../../types/food'

interface FoodsTableProps {
  filteredFoods: Food[];
}

function FoodsTable(props: FoodsTableProps) {

  const isDesirableFood = (food: Food): boolean => {
    return food.ingredients.some(i => i.ingredient.desirability === DESIRABILITY.betterEat)
  }

  const getTimingList = (food: Food): TimingCheckbox[] => {
    const timingList = food.ingredients
      .map(i => i.ingredient.timing)
      .reduce((previous, current) => previous.concat(current))
  
    return TIMING_CHECKBOXES.filter(t => timingList.includes(t.timing))
  }

  return (
    <div>
      <h2>検索結果（食品リスト）</h2>
      <p>該当：{props.filteredFoods.length}件</p>
      <ul>
        {
          props.filteredFoods.map(f => (
            <li key={f.name}>
              <div>
                <h4>{f.name}</h4>
                <div>種別：{isDesirableFood(f) ? '食べよう' : '避けよう'}</div>
                <div>
                  意識するタイミング
                  <ul>
                    {
                      getTimingList(f).map(t => (
                        <li key={t.timing}>{t.label}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FoodsTable
