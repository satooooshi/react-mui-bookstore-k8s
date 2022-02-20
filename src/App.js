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



import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

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
    <Routes>
      <Route exact path="/" element={<Products products={products} />} />
      <Route path="/cart" element={<Expenses />} />
      <Route path="/checkout" element={<Invoices />} />
      <Route path="/product-view/:id" element={<ProductView />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
    </div>
  );
}