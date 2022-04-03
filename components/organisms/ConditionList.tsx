import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import TIMING_CHECKBOXES from '../../constants/ui/timingCheckboxes'
import TABS from '../../constants/ui/tabs'
import Timing from '../../types/timing'

interface ConditionListProps {
  inputText: string;
  onChangeInputText: Dispatch<SetStateAction<string>>;
  checkedTimings: Timing[];
  onChangeCheckedTimings: Dispatch<SetStateAction<Timing[]>>;
  activeTabIndex: number;
  onChangeTab: Dispatch<SetStateAction<number>>;
}

function ConditionList(props: ConditionListProps) {

  function onChangeTimings(e: ChangeEvent<HTMLInputElement>): void {
    const checkedValue = Number(e.target.value) as Timing
    if (props.checkedTimings.includes(checkedValue)) {
      props.onChangeCheckedTimings(props.checkedTimings.filter(timing => timing !== checkedValue))
    } else {
      props.onChangeCheckedTimings([...props.checkedTimings, checkedValue])
    }
  }

  return (
    <div>
      <h2>検索条件</h2>
      <div>
        <h4>食品名</h4>
        <input
          type="text"
          value={props.inputText}
          onChange={e => props.onChangeInputText(e.target.value)}
        />
      </div>
      <div>
        <h4>意識するタイミング</h4>
        {
          TIMING_CHECKBOXES.map(t => (
            <div key={t.timing}>
              <input
                type="checkbox"
                id={'timing' + t.timing}
                name="timing"
                value={t.timing}
                onChange={e => onChangeTimings(e)}
                checked={props.checkedTimings.includes(t.timing)}
              />
              <label htmlFor={'timing' + t.timing}>{t.label}</label>
            </div>
          ))
        }
      </div>
      <div>
        <h4>食品種別タブ（radio buttonで簡易に代替）</h4>
        {
          TABS.map(t => (
            <div key={t.desirability}>
              <input
                type="radio"
                id={'tab' + t.desirability}
                name="tab"
                value={t.desirability}
                onChange={e => props.onChangeTab(Number(e.target.value))}
                checked={props.activeTabIndex === t.desirability}
              />
              <label htmlFor={'tab' + t.desirability}>{t.label}</label>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ConditionList
