import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom';

export default function ImgMediaCard({product, onAddToCart}) {
  return (
    <Card sx={{ maxWidth: 345, border:1 }}>
      <CardMedia
        component="img"
        alt="im image"
        height="400"
        image={product.image.url}
        //image="https://cdn.chec.io/merchants/28663/assets/jmHrbyaTb3c6aRym%7Cbook1.jpg"
      />
      <CardContent         
        sx={{
          display: 'inline',
        }}>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          JPY <b>{product.price.formatted}</b>
        </Typography>
        <Rating name="size-small" defaultValue={Math.floor(Math.random() * (5 - 1 + 1) + 1)} size="small" readOnly />
        ({Math.floor(Math.random() * (200 - 10 + 10) + 10)})
      </CardContent>
      <CardActions        
       sx={{
          display: 'inline',
        }}>
        <Button sx={{
          margin: '5px',
        }} varient="outlined"  size="small" component={Link} to={"/product-view/"+product.id} aria-label="add to cart">詳しく見る</Button>
        <Button sx={{
          margin: '5px',
        }} variant="contained" size="small" onClick={() => onAddToCart(product.id, 1)}>買い物かごへ入れる</Button>
      </CardActions>
    </Card>
  );
}