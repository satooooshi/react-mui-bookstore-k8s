import React, { useState, useEffect } from 'react';

import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button } from '@mui/material';
import { LocationOn, Edit } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

import useToken from './components/SignIn/useToken';
import SignIn from './components/SignIn/Signin'

import {commerce} from './lib/commerce'

export default function MyInfo() {

  const { token, deleteToken } = useToken(); // save in localStorage
  const [ customer, setCustomer ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    fetchCustomerInfo()
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  const fetchCustomerInfo = async () => {
    const ok = await commerce.customer.isLoggedIn()
    console.log(ok)
    const  data  = await commerce.customer.about()
    console.log(data)
    setLoading(ok)
    setCustomer(data)
    commerce.customer.getOrders().then((orders) => console.log(orders));
  }

  //if(!token) {
  if(!loading){
    //return <Login setToken={setToken} /> 
    return <Button variant="outlined" href="/signin" >サインインする</Button>
  }

  return (
<Card sx={{height:'100%'}}>
  <Box sx={{ p: 2, display: 'flex' }}>
    <Avatar variant="rounded" src="./assets/logo.png" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>{customer.email}</Typography>
      <Typography variant="body2" color="text.secondary">

      </Typography>
    </Stack>
  </Box>
  <Divider />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
  >
    <Button variant="outlined" onClick={() => {deleteToken();commerce.customer.logout();}} >ログアウトする</Button>
  </Stack>
</Card>
    );
  }