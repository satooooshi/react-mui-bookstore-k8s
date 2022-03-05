import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Typography} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
///Users/satoshiaikawa/react-mui-bookstore-k8s/src/assets/jacket.gif
export default function FullWidthGrid() {
  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={0} justifyContent="center" alignItems="center">

        <Grid item md={4} >
          <Item elevation={0} ><img width="180" height="180"  src="https://cdn.shop-list.com/res/up/shoplist/shp/__thum370__/ueno-shokai/435121302-60/1.jpg" alt="海の写真" title="空と海"/></Item>
        </Grid>

        <Grid item md={4} >
          <Item elevation={0} >
          <Grid container spacing={1} >
          <Grid item xs={12}>
            <Item elevation={0}>ankle drape slacks Ot1210</Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={0}>ブラック / M</Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={0} >¥6,100</Item>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          </Grid>
          </Item>
        </Grid>

        
        <Grid item md={4} >
        <Grid container spacing={0} >
          <Item elevation={0}>          <Grid display="flex" justifyContent="center" spacing={0}>
          <Button type="button" size="small" >-</Button>
          <Typography>{"4"}</Typography>
          <Button type="button" size="small" >+</Button>
          </Grid></Item>
          <Item elevation={0}><Button>削除</Button></Item>
        </Grid>
        </Grid>
        

      </Grid>
    </Paper>
  );
}