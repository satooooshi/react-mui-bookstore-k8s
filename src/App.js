import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import Products from "./components/Products/Products"
import ProductView from "./components/ProductView/productView"

import axios from 'axios';



const API_URL='https://httpbin.org'

export default function App() {

  const [mydata, setMydata] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(API_URL+`/brotli`)
    .then(res => {
      console.log(res.data)
      setMydata(res.data)
    })
  };

  return (
    <div>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/pro" element={<Products products={products} />} />
      <Route path="/cart" element={<Expenses />} />
      <Route path="/checkout" element={<Invoices />} />
      <Route path="/product-view/:id" element={<ProductView />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}