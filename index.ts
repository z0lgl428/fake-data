import { faker } from '@faker-js/faker/locale/de'
import fs from 'fs';

interface DevelopmentStream {
    
};

function createRandomDevelopmentStream(): DevelopmentStream {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    comment: faker.lorem.sentence(),
  };
};


const filename = 'output.json';
const count = 100;

fs.writeFileSync(filename, JSON.stringify(
  faker.helpers.multiple(createRandomDevelopmentStream, {
    count: count,
  }), null, 2))
  
console.log(`${count} samples written to ${filename}.`);


