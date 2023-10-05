import { faker } from '@faker-js/faker/locale/de'
import fs from 'fs';

interface Data {
   // see createRandomData() 
};

function createRandomData(): Data {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    comment: faker.lorem.sentence(),
  };
};


const filename = 'output.json';
const count = 100;

fs.writeFileSync(filename, JSON.stringify(
  faker.helpers.multiple(createRandomData, {
    count: count,
  }), null, 2))
  
console.log(`${count} samples written to ${filename}.`);