import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import Product from "./Product/Product.js";

import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CategoryPool from '../../CategoryPool';
import CategoryChips from '../../CategoryChips';

let aa=[]

export default function Products({ products, onAddToCart }) {

  const [searchTerm, setSearchTerm] = useState("");

  const [chipPoolData, setChipPoolData] = React.useState([
    { key: 0, label: 'Action' },
    { key: 1, label: 'Classics' },
    { key: 2, label: 'Mystery' },
    { key: 3, label: 'Fantasy' },
    { key: 4, label: 'Sci-Fi' },
  ]);

  const [chipData, setChipData] = React.useState([]);

    useEffect(() => {
        console.log(products)
      }, []);

    return (
      <div>
        色々な本を探す
      <Grid container justifyContent="center" >
        
      <Input
        type="text"
        placeholder="本をキーワードで探す..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      
    </Grid>
    
    <CategoryPool chipPoolData={chipPoolData} setChipPoolData={setChipPoolData} chipData={chipData} setChipData={setChipData} />
    <CategoryChips  chipPoolData={chipPoolData} setChipPoolData={setChipPoolData} chipData={chipData} setChipData={setChipData}  />
    <br/>
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
          .filter((product) => {
            let okk=false
            if (chipData.length === 0) {
              return product;
              } else {
                chipData.forEach((chipVal, idx, array) => {
                  for(let i=0;i<product.categories.length;i++){
                    if(product.categories[i].name===chipVal.label){
                      okk=true;
                    }
                  }
                  //if(product.categories.includes(chipVal.label)){
                  //  okk=true
                  //}
                })
              }
            if(okk) return product
            })
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro">
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
      </div>
    );
  }


