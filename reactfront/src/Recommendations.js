import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({product}) {
  return (
    <Card sx={{ maxWidth: 345, border:1 }}>
      <CardActionArea component={Link} to={"/product-view/"+product.id}>
        <CardMedia
          component="img"
          height="200"
          image={product.image.url}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="h6" color="text.secondary">
          JPY <b>{product.price.formatted}</b>
        </Typography>
        <Button sx={{
          margin: '5px',
        }} varient="outlined"  size="small" component={Link} to={"/product-view/"+product.id} aria-label="add to cart">
            詳しく見る
        </Button>
      </CardActions>
    </Card>
  );
}