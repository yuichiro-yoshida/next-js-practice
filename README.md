# Next.js practice
React を初めて学習しました。

以前 Nuxt3（beta）で開発した妊婦向け Web アプリ [What to eat?](https://i-dont-know-what-to-eat.vercel.app/) のコピーを、スタイリングや表示コンテンツの量は一旦考慮せずに、JS コアロジックだけさっくり作って React の練習をした試みです（作業時間1日）。

https://next-js-practice-drab.vercel.app/

3種類の検索条件をAND条件で組み合わせて、リアクティブにデータをフィルタリングして表示します。

## 練習したこと
- JSXの利用、リストレンダリング
- コンポーネントの分割とprops、親子コンポーネント間の受け渡し
- 基礎的なフォーム（制御されたコンポーネント）の扱い - input text, checkbox, radio button
- イベント処理
- stateのリフトアップ
- Hooksの利用 - useState, useEffect, 自作Hook

## 主要技術スタック
- Next.js v12.1.4
    - React v18.0.0
- TypeScript

## 環境構築

```bash
npm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev
```
