import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Box, Button, Paper, Grid } from '@mui/material';

import './Hero.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


// https://hero-generator.netlify.app/
export default function Hero({}) {

  return (
      <Grid container spacing={1} justify="center" alignItems="center" >
        <Grid item xs={6} md={12}>
            <a href="#main-list">
            <Item elevation={0} >
            <div className="masthead" role="img" aria-label="Image Description">
            </div>
            </Item>
            </a>
        </Grid>
      </Grid>

  );
}



