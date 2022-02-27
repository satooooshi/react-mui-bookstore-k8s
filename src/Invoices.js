import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import MyInfo from './MyInfo'
import Products from './components/Products/Products';
import CategoryChips from './CategoryChips';
import Recommendations from './Recommendations';
import HotCategories from './HotCategories';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
//<Item sx={{height:150}}><Button variant="outlined" component={Link} to="/cart" >買い物かごを見る</Button></Item>
export default function Invoices({ products, onAddToCart }) {
    return (

  <Grid container spacing={2} >

    <Grid item xs={8}>
    <Item sx={{height:150}}><Button variant="outlined" component={Link} to="/cart" >買い物かごを見る</Button></Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{height:150}}><MyInfo /></Item>
  </Grid>
  <Grid item xs={8}>
    <Item elevation={0}>人気急上昇の本</Item>
    <Grid container spacing={2} >
    {products.slice(0,3).map((product) => (
      <Grid item xs={4}>
        <Item elevation={0}><Recommendations product={product}/></Item>
      </Grid>
    ))}
    </Grid>
  </Grid>
  <Grid item xs={4}>
    <Item　elevation={0}>人気のジャンル</Item>
    <Grid container spacing={2} >
    {products.slice(0,4).map((product) => (
      <Grid item xs={6}>
        <Item elevation={0}><HotCategories product={product}/></Item>
      </Grid>
    ))}
    </Grid>
  </Grid>
  <Grid item xs={12}>
    <Item><Products products={products}  onAddToCart={onAddToCart} handleUpdateCartQty /></Item>
  </Grid>
  
  </Grid>
  
    );
  }