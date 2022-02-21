import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export default function ImgMediaCard({product, onAddToCart}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={product.media.source}
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
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={"/product-view/"+product.id} aria-label="add to cart">Show Details</Button>
        <Button size="small" onClick={() => onAddToCart(product.id, 1)}>Add Cart</Button>
      </CardActions>
    </Card>
  );
}