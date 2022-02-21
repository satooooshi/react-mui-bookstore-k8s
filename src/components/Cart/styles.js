//import { makeStyles } from '@mui/styles'; should npm install 
import { styled } from '@mui/material/styles';

export default styled((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '3%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    background: '#1C2331',
    color: 'white',
    height: '40px',
    
  '&:hover': {
      backgroundColor: '#2a344a',
      boxShadow: 'none',
      color: 'white',    
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '7%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
