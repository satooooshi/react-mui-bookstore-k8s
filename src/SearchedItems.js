import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Divider,  ButtonGroup } from '@mui/material';
import { Input, InputAdornment } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

import Product from './Product';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

  const [tag, setTag] = useState('')

  useEffect(() => {
    const id = window.location.pathname.split("/");
    console.log(id[2])
    setTag(decodeURI(id[2]))
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  const fetchProducts = async () => {
    console.log(window.location.pathname)
  }

  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={2} justify="center" alignItems="center" >

        <Grid item xs={6} md={12}>
          <Divider variant="thick" />
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >検索結果</Item>
        </Grid>
      
        <Grid item xs={6} md={12}>
          <Divider variant="thick" />
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >{"- "+tag+" -"}</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >サブジャンルproduct.filter</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><VariantButtonGroup elems={['ジャケット','ボア','レザー','ブルゾン','コート']}/></Item>
        </Grid>

        <Grid item xs={12} md={12}>
          <Item elevation={0}>並べ替えるarray1.sort()</Item>
        </Grid>
        <Grid item xs={12} md={12}>
          <Item elevation={0}><Divider/><VariantButtonGroup elems={['新しい順', '人気順', '価格が安い順', '価格が高い順']}/><Divider/></Item>
        </Grid>




      </Grid>


      
    </Paper>
  );
}




function VariantButtonGroup({elems}) {
  const [selected, setSelected] = React.useState('')

  const handleChange = (event) => {
    setSelected(event.target.value)
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
                {elems.map((elem, idx) => (
                  <Button value={elem} sx={{backgroundColor:selected===elem?'black':'white', color:selected===elem?'white':'black'}} onClick={handleChange} >{elem}</Button>
                ))}
      </ButtonGroup>
    </Box>
  );
}



