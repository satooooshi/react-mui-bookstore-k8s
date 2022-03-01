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
import SignIn from './components/SignIn/Signin'
import SignUp from './components/SignIn/SignUp'
import useToken from './components/SignIn/useToken'


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

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  

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
      <Route exact path="/" element={<Invoices products={products}  onAddToCart={handleAddToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
      <Route exact path="/product-view/:id" element={<ProductView  onAddToCart={handleAddToCart} />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="/registration-success/:token" element={<Expenses />} />
      <Route exact path="/orders" element={<OrderTable />} />
      <Route exact path="/order-detail/:id" element={<OrderTable />} />
      </Routes>
      <Divider sx={{margin:'10px'}}/>
      <Footer title={"Online Bookstore with React + MUI + k8s"} description={"S.AIKAWA"} />
  </BrowserRouter>
  </ThemeProvider>
    </div>
  )
}