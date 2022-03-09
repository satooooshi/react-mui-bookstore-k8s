import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





export default function ProductVisited({productId}) {

  const [product, setProduct] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetchProduct()
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法


  const fetchProduct = async () => {
    setLoading(true)
    const url = new URL(
      "https://api.chec.io/v1/products/"+productId
    );
    let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setProduct(json)
        setLoading(false)
      })
    

  }

  const handleClick = async (event) => {
    console.log(event.target)
  }

  const addVisited = async (event) => {
    if(localStorage.getItem('token')==null)return 
    const customerId=localStorage.getItem('token')
    const url = new URL(
      'http://localhost:3005/api/histories/add/visited/'+customerId+'/'+product.id
    );
    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
  
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  if(loading)return 'loading'
  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={2} >
        <Grid item md={12} >
          <Item elevation={0} sx={{ height:180,}}><img width="180" height="180"  src={product.image.url} alt="海の写真" title="空と海"/></Item>
        </Grid>
        <Grid item md={12} >
          <Item elevation={0} sx={{height:30,}}>{product.name}</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item elevation={0} sx={{backgroundColor:'white', height:30,}}><Rating name="size-small" defaultValue={Math.floor(Math.random() * (5 - 1 + 1) + 1)} size="small" readOnly />
        ({Math.floor(Math.random() * (200 - 10 + 10) + 10)})</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}>{product.price.formatted_with_code}</Item>
        </Grid>
        <Grid item md={6}>
          <Item elevation={0} sx={{ height:30,}}><Button onClick={handleClick} variant="outlined">後で見る</Button></Item>
        </Grid>
        <Grid item md={6}>
          <Item elevation={0} sx={{ height:30,}}><Button href={"/products/"+product?.id} onClick={addVisited} variant="contained">詳しく</Button></Item>
        </Grid>
      </Grid>
    </Paper>
  );
}