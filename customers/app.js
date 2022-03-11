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

  app.get('/api/customers/hello', function (req, res) {
    return res.send({
      data:'hello customers'
    })
  })

app.use('/api/testlogin', (req, res) => {
  return res.send(customers);
});

app.get('/api/login/:email/:password', (req, res) => {
  console.log(req.params)
  const email = req.params.email;
  const password = req.params.password;
  
  for(let i=0;i<customers.length;i++){
    if( customers[i].email===email && customers[i].password===password ){
      return res.send({
        customer_id: customers[i].customer_id,
        cart_id: customers[i].cart_id
      })
    }
  }

  return res.send({
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
      return res.send(customers[i])
    }
  }

  return res.status(400).send({
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
      return res.status(400).send({
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

  return res.send({
    customer_id:customer_id,
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password
  })
  
});

app.listen(port, host, () => console.log('API is running on '+host+':'+port));

