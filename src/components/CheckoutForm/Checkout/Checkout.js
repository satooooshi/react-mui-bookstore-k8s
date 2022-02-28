import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

import useToken from '../../SignIn/useToken';
import SignIn from '../../SignIn/Signin'

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const navigate = useNavigate();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  useEffect(() => {
    if (cart.id) {
      const generateCheckoutToken = async () => {
        try {
          // Generate a token from the cart that was previously created or retrieved
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);
          console.log(token)
        } catch {
          if (activeStep !== steps.length) navigate("/");
        }
      };
      generateCheckoutToken();
    }
  }, [cart]);


  const submitShippingData = (data) => {
    console.log(data);
    // set all field in AddressForm including first,lastname
    setShippingData(data)
    console.log('shipping data')
    console.log(console.log(JSON.stringify(data, null, 2)))

    nextStep();
  };

  // このコンポネントはerrorがある場合、後から上書きされる
  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider sx={{margin: '20px 0',}} />
        <Typography variant="h5">Order Summary: {order.id}</Typography>
        <Typography variant="subtitle2">Ordered Items: </Typography>
        <List disablePadding>
      {order.order.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem key={order.id} style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {order.order_value.formatted_with_code}
        </Typography>
      </ListItem>
      </List>


      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) : (
    <div>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} submitShippingData={submitShippingData} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout}/>);


    /*
  const { token, setToken } = useToken(); // save in localStorage
  if(!token) {
    //return <SignIn setToken={setToken} /> 
    navigate("/signin");
  }
  */

  if(!checkoutToken) return 'Loading';



  // step0 AddressForm, step1 PaymentForm, step3==steps.length Confirmation
  return (

    <>
      <CssBaseline />
      <div  />
      <main >
        <Paper >
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
