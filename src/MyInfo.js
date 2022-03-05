import React, { useState, useEffect } from 'react';

import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button } from '@mui/material';
import { LocationOn, Edit } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

import useToken from './components/SignInUp/useToken';
import SignIn from './components/SignInUp/SignIn'

import {commerce} from './lib/commerce'

export default function MyInfo({loading, customer}) {


  if(!loading){
    return <div><Button variant="outlined" href="/signin" >サインインする</Button><Button variant="outlined" href="/signup" >サインアップする</Button></div>
  }

  return (
<Card sx={{height:'100%'}}>
  <Box sx={{ p: 2, display: 'flex' }}>
    <Avatar variant="rounded" src="./assets/logo.png" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>{'Hello, '+customer.firstname+" "+customer.lastname+' !'}</Typography>
      <Typography variant="body2" color="text.secondary">{customer.email}</Typography>
    </Stack>
  </Box>
  <Divider />
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
  >
    <Button variant="outlined" onClick={() => {commerce.customer.logout();}} >ログアウトする</Button>
  </Stack>
</Card>
    );
  }