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

  useEffect(() => {
    createGuestCart()
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
            Hello, {localStorage.getItem('token')===null?"Guest":localStorage.getItem('token')}
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
