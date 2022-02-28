// faker js
import { faker } from '@faker-js/faker';
//https://www.npmjs.com/package/@faker-js/faker
//SyntaxError: Cannot use import statement outside a module
//https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module



let customers=[]
let customer_ids=[]
let reviews=[]
let review_ids=[]
let product_ids=['prod_mOVKl4GxXK5prR', 'prod_ZM8X5nL6Orwpv4', 'prod_gvRjwOVDjel4mN', 'prod_N7GKwbB0gxw3EX', 'prod_ZRjywMpyjZl7Y8', 'prod_aZWNoyv9jj580J', 'prod_BkyN5YABbx50b6']

for(let i=0;i<100;i++){
    let item={}
    item.customer_id='customer_'+faker.datatype.uuid()
    item.username=faker.internet.userName()
    item.email=faker.internet.exampleEmail()
    item.password=item.username+item.email
    item.token=item.password
    customer_ids.push(item.customer_id)
    customers.push(item)
}

for(let i=0;i<100;i++){
    let item={}
    item.review_id='review_'+faker.datatype.uuid()
    item.title=faker.lorem.sentence()
    item.stars=faker.datatype.number({
        'min': 1,
        'max': 5
    });
    item.date=faker.date.past().toString()
    item.content=faker.lorem.sentences()
    // fks
    item.customer_id=faker.random.arrayElement(customer_ids)
    item.product_id=faker.random.arrayElement(product_ids)
    review_ids.push(item.review_id)
    reviews.push(item)
}


console.log(reviews)


/* customer
customer_id
username
email
password
token
*/


/* review
review_id
title
stars
date
content

customer_id
product_id
*/

/* product-customer-review

*/