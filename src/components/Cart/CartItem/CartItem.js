import React from 'react';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} sx={{height: 0,paddingTop: '100%', }} />
      <CardContent 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6" color='secondary' >JPY&nbsp;{item.line_total.raw}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between',}}>
        <Box display="flex" justifyContent="space-between">
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, parseInt(item.quantity) - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, parseInt(item.quantity) + 1)}>+</Button>
        
        <Button 
          sx={{
            color: 'white',
            width: '100%',
            height: '40px',
          }} 
          variant="contained" type="button" color='secondary' onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
          </Box>
      </CardActions>
    </Card>
  );
};

export default CartItem;

/*

*/
