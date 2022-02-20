import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import axios from 'axios';



const API_URL='https://httpbin.org'

export default function App() {

  const [mydata, setMydata] = useState({});

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
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Button variant="contained">Hello World</Button>
      </nav>
    </div>
  );
}