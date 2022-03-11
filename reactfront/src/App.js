import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, black } from '@mui/material/colors'
import { Divider, Snackbar, Paper } from '@mui/material'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductDetail from './ProdcutDetail'
import Home from './Home'
import CartItem from './CartItem'
import SignUpa from './SignUp'
import SignIna from './SignIn'
import SearchedItems from './SearchedItems'
import Checkout from './Checkout'
import MyAccount from './MyAccount'
import ProductReview from './ProductReview'

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#263238',
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
    "fontSize": 15,
    "fontWeightLight": 300,
    "fontWeightRegular": 300,
    "fontWeightMedium": 200
  },
  
})

export default function App() {
  return (
    <div >
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <br/>
      <br/>
      <Divider sx={{margin:'10px'}}/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/collections/:slug" element={<SearchedItems />} />
      <Route exact path="/signin" element={<SignIna />} />
      <Route exact path="/signup" element={<SignUpa />} />
      <Route exact path="/cart" element={<CartItem />} />
      <Route exact path="/products/:product" element={<ProductDetail />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/account" element={<MyAccount />} />
      </Routes>
      <Footer title={"Online Fashion Store with React + MUI + k8s"} description={"S.AIKAWA"} />
    </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}