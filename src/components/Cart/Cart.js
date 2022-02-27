import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box, ThemeProvider, createTheme } from '@mui/system';

import Link from '@mui/material/Link';// href
import CartItem from './CartItem/CartItem';


const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {


  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="title">カートの中身は空です,
      <Link sx={{
    textDecoration: 'none',
  }} href="/" > 本を見に行く</Link>!
    </Typography>
  );

  //if (!cart.line_items) return 'Loading';
  if (cart===undefined) return (
    renderEmptyCart()
  )

  const renderCart = () => (
    <>
      <Grid container spacing={4}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
           <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div sx={{
    display: 'flex',
    marginTop: '7%',
    width: '100%',
    justifyContent: 'space-between',
  }}>
      
        <div>
        <Box display="flex" justifyContent="flex-end" m={1}>
          <Typography 
            sx={{
              minWidth: '150px',
              height: '40px',
              margin:'5px',
            }} 
            variant="h5" >合計: <b >JPY&nbsp;{cart.subtotal.raw}</b></Typography>
          <Button 
            sx={{
              minWidth: '150px',
              background: '#1C2331',
              color: 'white',
              height: '40px',
              margin:'5px',
    
              '&:hover': {
                  backgroundColor: '#2a344a',
                  boxShadow: 'none',
                  color: 'white',    
              },
            }} 
            size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
              Empty cart
          </Button>
          <Button 
            sx={{
              minWidth: '150px',
              background: '#1C2331',
              color: 'white',
              height: '40px',
              margin:'5px',
    
              '&:hover': {
                backgroundColor: '#2a344a',
                boxShadow: 'none',
                color: 'white',    
              },
            }} component={Link} href="/checkout" size="large" type="button" variant="contained" >
              Checkout
            </Button>
  </Box>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div  />
      <Typography sx={{marginTop: '3%',}} variant="h5" gutterBottom><b>カートの中身</b></Typography>
      <hr/>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
