import DESIRABILITY from '../constants/desirability'

type Desirability = typeof DESIRABILITY[keyof typeof DESIRABILITY]
export default Desirability
