import React, { useState, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteIcon from '@mui/icons-material/Favorite';

import {
  Link,
  useNavigate,
  Navigate
} from "react-router-dom"

import {commerce} from '../../lib/commerce'

export default function PrimarySearchAppBar({totalItems}) {

  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState({})

  useEffect(() => {
    createGuestCart()
    getCustomerInfo()
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  const createGuestCart = async () => {
    if(localStorage.getItem('token')!==null)return
    setLoading(true)
    console.log('creating guest cart')
    await commerce.cart.retrieve().then(cart => {
      console.log(cart)
      localStorage.setItem('cart_id', cart.id)
    setLoading(false)
    })
  }

  const getCustomerInfo = async () => {
    if(localStorage.getItem('token')===null)return
    let customerId=localStorage.getItem('token')
    const url = new URL(
      "https://api.chec.io/v1/customers/"+customerId
    );
  
    let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
  
    await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then(response => response.json())
      .then(json => {
        setCustomer(json);
      });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' , textDecoration:'none', color:'white'} }}
            component={Link} to="/"
          >
            Online Fashion Store with React + MUI + k8s
          </Typography>


          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' , textDecoration:'none', color:'white'} }}
          >
            Hello, {customer?.id===undefined?"Guest":customer.email}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              href="/account"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              href="/favorites"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton href="/cart" size="large" aria-label="show 4 new mails" color="inherit" >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartCheckoutIcon />
              </Badge>
            </IconButton>
          </Box>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}
