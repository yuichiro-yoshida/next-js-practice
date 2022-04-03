import Ingredient from './ingredient'

type EachFoodIngredient = {
  ingredient: Ingredient,
  contentAmount: number,
  contentUnit: string,
  unitAmount: string,
  recommendedWay: string,
  note: string,
  sourceUrl: string
}
export default EachFoodIngredient
