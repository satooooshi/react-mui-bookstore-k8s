import * as React from 'react';
import { styled } from '@mui/material/styles';
import { gate } from 'react-router-dom';
import { Box, Button, Checkbox, Link, Typography, Container, FormControlLabel, CssBaseline, ThemeProvider, TextField, Paper, Grid } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
///Users/satoshiaikawa/react-mui-bookstore-k8s/src/assets/jacket.gif
export default function SignIn({onSignIn}) {
  return (        
    <Paper
    elevation={0}
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: '50%',
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >

      <Grid component="form" noValidate onSubmit={onSignIn} container spacing={2} justifyContent='center' alignItems='center' >

        <Grid item xs={6} md={12}>
          <Item elevation={0} ><Typography variant="h5">ログイン</Typography><br/>メールとパスワードを入力してください:</Item>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="メールアドレス（Gmail等のフリーメール推奨）"
            name="email"
            autoComplete="my-email"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="my-password"
          />
        </Grid>

        <Grid item xs={12}>
        </Grid>

      <Grid item xs={12}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ margin:'auto', height:70 }}
      >
        ログインする
      </Button>
      </Grid>

      <Grid item xs={6} md={12}>
          <Item elevation={0} >
          <Button
            href="/signupa"
            variant="text"
            sx={{ margin:'auto', height:70 }}
          >
            アカウントを新規で作成する
          </Button>
          </Item>
      </Grid>

      </Grid>
      </Paper>
  );
}


// for testing form fubmission
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };