import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, Link, Grid, Typography, Container, FormControlLabel, CssBaseline, ThemeProvider, TextField,  } from '@mui/material';

import useToken from './useToken'
import {commerce} from '../../lib/commerce'

let API_URL=process.env.REACT_APP_DEV_TOKEN_API_URL

export default function SignUp({handleSignUp}) {

  const navigate = useNavigate();

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/*<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>*/}
          <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5">
          サインアップする
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              サインアップ
            </Button>
          </Box>
        </Box>
      </Container>
  );
}