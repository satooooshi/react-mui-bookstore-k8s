import React, { useState, useEffect } from 'react'
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

export default function SignUp() {

  const [ errMsg, setErrMsg ] = useState('')

  // signUp
  const handleSignUp =  async (event) => {

    // create chec customer
    // create customer api customer
    // create cart
    // update customer api cart
    // save into localStorage

    let succe=0

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (var value of data.values()) {
        console.log(value);
    }
    let firstname=data.get('firstname')
    let lastname=data.get('lastname')
    let email=data.get('email')
    let password=data.get('password')

    // create chec customer
    let customerId=undefined
    try {
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
      await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      })             
      .then(response => response.json())
      .then(json => {
          console.log(json);
          if(json?.status_code===undefined){
            customerId=json.id
          }else{
            setErrMsg(json.error.errors.email[0])
            console.log(json.error.errors.email[0])
            return 
          }
      })
      // fetch() はサーバー側でエラーが起こってもレスポンスを reject してくれない
      // レスポンスをreject してくれないということは、catch() の中でエラー処理できないということであり、then() の方にレスポンスが流れて行ってしまうということです。
      // Fetch API の仕様であり、正しい動作のよう
      // fetch() が結果を reject() するのはネットワークエラーのときだけ
      // サーバー側の処理が正常に行われたかどうかは、response.ok を見れば判断できる
      // https://blog.mudatobunka.org/entry/2016/04/26/092518
    } catch (err) {
      //handleErr1(err)
      console.log(err)
      setErrMsg('network error')
      return 
    }

      // save into customer API
      try {
        const url = new URL(
          process.env.REACT_APP_CUSTOMERS_API_URL+"/api/customers/register/"+customerId+"/"+email+"/"+firstname+"/"+lastname+"/"+password
        );
        let headers = {
          "Content-Type": "application/json  charset=UTF-8",
          "Accept": "application/json",
        };
        await fetch(url, {
          method: "GET",
          headers: headers
        })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          if(json?.customer_id!==undefined){
            localStorage.setItem('token',customerId)
          }else{
            setErrMsg('customerregistration failed')
            return 
          }
        })
      } catch (err) {
        //handleErr1(err)
        console.log(err)
        setErrMsg('network error')
        return 
      }

      // create customer's cart
      let cartId=undefined
      try {
        await commerce.cart.refresh()
        .then(cart => {
          if(cart.id!==undefined){
            console.log(cart)
            cartId=cart.id
          }else{
            setErrMsg('customer cart refresh failed')
          }
        })
      } catch (err) {
        //handleErr1(err)
        console.log(err)
        setErrMsg('network error')
        return 
      }

      // update customer's cart
      try {
        const url = new URL(
          process.env.REACT_APP_CUSTOMERS_API_URL+"/api/customers/cart/"+customerId+"/"+cartId
        );
        let headers = {
          "Content-Type": "application/json  charset=UTF-8",
          "Accept": "application/json",
        };
        await fetch(url, {
          method: "GET",
          headers: headers
        })
        .then(response => response.json())
        .then(json => {
          if(json?.cart_id!==undefined){
            console.log(json);
            localStorage.setItem('cart_id', cartId)
            succe=true
          }else{
            setErrMsg('update customer cart failed')
            return 
          }
        })
      } catch (err) {
        //handleErr1(err)
        console.log(err)
        setErrMsg('network error')
        return 
      }

      if(succe===true){
        window.location.href="/"
      }else{
        localStorage.removeItem('token')
        localStorage.removeItem('cart_id')
        // delete chec customer
        try{
        const url = new URL(
          "https://api.chec.io/v1/customers/"+customerId
        );
        let headers = {
          "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
        await fetch(url, {
          method: "DELETE",
          headers: headers,
        })
          .then(response => response.json())
          .then(json => console.log(json));
        } catch (err) {
          //handleErr1(err)
          console.log(err)
          setErrMsg('network error')
          return 
        }
        // delete customer API's customer
        try{
          const url = new URL(
            process.env.REACT_APP_CUSTOMERS_API_URL+'/api/customers/delete/'+customerId
          );
          let headers = {
            "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
          await fetch(url, {
            method: "DELETE",
            headers: headers,
          })
            .then(response => response.json())
            .then(json => console.log(json));
          } catch (err) {
            //handleErr1(err)
            console.log(err)
            setErrMsg('network error')
            return 
          }
          // delete cart (optional)
          // delete cart info in customer API
      }

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

      <Grid component="form" noValidate onSubmit={handleSignUp} container spacing={2} justifyContent='center' alignItems='center' >

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><Typography variant="h5">新規登録フォーム</Typography><br/>以下の情報を入力してください:</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><Typography variant="h5">{errMsg}</Typography></Item>
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