import TIMING from '../constants/timing'

type Timing = typeof TIMING[keyof typeof TIMING]
export default Timing
