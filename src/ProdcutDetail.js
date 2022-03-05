import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Tabs, Tab, Typography, ButtonGroup } from '@mui/material';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import PropTypes from 'prop-types';
import Product from './Product';


let imagesa=['https://cdn.shopify.com/s/files/1/0408/1015/2103/products/2022-03-0413.23.04_200x.png?v=1646367914','https://cdn.shop-list.com/res/up/shoplist/shp/__thum370__/ueno-shokai/435121302-60/1.jpg', 'https://cdn.shopify.com/s/files/1/0408/1015/2103/products/2021-12-03_21h34_59_700x.png?v=1638754802'];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
///Users/satoshiaikawa/react-mui-bookstore-k8s/src/assets/jacket.gif
export default function FullWidthGrid() {

  const [images, setImages] = React.useState([])
  const [selectedImage, setSelectedImage] = React.useState('')

  useEffect(() => {
    setImages(imagesa)
    setSelectedImage(imagesa[0])
  }, []) // [] is for useEffectをマウント時に1回だけ実行する方法


  const handleClick = (event, newValue) => {
    console.log(event.target.src)
    setSelectedImage(event.target.src)
    //const newImages=images.filter(image=>image!==event.target.src)
    //setImages(newImages)
  };  

  return (
    <Paper elevation={1} sx={{
      flexGrow: 1,
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }} >
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
          <Item elevation={0} sx={{height:30,}}>シックスリムスラックスOt1729</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <StyledBadge badgeContent={'10％OFF'}>
            <Item elevation={0} ><s>¥9,660</s></Item>
          </StyledBadge>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} >¥9,660</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}>カラー:</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}><VariantButtonGroup elems={['Black', 'Gray', 'Brown']}/></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}>サイズ:</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item elevation={0} sx={{ height:30,}}><VariantButtonGroup elems={['XS', 'S', 'M', 'L']}/></Item>
        </Grid>

        </Grid>

        <Grid container spacing={2} >
        <Grid item xs={6} md={12}>
          <Item elevation={0} >
          ※サイトの下部にあるAttentionをよく読んでからのご購入をお願いいたします。<br/>
          ※送料は別途発生いたします。詳細は配送案内をご覧ください。<br/>
          ※12,000円以上のご注文で送料が無料になります。<br/>
          </Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ height:30,}}><Button variant="contained">カートに入れる</Button></Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ }}><BasicTabs /></Item>
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ height:30,}}>おすすめ関連アイテム</Item>
        </Grid>
        <Grid container justify="center" spacing={5} >
        {[1,2,3,4,5,6,7,8].map((product,idx) => (
            <Grid item key={idx} lg={3} >
            <Product />
            </Grid>
          ))}
        </Grid>
        <Grid item md={12}>
          <Item elevation={0} sx={{ height:30,}}>この商品のレビュー</Item>
        </Grid>
      </Grid>
    </Paper>
  );
}



let text="        シックな印象のスリムスラックス🇰🇷   \
スリムなサイズ感なので履くだけで脚が長く見えます💪     \
\
シャツやジャケットなどと合わせる綺麗めコーデがお好きな方にもおすすめ◎ \
\
サイズ \
【M】\
長さ：100cm/ヒップ：95cm/ウエスト：80cm \
【L】\
長さ：101cm/ヒップ：99cm/ウエスト：84cm \
【XL】\
長さ：102cm/ヒップ：102cm/ウエスト：88cm \
【2XL】\
長さ：103cm/ヒップ：103cm/ウエスト：92cm \
\
参考推奨サイズ \
(M) 161~170cm/50~60kg \
(L) 170~175cm/60~65kg \
(XL) 175~185cm/65~77kg \
(2XL) 180~190cm/75~90kg \
※採寸には測定方法が異なるため多少の誤差 (1～3cm程)がある場合がございます。"


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

function BasicTabs() {
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
        商品詳細
        <Typography>
  {text.split("\n").map((i, key) => {
    return <p key={key}>{i}</p>;
  })}
</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      お取り扱い
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



function VariantButtonGroup({elems}) {
  const [selected, setSelected] = React.useState('')

  const handleChange = (event) => {
    setSelected(event.target.value)
  };
  
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
                {elems.map((elem, idx) => (
                  <Button value={elem} sx={{backgroundColor:selected===elem?'black':'white', color:selected===elem?'white':'black'}} onClick={handleChange} >{elem}</Button>
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

function UnstyledBadge() {
  return (
    <Box sx={{ '& > :not(style) + :not(style)': { ml: 4 } }}>
      <StyledBadge badgeContent={'10％OFF'}>
        <BadgeContent />
      </StyledBadge>
      <StyledBadge badgeContent={5} variant="dot">
        <BadgeContent />
      </StyledBadge>
    </Box>
  );
}