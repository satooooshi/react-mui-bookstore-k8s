import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Divider,  ButtonGroup } from '@mui/material';
import { Input, InputAdornment } from '@mui/material';


import SearchBar from './SearchBar'
import Product from './Product';
import VisitedProducts from './VisitedProducts';
import Hero from './Hero'

import {commerce} from './lib/commerce'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home({}) {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    fetchCategories()
    fetchProductsWithParams()
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法

  const fetchProductsWithParams = async () => {
    setLoading(true)
    const limit = 50;
    //const categorySlug = 'sweatshirt'
    
    commerce.products.list({
      limit: limit,
      //category_slug: categorySlug,
    }).then(response =>{
      console.log(response.data)
      setProducts(response.data)
      setLoading(false)
    });
  }

  const fetchCategories = async () => {
    setLoading(true)
    commerce.categories.list()
    .then(categories =>{
      setCategories(categories.data.map(category=>({name:category.name, image:category?.assets[0]?.url})))
      setLoading(false)
    })
  }


  if(loading)return 'loading'
  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <Grid container spacing={1} justify="center" alignItems="center" >

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><Hero/></Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <a id="main-list">
          <Item elevation={0} ><SearchBar setSearchTerm={setSearchTerm} /></Item>
          </a>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >New Arrival<br/>新作公開後24時間限定10%OFF</Item>
        </Grid>

        <Grid item xs={12} md={12}>
          <Item elevation={0} >
            <Grid container justify="center" spacing={1} >
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
            .map((product,idx) => (
              <Grid item key={idx} xs={12} sm={6} md={3} >
                <Product product={product} />
              </Grid>
            ))}
            </Grid>
          </Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >最近チェックした商品</Item>
        </Grid>

        <Grid item xs={12} md={12}>
          <Item elevation={0} >
            <VisitedProducts />
          </Item>
        </Grid>



        <Grid item xs={6} md={12}>
          <Item elevation={0} >Weekly Ranking<br/>1週間の売れ筋アイテムをご紹介！</Item>
        </Grid>

        <Grid item xs={6} md={12}>
          <Item elevation={0} >Category<br/>カテゴリーからアイテムを探す</Item>
        </Grid>
        
        <Grid item xs={6} md={12}>
        <Grid container justifyContent="center" spacing={2}>
        {categories.map((elem,idx) => (
        <Grid elevation={0}　item key={idx} md={3}>
        <Item　elevation={0}　>
        <Grid item md={12} >
          <Item elevation={0} sx={{ height:180,}}><img width="180" height="180"  src={elem?.image} alt="海の写真" title="空と海"/></Item>
        </Grid>
        <Grid item md={12} >
          <Item elevation={0} sx={{height:30,}}><Button href={"/collections/"+elem.name}>{elem.name}</Button></Item>
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
                  <Button key={idx} value={elem} sx={{backgroundColor:selected===elem?'black':'white', color:selected===elem?'white':'black'}} onClick={handleChange} >{elem}</Button>
                ))}
      </ButtonGroup>
    </Box>
  );
}
