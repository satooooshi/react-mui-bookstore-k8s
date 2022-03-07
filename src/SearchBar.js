import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box,Button, Paper, Grid, Rating, Divider,  ButtonGroup } from '@mui/material';
import { Input, InputAdornment } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

import Product from './Product';

import { Link, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SearchBar({setSearchTerm}) {

  return (
    <div>
      <Accordion elevation={0} expanded={true} position="fixed">
        
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>色々な条件で探してみる</Typography>
          <SearchIcon />
        </AccordionSummary>
        <AccordionDetails>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item md={12}>
        <Input
          type="text"
          placeholder="キーワードで絞り込む"
          onChange={(event) => {
            //setSearchTerm(event.target.value);
            setSearchTerm(event.target.value);
            
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        </Grid>
        <Grid item md={12}>
        <Typography>
            おすすめキーワードはこちら
        </Typography>
        </Grid>
        <Grid item md={12}>
        <VariantButtonGroup elems={['down','sweatshirt','turtleneck']} />
        </Grid>
      </Grid>
      <br/>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}





function VariantButtonGroup({elems}) {
  const [selected, setSelected] = React.useState('')
  
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
                  <Button key={idx} href={"/collections/"+elem} sx={{backgroundColor:selected===elem?'black':'white', color:selected===elem?'white':'black'}} >{elem}</Button>
                ))}
      </ButtonGroup>
    </Box>
  );
}

