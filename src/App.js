import * as React from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';

import { Link } from "react-router-dom";





export default function App() {
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