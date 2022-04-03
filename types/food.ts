import EachFoodIngredient from '../types/eachFoodIngredient'

export default interface Food {
  name: string;
  imageUrl: string;
  ingredients: EachFoodIngredient[];
}
