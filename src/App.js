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
import Checkouta from './Checkout'
import MyAccount from './MyAccount'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import Grid from '@mui/material/Grid'

import MyInfo from './MyInfo'
import SignIn from './components/SignInUp/SignIn'
import SignUp from './components/SignInUp/SignUp'
import useToken from './useToken'


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

  const [open, setOpen] = React.useState(false)
  const [snackbarText, setSnackbarText] = React.useState('')
  const [searched, setSearched] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [categories, setCategories] = React.useState([])



  // myinfo 
  const [ loading, setLoading ] = useState(false)
  const [ customer, setCustomer ] = useState({})
  const { setToken } = useToken() // save in localStorage

  // orders
  const [orders, setOrders] = useState({})

  useEffect(() => {
    fetchCategories()
    fetchProductsWithParams()
    fetchCart()
    fetchOrderHistories()
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法


  const createCustomer =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    let firstname=data.get('firstname')
    let lastname=data.get('lastname')
    let email=data.get('email')
    let password=data.get('password')

    const url = new URL(
      "https://api.chec.io/v1/customers"
  );
  
  let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Content-Type": "application/json",
      "Accept": "application/json",
  };
  
  let body = {
      "email": email,
      "firstname": firstname,
      "lastname": lastname,
      "external_id": "MY_CRM_USER_123"
  }
  
  let customerId=undefined
  fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
  })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        customerId=json.id
        if(customerId!==undefined){
          //console.log("signup success")
          //Get customer
          const url = new URL(
            "https://api.chec.io/v1/customers/"+customerId
        );
        
        let headers = {
            "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => {
              //console.log(json);
              setToken(json.id);
              setCustomer(json)
              
              // TODO add password, email, customerId pair to auth API here

              // add chec customer to self-proviced auth API to allow authentication with email and password
              //addCustomerToAuthApi({customer_id:resultChec.id, email:resultChec.email, firstname, lastname, password})
              const url2 = new URL(
                "http://localhost:3002/api/register/"+json.id+"/"+email+"/"+firstname+"/"+lastname+"/"+password
              );

              let headers2 = {
                "Content-Type": "application/json  charset=UTF-8",
                "Accept": "application/json",
              };

              fetch(url2, {
                method: "GET",
                headers: headers2
              })
              .then(response => response.json())
              .then(json => {
                console.log(json);
              });

               //window.location.href="/"

              });

        }else{
          console.log("signup failed")
        }
      });
        

  }


  const getCustomer =  async (event) => {
    event.preventDefault();
    // TODO fetch customerId from auth API
            const customerId=undefined;
              //Get customer
            const url = new URL(
                "https://api.chec.io/v1/customers/"+customerId
            );
            
            let headers = {
                "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
                "Accept": "application/json",
                "Content-Type": "application/json",
            };
            
            fetch(url, {
                method: "GET",
                headers: headers,
            })
            .then(response => response.json())
            .then(json => {console.log(json);setToken(json.id);window.location.href="/";});
                  //window.location.href="/"

  }



  const fetchOrderHistories = async () => {
    const data = await commerce.customer.getOrders();
    console.log(data)
    setOrders(data.data)
    
  };

  const fetchCategories = async () => {
    commerce.categories.list()
    .then(categories =>{
      //console.log(categories.data.map(category=>category.name))
      setCategories(categories.data.map(category=>category.name))
    })
  }



  const fetchProductsWithParams = async () => {
    const limit = 50;
    const categorySlug = 'sweatshirt'
    
    commerce.products.list({
      limit: limit,
      category_slug: categorySlug,
    }).then(response =>{
      console.log(response.data)
      setProducts(response.data)
    });

    //console.log(JSON.stringify(data, null, 2))
    
  }

  const fetchCart = async () => {
    // Retrieve the customers current cart (tracked by their browser)
    await commerce.cart.retrieve().then(cart => {
      console.log(cart)
      //console.log(JSON.stringify(cart, null, 2))
      setCart(cart)
    });
  }

  const handleAddToCart = async (productId, quantity, variantId) => {
    console.log(variantId)
    await commerce.cart.add(productId, quantity,  variantId )
    .then(json => {
      //console.log(json)
      setCart(json.cart)
      setOpen(true)
      setSnackbarText(json.product_name+' を買い物かごへ追加しました')
    });
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    await commerce.cart.update(lineItemId, { quantity })
    .then(json => {
      //console.log(json)
      setCart(json.cart)
      setOpen(true)
      setSnackbarText(json.product_name+' の商品数を変更しました')
    });
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


  const handleSignIn =  async (event) => {
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

    fetch(url1, {
      method: "GET",
      headers: headers1
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if(json.customer_id!==undefined){
        //window.location.href="/"
      }else{
        console.log("signin failed")
      }
    });

}


  return (
    <div >
  <ThemeProvider theme={theme}>
  <BrowserRouter>
      <Navbar totalItems={cart.total_items} cusotmer={customer} />
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
      <Route exact path="/a" element={<Invoices products={products} loading={loading} customer={customer} onAddToCart={handleAddToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} order={order} customer={customer} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
      <Route exact path="/product-view/:id" element={<ProductView  onAddToCart={handleAddToCart} />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="/registration-success/:token" element={<Expenses />} />
      <Route exact path="/orders" element={<OrderTable rows={orders} />} />
      <Route exact path="/order-detail/:id" element={<OrderTable />} />

      <Route exact path="/" element={<Home products={products} loading={loading} customer={customer} categories={categories} onAddToCart={handleAddToCart} />} />
      <Route exact path="/collections/:tag" element={<SearchedItems products={products} loading={loading} customer={customer} onAddToCart={handleAddToCart} />} />

      <Route exact path="/signina" element={<SignIna onSignIn={handleSignIn} />} />
      <Route exact path="/signupa" element={<SignUpa createCustomer={createCustomer} />} />
      <Route exact path="/carta" element={<CartItem cart={cart} onUpdateCartQty={handleUpdateCartQty} onEmptyCart={handleEmptyCart} onRemoveFromCart={handleRemoveFromCart} />} />
      <Route exact path="/products/:product" element={<ProDet  onAddToCart={handleAddToCart} products={products} />} />
      <Route exact path="/checkouta" element={<Checkouta customer={customer} cart={cart} onCaptureCheckout={handleCaptureCheckout} />} />
      <Route exact path="/account" element={<MyAccount orders={orders} />} />

      </Routes>
      <Footer title={"Online Fashion Store with React + MUI + k8s"} description={"S.AIKAWA"} />
  </BrowserRouter>
  </ThemeProvider>
    </div>
  )
}