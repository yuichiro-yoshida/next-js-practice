import Food from '../types/food'

import INGREDIENTS from '../data/ingredients'

const foods: Food[] = [
  {
    name: 'ブロッコリー',
    imageUrl: 'https://3.bp.blogspot.com/-kUCoL5ijgWA/UkJMpwWHd0I/AAAAAAAAYQ4/qxVI_KDl1po/s800/broccoli.png',
    ingredients: [
      {
        ingredient: INGREDIENTS.folicAcid,
        contentAmount: 450,
        contentUnit: '㎍',
        unitAmount: '100g',
        recommendedWay: '水に溶けやすく熱に弱いという葉酸の性質を利用し、スープにして汁ごと食べたり、電子レンジで加熱したりするとより良いです。',
        note: '',
        sourceUrl: 'https://www.elevit.jp/nutrition/folic-acid/foodlist/'
      }
    ]
  },
  // {
  //   name: '焼きのり',
  //   imageUrl: 'https://3.bp.blogspot.com/-p8CEuDWzBUc/U2srrgpiWlI/AAAAAAAAf2E/JAI-5edGkIo/s800/food_nori.png',
  //   ingredients: [
  //     {
  //       ingredient: INGREDIENTS.folicAcid,
  //       contentAmount: 1900,
  //       contentUnit: '㎍',
  //       unitAmount: '100g',
  //       recommendedWay: '調理をせずそのまま食べられるので、朝食やお弁当などいつもの食事にプラスしてみてはいかがでしょう。',
  //       note: '一見するとかなりの含有量となっていますが、焼きのりは「全形」と呼ばれる大きなサイズでも1枚の重さが3g程度しかありません。',
  //       sourceUrl: 'https://www.elevit.jp/nutrition/folic-acid/foodlist/'
  //     }
  //   ]
  // },
  // {
  //   name: '豚レバー',
  //   imageUrl: 'https://3.bp.blogspot.com/-MAjvK7GzRMU/WFo-v9y3MrI/AAAAAAABAiU/Mu-aRjxc3r8gQBdtXnfMJQiZ5w87WbzpACLcB/s800/food_smoke_liver.png',
  //   ingredients: [
  //     {
  //       ingredient: INGREDIENTS.iron,
  //       contentAmount: 6.5,
  //       contentUnit: 'mg',
  //       unitAmount: '50g',
  //       recommendedWay: '',
  //       note: 'たんぱく質にも鉄分の吸収を高める効果があるので、その点でも豚レバーは適しています。',
  //       sourceUrl: 'https://ssl.hagukumi.ne.jp/CGI/qa/search.cgi?mode=detail&seq=415#:~:text=%E5%A6%8A%E5%A8%A0%E4%B8%AD%E3%81%AB%E5%BF%85%E8%A6%81%E3%81%AA,%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%8D%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%E3%80%82'
  //     }
  //   ]
  // },
  {
    name: 'ナチュラルチーズ',
    imageUrl: 'https://1.bp.blogspot.com/-Usx3IgJOMeI/XexqUoddTKI/AAAAAAABWe4/kgic5jZ9es0bNkRn7Mw8SkgwcyB31XZ9QCNcBGAsYHQ/s1600/food_cheese_emmental.png',
    ingredients: [
      {
        ingredient: INGREDIENTS.foodPoisoning,
        contentAmount: null,
        contentUnit: null,
        unitAmount: null,
        recommendedWay: '',
        note: '加熱殺菌をしていないナチュラルチーズはリステリア中毒を引き起こす可能性があると言われています。',
        sourceUrl: 'https://www.stemcell.co.jp/column/%E5%A6%8A%E5%A8%A0%E5%88%9D%E6%9C%9F%E3%81%AB%E3%81%8A%E5%8B%A7%E3%82%81%E3%81%AE%E9%A3%9F%E3%81%B9%E7%89%A9%E3%81%A8%E9%81%BF%E3%81%91%E3%81%9F%E3%81%84%E9%A3%9F%E3%81%B9%E7%89%A9/'
      }
    ]
  }
]

export default foods
