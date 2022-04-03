import Ingredient from '../types/ingredient'

import INGREDIENT from '../constants/ingredient'
import DESIRABILITY from '../constants/desirability'
import TIMING from '../constants/timing'

const folicAcid: Ingredient = {
  code: INGREDIENT.folicAcid,
  name: '葉酸',
  desirability: DESIRABILITY.betterEat,
  timing: [
    TIMING.early,
    TIMING.middle,
    TIMING.late,
    TIMING.milk
  ],
  effect: '細胞の分裂や成長に欠かせず、胎児においては、脳の発育を助けたり、神経を作る働きがあります。妊娠前の準備段階から葉酸を補給しておくのが望ましいです。',
  targetAmount: 240,
  unit: 'μg / 日',
  note: '妊娠活動期～妊娠初期には、通常の240μgに加えて、400μg/日の摂取が必要だと言われています。中期には通常の240μgに加えて240μg、後期～授乳期には通常の240μgに加えて100μgの摂取が必要と言われています。'
}

const iron: Ingredient = {
  code: INGREDIENT.iron,
  name: '鉄分',
  desirability: DESIRABILITY.betterEat,
  timing: [
    TIMING.early,
    TIMING.middle,
    TIMING.late,
    TIMING.milk
  ],
  effect: '鉄分が不足してしまうと赤ちゃんの発育不良、未熟児や早産になりやすくなります。また産後の母乳の出にも影響します。',
  targetAmount: 19.5,
  unit: 'mg / 日',
  note: ''
}

const foodPoisoning: Ingredient = {
  code: INGREDIENT.foodPoisoning,
  name: '食中毒リスク',
  desirability: DESIRABILITY.bestAvoided,
  timing: [
    TIMING.early
  ],
  effect: '全期間気をつけたいですが、特に妊娠初期は免疫機能が低下して食中毒など食べ物が原因の病気にもかかりやすくなります。食中毒にかかると早産や流産のリスクも高まると言われています。',
  targetAmount: 0,
  unit: '',
  note: ''
}

export default {
  folicAcid,
  iron,
  foodPoisoning
}
