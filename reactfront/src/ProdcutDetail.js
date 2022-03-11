import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Tabs, Tab, Typography, ButtonGroup } from '@mui/material';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import PropTypes from 'prop-types';

import Product from './Product';
import MySnackbar from './MySnackbar'
import ProductReview from './ProductReview';

import {commerce} from './lib/commerce';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProdcutDetail() {

  const [images, setImages] = React.useState([])
  const [selectedImage, setSelectedImage] = React.useState('')

  const [variants, setVariants] = useState([])
  const [opdict, setOpdict] = useState({})
  const [vdict, setVdict] = useState({})

  const [product, setProduct] = useState({})

  const [selected, setSelected] = React.useState('')


    // snackbar
    const [open, setOpen] = React.useState(false)
    const [snackbarText, setSnackbarText] = React.useState('')



  useEffect(() => {
    const id = window.location.pathname.split("/")
    //console.log(id)
    fetchProduct(id[2])
    //fetchProductVariants(id[2])
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法


  const handleChange = (event) => {
    //console.log(event.target.value)
    setSelected(event.target.value)
  };

  
  const fetchProduct = async (productId) => {
    await commerce.products.retrieve(productId)
    .then(product => {
      console.log(product)
      setProduct(product)
      setImages(product.assets.map(asset=>asset.url))
      setSelectedImage(product.assets.map(asset=>asset.url)[0])
      //setSizes(product.variant_groups.filter(variant=>variant.name==="size")[0].options.map(option=>{return {id:option.id, name:option.name} }))
      //setColors(product.variant_groups.filter(variant=>variant.name==="color")[0].options.map(option=>{return {id:option.id, name:option.name} }))
      // vid, vgrp name --> dict
      let vdicta={};
      console.log(product.variant_groups.map(group=>{vdicta[group.id]=group.name; return {id:group.id, name:group.name, options:group.options}}))
      console.log(vdicta)
      // opid, opname, concat size and color --> dict
      let opdicta={}
      console.log(product.variant_groups.filter(variant=>variant.name==="size")[0].options.map(option=>{opdicta[option.id]=option.name; return {id:option.id, name:option.name} }))
      console.log(product.variant_groups.filter(variant=>variant.name==="color")[0].options.map(option=>{opdicta[option.id]=option.name; return {id:option.id, name:option.name} }))
      console.log(opdicta)
      setVdict(vdicta)
      setOpdict(opdicta)

      const url = new URL(
        "https://api.chec.io/v1/products/"+productId+"/variants"
      );
    
      let headers = {
        "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
    
      fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then(response => response.json())
        .then(json => {
          //console.log(json.data)
          let newVariants=json.data.map(variant=>{
            /*
            let vid=variant.id
            let keyList = Object.keys(variant.options)
            console.log(vdict[keyList[0]])
            console.log(vdict[keyList[1]])
            console.log(opdict[variant.options[keyList[0]]])
            console.log(opdict[variant.options[keyList[1]]])
            */
           return {variant_id:variant.id, options:variant.options}
          })
          setVariants(newVariants)
          //console.log(newVariants)
        });

    });
  }

  const handleClick = (event) => {
    //console.log(event.target.src)
    setSelectedImage(event.target.src)

  }; 


  const handleAddToCart = async (productId, quantity, variantId) => {
    if(localStorage.getItem('token')==null)window.location.href="/signin"
    let cartId=localStorage.getItem('cart_id')
    console.log(cartId)
    console.log(variantId)

    const url = new URL(
      "https://api.chec.io/v1/carts/"+cartId
    );
  
    let headers = {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
  
    let body = {
      "id": productId,
      "quantity": quantity,
      "variant_id": variantId
    }
  
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        //setCart(json.cart)
        setOpen(true)
        setSnackbarText(json.product_name+' を買い物かごへ追加しました')
      });

  }

  
  if(product.variant_groups===undefined)return "loading"

  return (
    <Paper elevation={0} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
      <MySnackbar open={open} setOpen={setOpen} snackbarText={snackbarText} />
      <Grid container spacing={2} >
        <Grid item md={12} >
          <Item elevation={0} ><img width="600" height="600"  src={selectedImage} alt="海の写真" title="空と海"/></Item>
        </Grid>
        <Grid container justify="center" spacing={5} >
        {images.map((elem, idx) => (
            <Grid item key={idx} lg={1} >
             <img  onClick={handleClick} width="60" height="60"  src={elem} alt="海の写真" title="空と海"/>
            </Grid>
          ))}
        </Grid>
        </Grid>

        <Grid container spacing={2} direction="column" alignItems="center" >
        <Grid item md={12} >
          <Item elevation={0} sx={{height:30,}}>{product.name}</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <StyledBadge badgeContent={'10％OFF'}>
            <Item elevation={0} ><s>{product?.price?.formatted_with_code}</s></Item>
          </StyledBadge>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} >{product?.price?.formatted_with_code}</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}>在庫のあるサイズとカラーの組み合わせ:</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}><VariantButtonGroup variants={variants} vdict={vdict} opdict={opdict} selected={selected} handleChange={handleChange} /></Item>
        </Grid>
        {/* 
          バリエーションの表示の仕方のオルタナティブ
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}>カラー:</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}><VariantButtonGroup elems={product.variant_groups.filter(variant=>variant.name==="color")[0].options.map(option=>option.name)}/></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}>サイズ:</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}><VariantButtonGroup elems={product.variant_groups.filter(variant=>variant.name==="size")[0].options.map(option=>option.name)}/></Item>
        </Grid>
        */}

        </Grid>

        <br/>


        <Grid container spacing={2} >
        <Grid item xs={6} md={12}>
          <Item elevation={0} >
          ※サイトの下部にあるAttentionをよく読んでからのご購入をお願いいたします。<br/>
          ※送料は別途発生いたします。詳細は配送案内をご覧ください。<br/>
          ※12,000円以上のご注文で送料が無料になります。<br/>
          </Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ height:30,}}><Button disabled={false} onClick={ () => handleAddToCart(product.id, 1, selected)} variant="contained">カートに入れる</Button></Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ }}><BasicTabs product={product} /></Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ height:30,}}>おすすめ関連アイテム</Item>
        </Grid>
        {/** 
        <Grid container justify="center" spacing={5} >
        {products.map((product,idx) => (
            <Grid item key={idx} lg={3} >
            <Product product={product} />
            </Grid>
          ))}
        </Grid>
        */}
        <Grid item md={12}>
          <Item elevation={0}>この商品のレビュー</Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0}><ProductReview /></Item>
        </Grid>
      </Grid>
    </Paper>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const createMarkup = (text) => {
  return { __html: text };
};

function BasicTabs({product}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="商品詳細" {...a11yProps(0)} />
          <Tab label="お取り扱い" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="p" dangerouslySetInnerHTML={createMarkup(product.description)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography>
※サイトの下部にあるAttentionをよく読んでからのご購入をお願いいたします。
注意事項
＊着用の際は、アテンションタグ・洗濯ネームをご確認して使用してください。
＊サイズや色味に若干の個体差が生じる場合がございます。
＊生産時期により若干の色のブレやサイズの変動が生じる場合がございます。
＊撮影場所やお使いのモニター環境により若干お色味が異なる場合がございます。
決済完了後、14日~26日前後での発送予定となっております
      </Typography>
      </TabPanel>
    </Box>
  );
}



function VariantButtonGroup({variants, vdict, opdict, handleChange, selected}) {

  
  if(variants===undefined)return 'loading'

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
                {variants.map((elem, idx) => (
                  //<Button value={elem.variant_id} sx={{backgroundColor:selected===elem.variant_id?'black':'white', color:selected===elem?'white':'black'}} onClick={handleChange} >{elem.variant_id}</Button>
                  <Button key={idx} value={elem.variant_id} sx={{backgroundColor:selected===elem.variant_id?'black':'white', color:selected===elem.variant_id?'white':'black'}} onClick={handleChange} >{opdict[elem.options[Object.keys(elem.options)[0]]]+", "+opdict[elem.options[Object.keys(elem.options)[1]]]}</Button>
                ))}
      </ButtonGroup>
    </Box>
  );
}


const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  position: relative;
  display: inline-block;
  line-height: 1;

  & .MuiBadge-badge {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #ff4d4f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 6px;
    width: 6px;
    height: 6px;
    background: #ff4d4f;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-anchorOriginTopRight {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;

function BadgeContent() {
  return (
    <Box
      component="span"
      sx={{
        width: 42,
        height: 42,
        borderRadius: '2px',
        background: '#eee',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    />
  );
}