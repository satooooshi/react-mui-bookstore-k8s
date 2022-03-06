import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Typography, Link} from '@mui/material';

import {commerce} from './lib/commerce'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function CartItem({item, onUpdateCartQty, onRemoveFromCart}) {
  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={0} justifyContent="center" alignItems="center">

        <Grid item md={4} >
          <Item elevation={0} ><img width="180" height="180"  src={item.image.url} alt="海の写真" title="空と海"/></Item>
        </Grid>

        <Grid item md={4} >
          <Item elevation={0} >
          <Grid container spacing={1} >
          <Grid item xs={12}>
            <Item elevation={0}>{item.name}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={0}>ブラック / M</Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={0} >{item.price.formatted_with_code}</Item>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          </Grid>
          </Item>
        </Grid>

        
        <Grid item md={4} >
        <Grid container spacing={0} >
          <Item elevation={0}>          
          <Grid display="flex" justifyContent="center" >
          <Button type="button" size="small" onClick={ () => onUpdateCartQty(item.id, parseInt(item.quantity) - 1)} >-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;点&nbsp;</Typography>
          <Button type="button" size="small" onClick={ () => onUpdateCartQty(item.id, parseInt(item.quantity) + 1)} >+</Button>
          </Grid></Item>
          <Item elevation={0}><Button  onClick={() => onRemoveFromCart(item.id)} >削除</Button></Item>
        </Grid>
        </Grid>
        

      </Grid>
    </Paper>
  );
}


export default function Cart({cart, onEmptyCart, onUpdateCartQty, onRemoveFromCart}) {


  const renderEmptyCart = () => (
    <Typography variant="title">カートの中身は空です
      <Button type="button" variant="outlined" href="/" >商品を見に行く</Button>
    </Typography>
  );

  if(cart.id===undefined)return "loading"


  if(cart.total_items===0)return renderEmptyCart()

  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={0} justifyContent="center" alignItems="center">

      <Grid item md={12} >
          <Item elevation={0} >ショッピングカート<br/>ID:&nbsp;{cart?.id}</Item>
      </Grid>

      {cart.line_items.map((item,idx) => (
        <Grid item key={idx} md={12} >
          <Item key={idx} elevation={0} ><CartItem item={item} onUpdateCartQty={onUpdateCartQty} onEmptyCart={onEmptyCart} onRemoveFromCart={onRemoveFromCart} /></Item>
        </Grid>
      ))}

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item elevation={0}></Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={0}>合計:&nbsp;{cart.subtotal.formatted_with_code}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={0}><Button type="button" onClick={ () => onEmptyCart()} >カートを空にする</Button></Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={0}><Button type="button" href="/favorites" >お気に入りのアイテムから追加する</Button></Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={0}><Button type="button" href="/checkouta" >レジへ進む</Button></Item>
        </Grid>

        </Grid>

      <Grid item md={12} >
          <Item elevation={0} >ショッピングガイド</Item>
      </Grid>
       
      </Grid>
    </Paper>
  );
}