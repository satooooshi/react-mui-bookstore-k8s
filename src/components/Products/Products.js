import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import Product from "./Product/Product.js";


export default function Products({ products, onAddToCart }) {

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log(products)
      }, []);

    return (
      <Grid container justify="center" spacing={5} >
        {products
          .filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (
              product.name
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro">
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
    );
  }


