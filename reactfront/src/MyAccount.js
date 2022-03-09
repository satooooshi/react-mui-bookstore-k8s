import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box, Button, Paper, Grid, Rating, Typography, Link} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const dateFormatter = (data) => {
  let myDate = new Date(data*1000)
  console.log(myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds())
  return myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds()
}

function OrderItem({orderedItem}) {
  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >

          <Grid container spacing={0} justifyContent="center" alignItems="center">

            <Grid item xs={4}>
              <Item elevation={0}>オーダーID</Item>
            </Grid>
            <Grid item xs={4}>
              <Item elevation={0}>オーダーした日付</Item>
            </Grid>
            <Grid item xs={4}>
              <Item elevation={0}>支払い合計</Item>
            </Grid>

          </Grid>
          
           <Grid container spacing={0} justifyContent="center" alignItems="center">

            <Grid item xs={4}>
              <Item elevation={0}>{orderedItem.id}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item elevation={0}>{dateFormatter(orderedItem.created)}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item elevation={0}>{orderedItem.order_value.formatted_with_code}</Item>
            </Grid>

          </Grid>
   
    </Paper>
  );
}




export default function MyAccount() {

  
  const [customer, setCustomer] = useState({})
  const [orderHistories, setOrderHistories] = useState({})

  useEffect(() => {
    let customerId=null
    customerId=localStorage.getItem('token')
    if(customerId==null)window.location.href="/signup"
    //customerId=customerId.substring(1,customerId.length-1)
    console.log(customerId)
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
        console.log(json)
        setCustomer(json)
        fetchOrderHistories()
      });

  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法



  const fetchOrderHistories = async () => {
    let customerId=null
    customerId=localStorage.getItem('token')
    //customerId=customerId.substring(1,customerId.length-1)
    const url = new URL(
      "https://api.chec.io/v1/customers/"+customerId+"/orders"
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
        setOrderHistories(json)
    });

};

  if(customer?.id===undefined)return "loading"
  if(orderHistories?.meta===undefined)return "loading"


  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={0} justifyContent="center" alignItems="center">

      <Grid item md={12} >
          <Item elevation={0} >マイアカウント<br/>&nbsp;おかえりなさい, {customer.firstname} ( {customer.email} )！</Item>
      </Grid>

      <Grid item xs={12}>
          <Item elevation={0}><Button variant="contained" onClick={() => {localStorage.removeItem('token');localStorage.removeItem('cart_id');window.location.href="/"}} >ログアウトする</Button></Item>
        </Grid>

      <Grid item md={12} >
          <Item elevation={0} >今までのオーダー履歴</Item>
      </Grid>

      {
      orderHistories?.data===undefined ?
      <Grid item md={12} >
          <Item elevation={0} >まだオーダーはありません。<Button variant="outlined" href="/" > 商品を見に行く</Button></Item>
      </Grid>
      :
      <div>{orderHistories.data.map((orderedItem,idx) => (
        <Grid item key={idx} md={12} >
          <Item key={idx} elevation={0} ><OrderItem orderedItem={orderedItem} /></Item>
        </Grid>
      ))}</div>
    }
       
      </Grid>
    </Paper>
  );
}