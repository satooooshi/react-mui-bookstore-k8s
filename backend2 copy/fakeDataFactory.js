// faker js
import { faker } from '@faker-js/faker';
//https://www.npmjs.com/package/@faker-js/faker
//SyntaxError: Cannot use import statement outside a module
//https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module



let customers=[]
let customer_ids=[]
let reviews=[]
let review_ids=[]
let product_ids=[
    "prod_0YnEoqGEOle7P6",
    "prod_kd6Ll2eLj5V2mj",
    "prod_4OANwRbgawvYL8",
    "prod_VPvL5zzLG5AQkX",
    "prod_Op1YoVm44wXLv9",
    "prod_kpnNwAEpawmXB3",
    "prod_Op1YoVm26wXLv9",
    "prod_zkK6oLjB6lXn0Q",
    "prod_RyWOwm08WlnEa2",
    "prod_Kvg9l6QJd51bB7"
]

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