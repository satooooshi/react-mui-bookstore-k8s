import { useLocation, NavLink } from "react-router-dom";
import {commerce} from './lib/commerce'
import { Paper, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Expenses() {



    let location = useLocation()
    console.log(location)
    let loginToken=location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    console.log(loginToken)
    commerce.customer.getToken(loginToken).then((jwt) => {
      console.log(jwt); 
      //commerce.customer.getOrders().then((orders) => console.log(orders));
    }); //the customer is now automatically saved in local session storage,
    // here should wait for the uppper commerce api to be returned
    commerce.customer.about()
    //commerce.customer.about().then((customer) => console.log(customer))
    //console.log(commerce.customer.isLoggedIn());
    //commerce.customer.logout();
    

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>登録が完了しました</h2>
        <Button variant="outlined" component={Link} to="/" >フロントページへいく</Button>
      </main>
    );
  }