#  online bookstore with React+MUI+k8s

https://reactrouter.com/docs/en/v6/getting-started/overview 
https://dev.classmethod.jp/articles/react-router-5to6/
https://mui.com/getting-started/installation/
https://www.npmjs.com/package/axios
https://httpbin.org/#/HTTP_Methods
curl -X GET "https://httpbin.org/brotli" -H "accept: application/json"
npm install react-hook-form https://qiita.com/NozomuTsuruta/items/60d15d97eeef71993f06
npm i @stripe/react-stripe-js
npm install @chec/commerce.jse


npx create-react-app react-mui-bookstore-k8s

npm start

世はReact with CSS 戦国時代
Pure CSS
CSS Modules
Styled Components(CSS in JS)
Emotion(CSS in JS)
Linaria(CSS in JS)
Tailwind
CSS Framework(Chakura UIなど)
CSSは全てがグローバルで管理されてしまうので保守・管理にコストがかかり、崩壊しやすいです。

MUI
styled co
https://coders-shelf.com/materialui-v5/
makeStyles()からstyled()へ
sxプロパティ:
theme変数へのアクセスもできます。
同様にCSSも指定できます。
material-uiのButtonオブジェクトをstyled componentsでカスタマイズした場合

https://qiita.com/a-takano/items/b4b6eb29dc04970010c4
&nbsp;	無視・改行されない空白	no-break spaceの略
&ensp;	nの字の幅の空白(半角スペース)	en spaceの略
&emsp;	mの字の幅の空白(全角スペース)	em spaceの略
&thinsp;	&nbsp;より狭い空白	thin spaceの略



sx only works in MUI component, not in div or react-router-dom (Link.etc..)

//import { Link } from 'react-router-dom'; // to
import Link from '@mui/material/Link';// href
MUI Link href="/"
react-router-dom to="/"


form textfirld
https://codesandbox.io/s/react-material-ui-form-submit-v40lz?from-embed=&file=/src/components/MaterialUIFormSubmit.js:1812-2364