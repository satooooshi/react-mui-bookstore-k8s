import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './styles.css'


let myproduct ={
  "id": "prod_0YnEoqGEOle7P6",
  "created": 1623195206,
  "updated": 1623666583,
  "active": true,
  "permalink": "erv27G",
  "name": "As a Man Thinketh",
  "description": "<p>by James Allen <em> (Author)</em></p><p>In <strong>As a Man Thinketh</strong>, James Allen points out the power of thoughts in shaping our realities. Often, we think that we are the victims of circumstance while in truth our thoughts, actions, and habits create the circumstances we dislike. The solution is to cultivate better thoughts just like we would treat a garden. Everyone should read it</p><p>Can you think of a single moment in the whole day when your mind is blank and thoughtless?Do you know how powerful every thought is?“Cherish your visions; cherish your ideals; cherish the music that stirs in your heart, the beauty that forms in your mind, the loveliness that drapes your purest thoughts, for out of them will grow all delightful conditions, all heavenly environment; of these, if you but remain true to them, your world will at last be built.”Giving an insight into the power of thoughts; the effect they have on our health, body and circumstances; and how we become what we think; this compelling literary essay by James Allen contains practical wisdom which will inspire, enlighten and help us discover our hidden powers.Written in a spiritual tone, As a Man Thinketh has been a valuable source of inspiration ever since its first publication in 1903. It continues to remain a classic bestseller.</p>",
  "price": {
    "raw": 59,
    "formatted": "59.00",
    "formatted_with_symbol": "JPY 59.00",
    "formatted_with_code": "59.00 INR"
  },
  "inventory": {
    "managed": false,
    "available": 0
  },
  "sku": null,
  "sort_order": 0,
  "seo": {
    "title": null,
    "description": null
  },
  "thank_you_url": null,
  "meta": null,
  "conditionals": {
    "is_active": true,
    "is_tax_exempt": false,
    "is_pay_what_you_want": false,
    "is_inventory_managed": false,
    "is_sold_out": false,
    "has_digital_delivery": false,
    "has_physical_delivery": true,
    "has_images": true,
    "collects_fullname": false,
    "collects_shipping_address": true,
    "collects_billing_address": false,
    "collects_extra_fields": false,
    "has_video": false,
    "has_rich_embed": false
  },
  "is": {
    "active": true,
    "tax_exempt": false,
    "pay_what_you_want": false,
    "inventory_managed": false,
    "sold_out": false
  },
  "has": {
    "digital_delivery": false,
    "physical_delivery": true,
    "images": true
  },
  "collects": {
    "fullname": false,
    "shipping_address": true,
    "billing_address": false,
    "extra_fields": false
  },
  "checkout_url": {
    "checkout": "https://checkout.chec.io/erv27G?checkout=true",
    "display": "https://checkout.chec.io/erv27G"
  },
  "media": {
    "type": "image",
    "source": "https://cdn.chec.io/merchants/28663/assets/jmHrbyaTb3c6aRym|book1.jpg",
    "asset_id": "ast_yA6nldmG1LwEWb"
  },
  "extra_fields": [],
  "variant_groups": [],
  "categories": [],
  "assets": [
    {
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
    }
  ],
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
  "related_products": [],
  "attributes": []
};

const createMarkup = (text) => {
    return { __html: text };
  };

const ProductView = () => {

    const [product, setProduct] = useState({});

    const fetchProduct = async (id) => {
        //const response = await commerce.products.retrieve(id);
        //console.log({ response });
        //const { name, price, media, quantity, description } = response;
        const { name, price, media, quantity, description } = myproduct;
        setProduct({
          name,
          quantity,
          description,
          src: media.source,
          price: price.formatted_with_symbol,
        });
      };

      useEffect(() => {
        const id = window.location.pathname.split("/");
        console.log(id);
        fetchProduct(id[2]);
      }, []);

    return (
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
              <Typography variant="h3" color="secondary" >Price: <b> {product.price} </b> </Typography>
              <br/>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button size="large" className="custom-button" component={Link} to='/' >
                     Continue Shopping
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      );
    };
    
    export default ProductView;
