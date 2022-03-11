import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Checkbox, Link, Typography, Container, FormControlLabel, CssBaseline, ThemeProvider, TextField, Paper, Grid } from '@mui/material';

import {commerce} from './lib/commerce'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SignIn() {

  const handleSignIn =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    let email=data.get('email')
    let password=data.get('password')

    // login with self-provided auth API
    //let result=fetchCustomerFromAuthApi({email, password})
    const url1 = new URL(
      process.env.REACT_APP_CUSTOMERS_API_URL+"/api/login/"+email+"/"+password
    );
    let headers1 = {
      "Content-Type": "application/json  charset=UTF-8",
      "Accept": "application/json",
    };

    fetch(url1, {
      method: "GET",
      headers: headers1
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if(json.customer_id!==undefined){
        localStorage.setItem('token', json.customer_id)
        const fetchCartByCartId = async (cartId) => {
          await commerce.cart.retrieve(cartId)
          .then(cart => {
            console.log(cart)
            localStorage.setItem('cart_id', cart.id)
            window.location.href="/"
          });
        }
        fetchCartByCartId(json.cart_id)
        
      }else{
        console.log("signin failed")
      }
    });

}

  if(localStorage.getItem('token'))window.location.href="/account"
  
  return (        
    <Paper
    elevation={0}
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: '50%',
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >

      <Grid component="form" noValidate onSubmit={handleSignIn} container spacing={2} justifyContent='center' alignItems='center' >

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><Typography variant="h5">ログイン</Typography><br/>メールとパスワードを入力してください:</Item>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="メールアドレス（Gmail等のフリーメール推奨）"
            name="email"
            autoComplete="my-email"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="my-password"
          />
        </Grid>

        <Grid item xs={12}>
        </Grid>

      <Grid item xs={12}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ margin:'auto', height:70 }}
      >
        ログインする
      </Button>
      </Grid>

      <Grid item xs={6} md={12}>
          <Item elevation={0} >
          <Button
            href="/signup"
            variant="text"
            sx={{ margin:'auto', height:70 }}
          >
            アカウントを新規で作成する
          </Button>
          </Item>
      </Grid>

      </Grid>
      </Paper>
  );
}


// for testing form fubmission
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };