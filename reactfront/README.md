#  online store with React+MUI+k8s

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


About form choose between...

React Hook Form
https://tech.stmn.co.jp/entry/2021/04/23/091310


MUI form textfield
https://codesandbox.io/s/react-material-ui-form-submit-v40lz?from-embed=&file=/src/components/MaterialUIFormSubmit.js:1812-2364
AddressForm.jsx

react native form
https://ja.reactjs.org/docs/forms.html



----------------------






<h1 align="center">Online Book Store with React + Material UI </h1>


# Online Book Store with React + Material UI with Docker-compose and kubernetes
    Online Book Store with React + Material UI is an online React web application where the customer can purchase books online.
    Through this book store the users can search for a book by its title and
    later can add to the shopping cart and finally purchase using credit card transaction.


# Used Technologies

react  
material ui  
express
axios    
stripeJS  
commerceJS  
docker/-compose  
nginx reverse proxy server

## nginx reverse proxy server
reactのリクエストはサーバからでなくブラウザから送られているのでホスト名が解決できない。ブラウザからaxios API requestを送れるようにするためにnginx reverse proxy serverもデプロイする

Book-store-Reactjs/nginxrp/default.conf  
```conf
upstream reactbookfront {
    server reactbookfront:3000;
}

upstream productsapi {
    server productsapi:3001;
}

upstream tokenapi {
    server tokenapi:3002;
}

server {
    listen 80;

    location / {
        proxy_pass http://reactbookfront;
    }

    location /sockjs-node {
        proxy_pass http://reactbookfront;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
    
    location /api {
        #rewrite /api/(.*) /$1 break;
        proxy_pass http://productsapi;
    }

    location /login {
        #rewrite /api/(.*) /$1 break;
        proxy_pass http://tokenapi;
    }
}

```

# How to Run 
## Running In Local  
### Running whole App
### `docker-compose up --build`  

#### Running each micrservice  
```sh
# in project root directory
REACT_APP_DEV_API_URL=http://localhost:3001 npm run start-client
# in backend directory backend
npm start
# in auth-tutorial directory
node server.js
```
Open [http://localhost:3050](http://localhost:3050) to view it in the browser.

# build frontend
```sh
# in project root directory
npm build
```


## Running with Kubernetes
```sh
kubectl apply -f reactproductstoken.yaml
```









# micro services
access to localhost:3050

login sitekara cart
signiinnerror message