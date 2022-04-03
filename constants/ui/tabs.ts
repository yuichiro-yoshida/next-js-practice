import Tab from '../../types/ui/tab'
import DESIRABILITY from '../desirability'

const TABS: Tab[] = [
  { desirability: DESIRABILITY.all, label: 'すべて' },
  { desirability: DESIRABILITY.betterEat, label: '食べよう', icon: 'pi pi-fw pi-thumbs-up' },
  { desirability: DESIRABILITY.bestAvoided, label: '避けよう', icon: 'pi pi-fw pi-thumbs-down' }
]

export default TABS
