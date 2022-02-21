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




const API_URL='https://httpbin.org'

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = () => {
    //axios.get(API_URL+`/brotli`)
    axios.get(`http://localhost:3001/api/products`)
    .then(res => {
      console.log(res.data)
      setProducts([...res.data])
    })
  };

  return (
    <div>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
      <Navbar/>
      <br/>
      <Routes>
      <Route exact path="/" element={<Products products={products} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Invoices />} />
      <Route exact path="/product-view/:id" element={<ProductView />} />
      </Routes>
  </BrowserRouter>
  </ThemeProvider>
    </div>
  );
}