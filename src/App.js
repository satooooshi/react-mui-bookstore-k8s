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


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

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

export default function App() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchProductsData();
    fetchCartData();
  }, []);

  const fetchProductsData = () => {
    //axios.get(API_URL+`/brotli`)
    axios.get(`http://localhost:3001/api/products`)
    .then(res => {
      console.log(res.data)
      setProducts([...res.data])
    })
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
      <Routes>
      <Route exact path="/" element={<Products products={products}  onAddToCart={handleAddToCartData} handleUpdateCartQty/>} />
      <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQtyData} onRemoveFromCart={handleRemoveFromCartData} onEmptyCart={handleEmptyCartData} />} />
      <Route path="/checkout" element={<Checkout  cart={cart} order={order} onCaptureCheckout={handleCaptureCheckoutData} error={errorMessage} />} />
      <Route exact path="/product-view/:id" element={<ProductView />} />
      </Routes>
  </BrowserRouter>
  </ThemeProvider>
    </div>
  );
}