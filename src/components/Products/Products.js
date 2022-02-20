import React, { useState, useEffect } from 'react';

export default function Products({ products, onAddToCart }) {

    useEffect(() => {
        console.log(products)
      }, []);

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>products </h2>
      </main>
    );
  }