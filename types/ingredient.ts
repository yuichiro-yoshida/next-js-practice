import INGREDIENT from '../constants/ingredient'

import Desirability from '../types/desirability'
import Timing from '../types/timing'

export default interface Ingredient {
  code: typeof INGREDIENT[keyof typeof INGREDIENT];
  name: string;
  desirability: Desirability;
  timing: Timing[];
  effect: string;
  targetAmount: number;
  unit: string;
  note: string;
}
