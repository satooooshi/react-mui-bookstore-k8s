import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MediaControlCard({product}) {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, border:1  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          image={product.image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.categories[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}