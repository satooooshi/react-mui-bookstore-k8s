import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, TextField } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import { getSubdivisions, getShippingCountries, getShippingOptions } from './Checkout/data';
import CheckoutForm from './CheckoutForm';

const AddressForm = ({ checkoutToken, submitShippingData, customer }) => {
  const [firstname, setFirstname] = useState(customer.firstname);
  const [lastname, setLastname] = useState(customer.lastname);
  const [email, setEmail] = useState(customer.email);
  const [address1, setAddress1] = useState('');
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();


  /*
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    console.log(JSON.stringify(countries, null, 2));
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    console.log(JSON.stringify(subdivisions, null, 2));
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    console.log(JSON.stringify(options, null, 2));

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);
 
*/

const fetchShippingCountriesData =  (checkoutTokenId) => {
  //const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
  //console.log(commerce.services.localeListCountries().then(response => console.log(response.countries)));
  console.log(commerce.services.localeListSubdivisions('JP').then(response => console.log(response.subdivisions)))
  const  countries  = getShippingCountries();
  
  console.log(JSON.stringify(countries, null, 2));
  console.log(countries)
  setShippingCountries(countries);
  setShippingCountry(Object.keys(countries)[0]);
};

const fetchSubdivisionsData = (countryCode) => {
  //const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
  //const  subdivisions  = JSON.parse(JSON.stringify(getSubdivisions()));
  commerce.services.localeListSubdivisions('JP').then(response => {
    console.log(response.subdivisions)
    setShippingSubdivisions(response.subdivisions);
    setShippingSubdivision(Object.keys(response.subdivisions)[0]);
    })
  //console.log(JSON.stringify(subdivisions, null, 2));
  //setShippingSubdivisions(subdivisions);
  //setShippingSubdivision(Object.keys(subdivisions)[0]);
};

const fetchShippingOptionsData = (checkoutTokenId, country, stateProvince = null) => {
  //const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
  const options = JSON.parse(JSON.stringify(getShippingOptions()));
  console.log(JSON.stringify(options, null, 2));

  setShippingOptions(options);
  setShippingOption(options[0].id);
};

useEffect(() => {
  fetchShippingCountriesData(checkoutToken.id);
}, []);

useEffect(() => {
  if (shippingCountry) fetchSubdivisionsData(shippingCountry);
}, [shippingCountry]);

useEffect(() => {
  if (shippingSubdivision) fetchShippingOptionsData(checkoutToken.id, shippingCountry, shippingSubdivision);
}, [shippingSubdivision]);

  return (
    <>
      <br/>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => submitShippingData({ ...data, firstname, lastname, email, shippingCountry, shippingSubdivision, shippingOption, firstname, lastname, email, address1 }))}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="first name"
            id="margin-normal"
            name="firstname"
            defaultValue={customer.firstname}
            onChange={(e) => setFirstname(e.target.value)}
            helperText="Enter your first name"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="last name"
            id="margin-normal"
            name="lastname"
            defaultValue={customer.lastname}
            onChange={(e) => setLastname(e.target.value)}
            helperText="Enter your last name"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="email address"
            id="margin-normal"
            name="email"
            defaultValue={customer.email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="Enter your email"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="address 1"
            id="margin-normal"
            name="address1"
            //defaultValue={formInput.email}
            onChange={(e) => setAddress1(e.target.value)}
            helperText="Enter your address"
          />
          </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;


/*
  
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
 */