// faker js
import { faker } from '@faker-js/faker';
//https://www.npmjs.com/package/@faker-js/faker
//SyntaxError: Cannot use import statement outside a module
//https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // An object representing a random contact card containing many properties
console.log(randomName)