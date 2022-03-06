import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Typography, Link} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function OrderItem({order}) {
  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
   
    </Paper>
  );
}




export default function MyAccount({orders}) {

  const [customer, setCustomer] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    let customerId=undefined
    customerId=localStorage.getItem('token')
    if(customerId===undefined)navigate('/signupa')
    console.log(customerId)
    customerId=customerId.substring(1,customerId.length-1)
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
        console.log(json);
        setCustomer(json);
        console.log(orders)
      });

  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  if(customer?.id===undefined)return "loading"


  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={0} justifyContent="center" alignItems="center">

      <Grid item xs={12}>
          <Item elevation={0}><Button type="button" variant="contained" href="/checkouta" onClick={()=>localStorage.removeItem('token')} >ログアウトする</Button></Item>
        </Grid>

      <Grid item md={12} >
          <Item elevation={0} >マイアカウント<br/>&nbsp;おかえりなさい, {customer.firstname}！</Item>
      </Grid>

      <Grid item md={12} >
          <Item elevation={0} >今までのオーダー履歴</Item>
      </Grid>

      {[1,2,3].map((item,idx) => (
        <Grid item key={idx} md={12} >
          <Item key={idx} elevation={0} ><OrderItem  /></Item>
        </Grid>
      ))}
       
      </Grid>
    </Paper>
  );
}