import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Divider,  ButtonGroup, Typography } from '@mui/material';

import Product from './Product'
import SearchBar from './SearchBar'

import {commerce} from './lib/commerce'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

  const [slug, setSlug] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [sortItem, setSortItem] = useState('')

  useEffect(() => {
    const id = window.location.pathname.split("/")
    console.log(id[2])
    setSlug(decodeURI(id[2]))
    fetchProductsWithParams(id[2])
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  const fetchProductsWithParams = async (slug) => {
    const limit = 50
    const categorySlug = slug
    
    commerce.products.list({
      limit: limit,
      category_slug: categorySlug,
    }).then(response =>{
      console.log(response.data)
      setProducts(response.data)
    });

    //console.log(JSON.stringify(data, null, 2))
    
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
          <Item elevation={0} ><Typography>検索結果</Typography></Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >{"- "+slug+" -"}</Item>
        </Grid>

              
        <Grid item xs={6} md={12}>
          <Divider variant="thick" />
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><SearchBar setSearchTerm={setSearchTerm} /></Item>
        </Grid>

        {/* 
        <Grid item xs={6} md={12}>
          <Item elevation={0} >サブカテゴリで探す</Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item elevation={0} ><SubCategories elems={["turtleneck", "sweatshirt", "fleece" ]} /></Item>
        </Grid>
        */}

        <Grid item xs={12} md={12}>
          <Item elevation={0}><Divider/><SortButtons setSortItem={setSortItem} elems={['価格が安い順', '価格が高い順','新しい順', '人気順']}/><Divider/></Item>
        </Grid>


        
        <Grid item xs={6} md={12}>
        <Grid container justify="center" spacing={5} >
        {products
          .filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (
              product.name
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          .sort((a, b)=>{
            if(sortItem==='価格が高い順') {return b.price.raw - a.price.raw;}
            else if(sortItem==='価格が安い順') {return a.price.raw - b.price.raw;}
            else return ;
          })
          .map((product, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
          ))}
      </Grid>
      </Grid>




      </Grid>


      
    </Paper>
  );
}




function SortButtons({elems, setSortItem}) {
  const [selected, setSelected] = React.useState('')

  const handleChange = (event) => {
    setSelected(event.target.value)
    setSortItem(event.target.value)
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
                  <Button key={idx} value={elem} sx={{backgroundColor:selected===elem?'black':'white', color:selected===elem?'white':'black'}} onClick={handleChange} >{elem}</Button>
                ))}
      </ButtonGroup>
    </Box>
  );
}


function SubCategories({elems}) {
  const [selected, setSelected] = React.useState('')
  
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
                  <Button key={idx} href={"/collections/"+elem} sx={{backgroundColor:selected===elem?'black':'white', color:selected===elem?'white':'black'}} >{elem}</Button>
                ))}
      </ButtonGroup>
    </Box>
  );
}


