import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Divider,  ButtonGroup } from '@mui/material';
import { Input, InputAdornment } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar'

import Product from './Product';

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
      <Grid container spacing={1} justify="center" alignItems="center" >

        <Grid item xs={6} md={12}>
          <Item elevation={0} >韓国ファッションメンズ通販サイト</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><SearchBar/></Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >New Arrival<br/>新作公開後24時間限定10%OFF</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >
            <Grid container justify="center" spacing={5} >
            {[1,2,3,4,5,6,7,8].map((product,idx) => (
              <Grid item key={idx} lg={3} >
                <Product />
              </Grid>
            ))}
            </Grid>
          </Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >過去に見たアイテム</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >Weekly Ranking<br/>1週間の売れ筋アイテムをご紹介！</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >Category<br/>カテゴリーからアイテムを探す</Item>
        </Grid>
        
        <Grid item xs={6} md={12}>
        <Grid container justifyContent="center" spacing={2}>
        {[1,2,3].map((product,idx) => (
        <Grid item md={3}>
        <Item>
        <Grid item md={12} >
          <Item elevation={0} sx={{ height:180,}}><img width="180" height="180"  src="https://cdn.shop-list.com/res/up/shoplist/shp/__thum370__/ueno-shokai/435121302-60/1.jpg" alt="海の写真" title="空と海"/></Item>
        </Grid>
        <Grid item md={12} >
          <Item elevation={0} sx={{height:30,}}>アウター</Item>
        </Grid>
        </Item>
        </Grid>
        ))}
        </Grid>
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





function SimpleAccordion() {
  return (
    <div>
      <Accordion elevation={0} expanded={true} >
        
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>色々な条件で探してみる</Typography>
          <SearchIcon />
        </AccordionSummary>
        <AccordionDetails>
        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item md={12}>
        <Input
          type="text"
          placeholder="キーワードで探す"
          onChange={(event) => {
            //setSearchTerm(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        </Grid>
        <Grid item md={12}>
        <Typography>
            おすすめキーワードはこちら
        </Typography>
        </Grid>
        <Grid item md={12}>
        <VariantButtonGroup elems={['ジャケット','ボア','レザー','ブルゾン','コート']} />
        </Grid>
      </Grid>
      <br/>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}