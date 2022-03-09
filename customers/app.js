const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const host = '0.0.0.0'
const port = 3002

app.use(cors());

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let customers=[
  {
    customer_id: 'customer_test3ff4-43f9-4eec-8108-10c7a0ae5a64',
    firstname: 'testfirstname',
    lastname: 'testlastname',
    email: 'test@qq.com',
    password: 'test',
    cart_id:'',
  },
]

/*
  {
    customer_id: 'customer_6af23ff4-43f9-4eec-8108-10c7a0ae5a64',
    username: 'Gina_Greenfelder',
    email: 'Michele99@example.com',
    password: 'Gina_GreenfelderMichele99@example.com',
    token: 'Gina_GreenfelderMichele99@example.com'
  }
 */

  app.get('/api/customers/hello', function (req, res) {
    res.send({
      data:'hello customers'
    })
  })

app.use('/api/testlogin', (req, res) => {
  res.send(customers);
});

app.get('/api/login/:email/:password', (req, res) => {
  console.log(req.params)
  const email = req.params.email;
  const password = req.params.password;
  
  for(let i=0;i<customers.length;i++){
    if( customers[i].email===email && customers[i].password===password ){
      res.send({
        customer_id: customers[i].customer_id,
        cart_id: customers[i].cart_id
      })
    }
  }

  res.send({
    customer_id: undefined
  })
  
});

app.get('/api/cart/:customerId/:cartId', (req, res) => {
  console.log(req.params)
  const customerId = req.params.customerId;
  const cartId = req.params.cartId;
  
  for(let i=0;i<customers.length;i++){
    if( customers[i].customer_id===customerId ){
      customers[i].cart_id=cartId
      res.send(customers[i])
    }
  }

  res.status(400).send({
    message: 'customerId provided not found.'
  })
  
});

app.get('/api/register/:customerId/:email/:firstname/:lastname/:password', (req, res) => {
  console.log(req.params)
  const customer_id = req.params.customerId
  const firstname = req.params.firstname
  const lastname = req.params.lastname
  const email = req.params.email
  const password = req.params.password
  

  for(let i=0;i<customers.length;i++){
    if( customers[i].email===email ){
      res.status(400).send({
        message: 'The Email already registered'
     });
     return 
    }
  }

  // add new registered customer
  customers.push({
    customer_id:customer_id,
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password
  })

  res.send({
    customer_id:customer_id,
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password
  })
  
});

app.listen(port, host, () => console.log('API is running on '+host+':'+port));

