import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import Products from "./components/Products/Products"
import ProductView from "./components/ProductView/productView"
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import Footer from './components/Footer/Footer';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

import MyInfo from './MyInfo'
import SignIn from './components/SignIn/Signin';
import useToken from './components/SignIn/useToken';


import { Divider, } from '@mui/material'

import {commerce} from './lib/commerce';

const theme = createTheme({
  palette: {
    primary: {
      main: '#330e62',
    },
    secondary: {
      main: green[500],
    },
  },
});


const API_URL='http://localhost:3001'

export default function App({children}) {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const { token, setToken } = useToken(); // save in localStorage

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, []);


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log(data);
    //console.log(JSON.stringify(data, null, 2));
    setProducts(data);
  };

  const fetchCartData = () => {
    axios.get(API_URL+`/api/cart`)
    .then(res => {
      console.log('axios fetch cart')
      console.log(res)
      setCart(res.data);
    })
  };

  const handleAddToCartData = (productId, quantity) => {

    axios.get(API_URL+`/api/cart/add/`+productId)
    .then(res => {
      console.log('axios cart add')
      console.log(res)
      setCart(res.data)
      fetchCartData()
    })
  };

  const handleUpdateCartQtyData = (lineItemId, quantity) => {
    axios.get(API_URL+`/api/cart/update/`+lineItemId+'/'+quantity)
    .then(res => {
      console.log('axios cart update')
      console.log(res)
      setCart(res.data)
      fetchCartData()
    })
  };

  const handleRemoveFromCartData = (lineItemId) => {
    axios.get(API_URL+`/api/cart/remove/`+lineItemId)
    .then(res => {
      console.log('axios cart remove from cart')
      console.log(res)
      setCart(res.data);
    })
  };

  const handleEmptyCartData = () => {
    axios.get(API_URL+`/api/cart/empty`)
    .then(res => {
      console.log('axios empty cart')
      console.log(res)
      setCart(res.data);
    })
  };

  const refreshCartData = () => {
    fetchCartData()
  };

  const handleCaptureCheckoutData = (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder=newOrder;
      console.log('incomingorder-----------------------')
      console.log(console.log(JSON.stringify(incomingOrder, null, 2)))
      setOrder(incomingOrder)
      refreshCartData();
      handleEmptyCartData();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <div>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
      <Navbar totalItems={cart.total_items} />
      <br/>
      <br/>
      <br/>
      <Divider sx={{margin:'10px'}}/>
      <Routes>
      <Route exact path="/" element={<Invoices products={products}  onAddToCart={handleAddToCartData} handleUpdateCartQty/>} />
      <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQtyData} onRemoveFromCart={handleRemoveFromCartData} onEmptyCart={handleEmptyCartData} />} />
      <Route path="/checkout" element={<Checkout  cart={cart} order={order} onCaptureCheckout={handleCaptureCheckoutData} error={errorMessage} />} />
      <Route exact path="/product-view/:id" element={<ProductView  onAddToCart={handleAddToCartData} />} />
      <Route exact path="/signin" element={<SignIn />} />
      </Routes>
      <Divider sx={{margin:'10px'}}/>
      <Footer />
  </BrowserRouter>
  </ThemeProvider>
    </div>
  );
}