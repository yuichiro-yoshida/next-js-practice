import { useState } from 'react'
import ConditionList from './ConditionList'
import FoodsTable from './FoodsTable'
import TABS from '../../constants/ui/tabs'
import TIMING from '../../constants/timing'
import Timing from '../../types/timing'
import useFilteredFoods from '../../hooks/useFilteredFoods'

const practices = [
  'JSXの利用、リストレンダリング',
  'コンポーネントの分割とprops、親子コンポーネント間の受け渡し',
  '基礎的なフォーム（制御されたコンポーネント）の扱い - input text, checkbox, radio button',
  'イベント処理',
  'stateのリフトアップ',
  'Hooksの利用 - useState, useEffect, 自作Hook'
]

function Contents() {
  const [inputText, setInputText] = useState<string>('')
  const [checkedTimings, setCheckedTimings] = useState<Timing[]>(Object.values(TIMING))
  const [activeTabIndex, setActiveTabIndex] = useState<number>(TABS[0].desirability)

  const filteredFoods = useFilteredFoods(inputText, checkedTimings, activeTabIndex)

  return (
    <div>
      <h1>Next.js practice</h1>
      <p>以前 Nuxt3（beta）で開発した妊婦向け Web アプリ <a href="https://i-dont-know-what-to-eat.vercel.app/" target='_brank' style={{color: 'blue', textDecoration: 'underline'}}>What to eat?</a> のコピーを、スタイリングや表示コンテンツの量は一旦考慮せずに、JS コアロジックだけさっくり作って React の練習をした試みです（作業時間1日）。</p>
      <p>GitHub: <a href="https://github.com/yuichiro-yoshida/next-js-practice" target='_brank' style={{color: 'blue', textDecoration: 'underline'}}>https://github.com/yuichiro-yoshida/next-js-practice</a></p>
      <p>3種類の検索条件をAND条件で組み合わせて、リアクティブにデータをフィルタリングして表示します。</p>
      <h4>練習したこと</h4>
      <ul>
        {
          practices.map((practice, index) => <li key={index}>{practice}</li>)
        }
      </ul>
      <ConditionList
        inputText={inputText}
        onChangeInputText={setInputText}
        checkedTimings={checkedTimings}
        onChangeCheckedTimings={setCheckedTimings}
        activeTabIndex={activeTabIndex}
        onChangeTab={setActiveTabIndex}
      />
      <FoodsTable filteredFoods={filteredFoods} />
    </div>
  )
}

export default Contents
