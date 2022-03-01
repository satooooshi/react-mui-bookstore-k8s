import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

import axios from 'axios'

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


import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Grid from '@mui/material/Grid'

import MyInfo from './MyInfo'
import SignIn from './components/SignInUp/SignIn'
import SignUp from './components/SignInUp/SignUp'
import useToken from './components/SignInUp/useToken'


import { Divider, Snackbar, } from '@mui/material'

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
})


const API_URL='http://localhost:3001'

export default function App({children}) {

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const { token, setToken } = useToken() // save in localStorage
  const [open, setOpen] = React.useState(false)
  const [snackbarText, setSnackbarText] = React.useState('')


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
    let email=data.get('email')
    let password=data.get('password')

    // const navigate = useNavigate();
      
    // send registration email
    const result = await commerce.customer.login(email, 'http://localhost:3000/registration-success');
    console.log(result)
    fetchCustomerInfo()

    // add chec customer to self-proviced auth API to allow authentication with email and password
    //addCustomerToAuthApi(customer.id, customer.email);
  }

  const signInChec =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    console.log(data.get('email'))
    console.log(data.get('password'))
    let email=data.get('email')
    let password=data.get('password')

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
    const url = new URL(
      "https://api.chec.io/v1/customers/cstmr_zkK6oL9PaR5Xn0/issue-token"
  );
  
  let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Accept": "application/json",
      "Content-Type": "application/json",
  };
  
  fetch(url, {
      method: "POST",
      headers: headers,
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
      </Routes>
      <Divider sx={{margin:'10px'}}/>
      <Footer title={"Online Bookstore with React + MUI + k8s"} description={"S.AIKAWA"} />
  </BrowserRouter>
  </ThemeProvider>
    </div>
  )
}