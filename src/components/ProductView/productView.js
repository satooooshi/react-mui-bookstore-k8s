import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Divider, Paper } from '@mui/material';

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './styles.css'
import CategoryTags from './CategoryTags'

import axios from 'axios';
import Review from './Review';

import {commerce} from '../../lib/commerce';


const createMarkup = (text) => {
    return { __html: text };
  };

const ProductView = ({ onAddToCart }) => {

    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    // useStateで配列の更新が上手くいかない
    // https://zenn.dev/gunners6518/articles/4c06488cfa402e
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const id = window.location.pathname.split("/");
      console.log(id);
      fetchProduct(id[2]);
      fetchReviewsData(id[2]);
    }, []);

    const fetchProduct = async (productId) => {
      const response = await commerce.products.retrieve(productId);
      console.log({ response });
      const { id, name, price, image, quantity, description } = response;
      setProduct({
        id, 
        name,
        quantity,
        description,
        src: image.url,
        price: price.formatted_with_symbol,
      });
    };


      const fetchReviewsData = async (productId) => {
        axios.get(`http://localhost:3003/api/reviews/`+productId)
        .then(res => {
          setReviews(res.data);
        })
      };

    return (
        <Grid container>
        <Grid item>
        <Container className="product-view">
          <Grid container>
            <Grid item xs={12} md={6} className="image-wrapper">
              <img src={product.src} alt={product.name}
              />
            </Grid>
            <Grid item xs={12} md={5} className="text">
              <Typography variant="h2"><b>{product.name}</b></Typography>
              <hr />
              <Typography variant="p" dangerouslySetInnerHTML={createMarkup(product.description)} />
              <Typography variant="h3" color="secondary" >価格: <b> {product.price} </b> </Typography>
              <CategoryTags categoriesa={categories} />
              <br/>
 <Grid container justifyContent="space-evenly">
  <Grid item xs>
  <Button variant="outlined" size="small" component={Link} to='/' >戻る</Button>
  </Grid>
  <Grid item xs>
  <Button variant="contained" size="small" onClick={() => onAddToCart(product.id, 1)}>買い物かごへ入れる</Button>
  </Grid>
</Grid>
            </Grid>
          </Grid>
        </Container>
        </Grid>
        
        <Grid item><br/><Typography variant="h5" color="black" >この本のレビュー</Typography><br/><Grid container spacing={1}>{reviews.map((rev) => {
        return (
          <Grid item><Review review={rev} /></Grid>
        );
      })}</Grid></Grid>
     </Grid>
        
      );
    };
    
    export default ProductView;
