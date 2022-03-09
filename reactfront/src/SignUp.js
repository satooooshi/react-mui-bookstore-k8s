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
///Users/satoshiaikawa/react-mui-bookstore-k8s/src/assets/jacket.gif
export default function SignUp() {


  // signUp
  const createCustomer =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    let firstname=data.get('firstname')
    let lastname=data.get('lastname')
    let email=data.get('email')
    let password=data.get('password')

    const url = new URL(
      "https://api.chec.io/v1/customers"
  );
  
  let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Content-Type": "application/json",
      "Accept": "application/json",
  };
  
  let body = {
      "email": email,
      "firstname": firstname,
      "lastname": lastname,
      "external_id": "MY_CRM_USER_123"
  }
  
  let customerId=undefined
  fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
  })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        customerId=json.id
        if(customerId!==undefined){
          //console.log("signup success")
          //Get customer
          const url = new URL(
            "https://api.chec.io/v1/customers/"+customerId
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
              //console.log(json);
              localStorage.setItem('token',json.id)

              // add chec customer to self-proviced auth API to allow authentication with email and password
              //addCustomerToAuthApi({customer_id:resultChec.id, email:resultChec.email, firstname, lastname, password})
              const customerId=json.id
              const url2 = new URL(
                "http://localhost:3002/api/register/"+customerId+"/"+email+"/"+firstname+"/"+lastname+"/"+password
              );

              let headers2 = {
                "Content-Type": "application/json  charset=UTF-8",
                "Accept": "application/json",
              };

              fetch(url2, {
                method: "GET",
                headers: headers2
              })
              .then(response => response.json())
              .then(json => {
                  console.log(json);
                  const createCart = async () => {
                    // Retrieve the customers current cart (tracked by their browser)
                    await commerce.cart.refresh()
                    .then(cart => {
                        console.log(cart)
                        localStorage.setItem('cart_id', cart.id)
                        const url3 = new URL(
                          "http://localhost:3002/api/cart/"+customerId+"/"+cart.id
                        );
          
                        let headers3 = {
                          "Content-Type": "application/json  charset=UTF-8",
                          "Accept": "application/json",
                        };
          
                        fetch(url3, {
                          method: "GET",
                          headers: headers3
                        })
                        .then(response => response.json())
                        .then(json => {
                            console.log(json);
                            window.location.href="/"
                        });

                    });
                  }
                  createCart()

              });

              });

        }else{
          console.log("signup failed")
        }
      });
        

  }

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

      <Grid component="form" noValidate onSubmit={createCustomer} container spacing={2} justifyContent='center' alignItems='center' >

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><Typography variant="h5">新規登録フォーム</Typography><br/>以下の情報を入力してください:</Item>
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            id="lastname"
            label="姓"
            name="lastname"
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="名"
            autoFocus
          />
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
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="新商品やキャンペーン、クーポンなどのお得な情報を受け取る"
          />
        </Grid>

        <Grid item xs={12}>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ margin:'auto', height:70 }}
        >
        新規登録する
        </Button>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >
          <Button
            href="/signin"
            variant="text"
            sx={{ margin:'auto', height:70 }}
          >
            サインインはこちらから　
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