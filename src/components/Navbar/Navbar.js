import * as React from 'react';
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



export default function PrimarySearchAppBar({totalItems}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' , textDecoration:'none', color:'white'} }}
            component={Link} to="/"
          >
            Online Fashion Store with React + MUI + k8s
          </Typography>


          <Box sx={{ flexGrow: 1 }} />
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
