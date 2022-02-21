import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';




let mycart = {
    "id": "cart_A12Jwr96LXlPjn",
    "created": 1644471299,
    "updated": 1644471616,
    "expires": 1647063616,
    "total_items": 0,
    "total_unique_items": 0,
    "subtotal": {
      "raw": 0,
      "formatted": "257.00",
      "formatted_with_symbol": "JPY 257.00",
      "formatted_with_code": "257.00 INR"
    },
    "hosted_checkout_url": "https://checkout.chec.io/cart/cart_A12Jwr96LXlPjn",
    "meta": null,
    "line_items": [
      {
        "id": "item_7RyWOwmK5nEa2V",
        "product_id": "prod_0YnEoqGEOle7P6",
        "name": "As a Man Thinketh",
        "product_name": "As a Man Thinketh",
        "sku": null,
        "permalink": "erv27G",
        "quantity": 1,
        "price": {
          "raw": 59,
          "formatted": "59.00",
          "formatted_with_symbol": "JPY 59.00",
          "formatted_with_code": "59.00 INR"
        },
        "line_total": {
          "raw": 59,
          "formatted": "59.00",
          "formatted_with_symbol": "JPY 59.00",
          "formatted_with_code": "59.00 INR"
        },
        "is_valid": true,
        "product_meta": [],
        "media": {
          "type": "image",
          "source": "https://cdn.chec.io/merchants/28663/assets/jmHrbyaTb3c6aRym|book1.jpg",
          "asset_id": "ast_yA6nldmG1LwEWb"
        },
        "selected_options": [],
        "variant": null,
        "image": {
          "id": "ast_yA6nldmG1LwEWb",
          "url": "https://cdn.chec.io/merchants/28663/assets/jmHrbyaTb3c6aRym|book1.jpg",
          "description": null,
          "is_image": true,
          "filename": "book1.jpg",
          "file_size": 284696,
          "file_extension": "jpg",
          "image_dimensions": {
            "width": 2367,
            "height": 2560
          },
          "meta": [],
          "created_at": 1623195123,
          "updated_at": 1623195128
        },
        "tax": null
      },
      {
        "id": "item_1ypbroE658n4ea",
        "product_id": "prod_kd6Ll2eLj5V2mj",
        "name": "The Jungle Book",
        "product_name": "The Jungle Book",
        "sku": null,
        "permalink": "UmweeF",
        "quantity": 2,
        "price": {
          "raw": 99,
          "formatted": "99.00",
          "formatted_with_symbol": "JPY 99.00",
          "formatted_with_code": "99.00 INR"
        },
        "line_total": {
          "raw": 198,
          "formatted": "198.00",
          "formatted_with_symbol": "JPY 198.00",
          "formatted_with_code": "198.00 INR"
        },
        "is_valid": true,
        "product_meta": [],
        "media": {
          "type": "image",
          "source": "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW|2.jpg",
          "asset_id": "ast_VPvL5z3n49lAQk"
        },
        "selected_options": [],
        "variant": null,
        "image": {
          "id": "ast_VPvL5z3n49lAQk",
          "url": "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW|2.jpg",
          "description": null,
          "is_image": true,
          "filename": "2.jpg",
          "file_size": 440574,
          "file_extension": "jpg",
          "image_dimensions": {
            "width": 1834,
            "height": 1985
          },
          "meta": [],
          "created_at": 1623195572,
          "updated_at": 1623195586
        },
        "tax": null
      }
    ],
    "currency": {
      "code": "INR",
      "symbol": "JPY "
    },
    "discount": []
  };

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );

  //if (!cart.line_items) return 'Loading';
  if (mycart===undefined) return (
    renderEmptyCart()
  )

  const renderCart = () => (
    <>
      <Grid container spacing={4}>
        {mycart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
           <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
      <Typography variant="h5" >Subtotal: <b >{mycart.subtotal.formatted_with_symbol}</b></Typography>
      {/*<Typography variant="h5" >Subtotal: <b >{cart.subtotal.raw+" JPY"}</b></Typography>*/}
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" >Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr/>
      { !mycart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
