import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from "react-router-dom"

import axios from 'axios'
import { styled } from '@mui/material/styles';
import { useLocation, NavLink } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Expenses from "./Expenses"
import Invoices from "./Invoices"
import Products from "./components/Products/Products"
import ProductView from "./components/ProductView/productView"
import Cart from './components/Cart/Cart'
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import MySnackbar from './MySnackbar'
import OrderTable from './OrderTable'

import Pro from './Product'
import ProDet from './ProdcutDetail'
import Home from './Home'
import CartItem from './CartItem'
import SignUpa from './SignUp'
import SignIna from './SignIn'
import SearchBar from './SearchBar'
import SearchedItems from './SearchedItems'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Grid from '@mui/material/Grid'

import MyInfo from './MyInfo'
import SignIn from './components/SignInUp/SignIn'
import SignUp from './components/SignInUp/SignUp'
import useToken from './components/SignInUp/useToken'


import { Divider, Snackbar, Paper } from '@mui/material'

import {commerce} from './lib/commerce'

const theme = createTheme({
  palette: {
    primary: {
      main: '#330e62',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const API_URL='http://localhost:3001'


export default function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const { token, setToken } = useToken() // save in localStorage
  const [open, setOpen] = React.useState(false)
  const [snackbarText, setSnackbarText] = React.useState('')
  const [searched, setSearched] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')


  // myinfo 
  const [ loading, setLoading ] = useState(false)
  const [ customer, setCustomer ] = useState({})

  // orders
  const [rows, setRows] = useState({})

  useEffect(() => {
    fetchProducts()
    fetchCart()
    fetchCustomerInfo()
    fetchOrderHistories()
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  const fetchCustomerInfo = async () => {
    const ok = await commerce.customer.isLoggedIn()
    console.log(ok)
    const  data  = await commerce.customer.about()
    console.log(data)
    setLoading(ok)
    setCustomer(data)
  }

  const signUpChec =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    console.log(data.get('email'))
    console.log(data.get('password'))
    let firstname=data.get('firstname')
    let lastname=data.get('lastname')
    let email=data.get('email')
    let password=data.get('password')

    // const navigate = useNavigate();

    // add customer to Chec
    //ChecCreate customer
    //Requires secret key
    //Create a new customer record for the current merchant. 
    const url1 = new URL(
      "https://api.chec.io/v1/customers"
  );
  let headers1 = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Content-Type": "application/json",
      "Accept": "application/json",
  };
  let body1 = {
    "email": email,
    "firstname": firstname,
    "lastname": lastname
  }
  let customerDataa={}
   await fetch(url1, {
      method: "POST",
      headers: headers1,
      body:  JSON.stringify(body1)
  })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        customerDataa=json;
      });
      console.log(customerDataa)


    // add chec customer to self-proviced auth API to allow authentication with email and password
    //addCustomerToAuthApi({customer_id:resultChec.id, email:resultChec.email, firstname, lastname, password})
  const url2 = new URL(
    "http://localhost:3002/api/register/"+customerDataa.id+"/"+customerDataa.email+"/"+firstname+"/"+lastname+"/"+password
);

let headers2 = {
  "Content-Type": "application/json  charset=UTF-8",
  "Accept": "application/json",
};

let body2 = {
    "customer_id": customerDataa.id,
    "email": customerDataa.email,
    "firstname": customerDataa.firstname,
    "lastname": customerDataa.lastname,
    "password": customerDataa.password
}
console.log(body2)

let result={}
await fetch(url2, {
    method: "GET",
    headers: headers2
})
    .then(response => response.json())
    .then(json => {
      console.log(json);
      result=json;
    });
    console.log(result)

    // send registration email
    await commerce.customer.login(email, 'http://localhost:3000/registration-success');
    fetchCustomerInfo()
  }

  const signInChec =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    let email=data.get('email')
    let password=data.get('password')

    // login with self-provided auth API
    //let result=fetchCustomerFromAuthApi({email, password})
    const url1 = new URL(
      "http://localhost:3002/api/login/"+email+"/"+password
  );
  let headers1 = {
      "Content-Type": "application/json  charset=UTF-8",
      "Accept": "application/json",
  };
  let body1 = {
      "email": email,
      "password": password
  }
  let result={}
  await fetch(url1, {
      method: "GET",
      headers: headers1
  })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        result=json;
      });
      console.log(result)

    // Issue and return login token
    // Requires secret key
    // This API works the same way as "Issue and send login token", 
    // but requires a secret API key, and will return the issued token rather than emailing it to the customer. 
    /*
    const url = new URL(
      "https://api.chec.io/v1/customers/issue-token"
    );
  
    let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
  
    let body = {
      "email": "satoaikawa@qq.com",
      "base_url": "http://localhost:3000/"
    }
  
    fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(json => console.log(json));
*/
      /*
    const gai = axios.create({
      headers : {
        "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
        "Access-Control-Allow-Origin": "*"
      }
    })

    let payload = { email: 'mytestemail@qq.com', base_url: 'omnis' }
    const res1 = await gai.post("http://api.chec.io/v1/customers/issue-token", payload)
    console.log(res1)
*/
    // Issue JWT for customer
    // Requires secret key
    // As a merchant, you may issue a JSON web token for a customer directly using your secret Chec API key. This may be a desirable option 
    // if you are integrating your own customer authentication, and simply need a token to authorize API requests as your customer with.
    /*
    const res2  = await gai.post("http://api.chec.io/v1/customers/"+res1.customer_id+"/issue-token")
    console.log(res2)
    */
    const url2 = new URL(
      //"https://api.chec.io/v1/customers/cstmr_zkK6oL9PaR5Xn0/issue-token"
      "https://api.chec.io/v1/customers/"+result.customer_id+"/issue-token"
  );
  
  let headers2 = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Accept": "application/json",
      "Content-Type": "application/json",
  };
  
  let result3={}
  await fetch(url2, {
      method: "POST",
      headers: headers2,
  })
      .then(response => response.json())
      .then(json => {console.log(json);result3=json});

  // jwt got now
  //
  const url3 = new URL(
    "https://api.chec.io/v1/customers/"+result3.customer_id+"/orders"
);

let headers3 = {
    "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

await fetch(url3, {
    method: "GET",
    headers: headers3,
})
    .then(response => response.json())
    .then(json => console.log(json));

  }

  const fetchOrderHistories = async () => {
    const data = await commerce.customer.getOrders();
    console.log(data)
    setRows(data.data)
    
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    console.log(data)
    let aa=[]
    for(let i=0;i<data.length;i++){
      aa.push(data[i].id)
    }
    console.log(aa)
    //console.log(JSON.stringify(data, null, 2))
    setProducts(data)
  }


  const fetchCart = async () => {
    // Retrieve the customers current cart (tracked by their browser)
    const data = await commerce.cart.retrieve()
    console.log(JSON.stringify(data, null, 2))
    setCart(await commerce.cart.retrieve())
    //setCart(data)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    console.log(JSON.stringify(item, null, 2))
    setCart(item.cart)
    setOpen(true)
    setSnackbarText('買い物かごへ追加しました')
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity })

    setCart(response.cart)
    setOpen(true);
    setSnackbarText('買い物かごの商品数を変更しました')
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId)
    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()
    setCart(response.cart)
    setOpen(true);
    setSnackbarText('買い物かごの中身を空にしました')
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      // Captures an order and payment by converting a checkout token and necessary data into an order object, and charging all related transactions.
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      console.log(incomingOrder)

      setOrder(incomingOrder)

      refreshCart()
      fetchOrderHistories()

    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }



  return (
    <div >
  <ThemeProvider theme={theme}>
  <BrowserRouter>
      <Navbar totalItems={cart.total_items} />
      {/*if current path is /a or /searched-items ||window.location.pathname.includes('/collections') 
      {(window.location.pathname==='/a')?
      <Grid container spacing={2} justify="center" alignItems="center" >
        <Grid item xs={12} md={12}>
          <Item elevation={0}><SearchBar setSearchTerm={setSearchTerm} /></Item>
        </Grid>
      </Grid>:<br/>}
      */}
      <br/>
      <br/>
      <br/>
      <MySnackbar open={open} setOpen={setOpen} snackbarText={snackbarText} />
      <Divider sx={{margin:'10px'}}/>
      <Routes>
      <Route exact path="/" element={<Invoices products={products} loading={loading} customer={customer} onAddToCart={handleAddToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} order={order} customer={customer} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
      <Route exact path="/product-view/:id" element={<ProductView  onAddToCart={handleAddToCart} />} />
      <Route exact path="/signin" element={<SignIn onSignIn={signInChec} />} />
      <Route exact path="/signup" element={<SignUp onSignUp={signUpChec} />} />
      <Route path="/registration-success/:token" element={<Expenses />} />
      <Route exact path="/orders" element={<OrderTable rows={rows} />} />
      <Route exact path="/order-detail/:id" element={<OrderTable />} />

      <Route exact path="/a" element={<Home products={products} loading={loading} customer={customer} onAddToCart={handleAddToCart} />} />
      <Route exact path="/collections/:tag" element={<SearchedItems products={products} loading={loading} customer={customer} onAddToCart={handleAddToCart} />} />

      <Route exact path="/signina" element={<SignIna />} />
      <Route exact path="/signupa" element={<SignUpa />} />
      <Route exact path="/carta" element={<CartItem />} />
      <Route exact path="/product-viewa/:id" element={<ProDet  onAddToCart={handleAddToCart} />} />

      </Routes>
      <Footer title={"Online Fashion Store with React + MUI + k8s"} description={"S.AIKAWA"} />
  </BrowserRouter>
  </ThemeProvider>
    </div>
  )
}