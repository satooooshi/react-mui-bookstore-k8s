import * as React from 'react';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Card, Grid } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';


let review={
    review_id: 'review_86627e8f-7911-4fbd-aab8-aa2c5f3b7e75',
    title: 'おススメです',
    stars: 5,
    date: 'Tue Oct 05 2021 03:04:40 GMT+0900 (日本標準時)',
    content: '軽くて着やすい！風を通さず暖かい. 168am 58kg. サイズはMでベストサイズでした',
    customer_id: 'customer_5fc8f47f-cc6c-4535-b171-abdb276adb7b',
    product_id: 'prod_ZM8X5nL6Orwpv4'
}


export default function ProductReview() {

  return (

    <Grid container justify="center" spacing={1} >
    {[1,2,3].map((reviewa, idx) => (
    <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
    <Card elevation={1} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        title={review.title}
        subheader={review.date}
      />
      <Rating name="size-small" defaultValue={Math.floor(Math.random() * (5 - 1 + 1) + 1)} size="small" readOnly />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {review.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
  );
}