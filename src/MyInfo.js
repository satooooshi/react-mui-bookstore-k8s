import * as React from 'react';

import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button } from '@mui/material';
import { LocationOn, Edit } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

import useToken from './components/SignIn/useToken';
import SignIn from './components/SignIn/Signin'

export default function Invoices() {

  const { token, deleteToken } = useToken(); // save in localStorage

  if(!token) {
    //return <Login setToken={setToken} /> 
    return <Button variant="outlined" href="/signin" >サインインする</Button>
  }

  return (
<Card sx={{height:'100%'}}>
  <Box sx={{ p: 2, display: 'flex' }}>
    <Avatar variant="rounded" src="./assets/logo.png" />
    <Stack spacing={0.5}>
      <Typography fontWeight={700}>{token}</Typography>
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
    <Button variant="outlined" onClick={() => deleteToken()} >ログアウトする</Button>
  </Stack>
</Card>
    );
  }