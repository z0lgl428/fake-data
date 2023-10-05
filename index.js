"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const de_1 = require("@faker-js/faker/locale/de");
const fs_1 = __importDefault(require("fs"));
;
function createRandomData() {
    return {
        id: de_1.faker.string.uuid(),
        name: de_1.faker.commerce.productName(),
        comment: de_1.faker.lorem.sentence(),
    };
}
;
const filename = 'output.json';
const count = 100;
fs_1.default.writeFileSync(filename, JSON.stringify(de_1.faker.helpers.multiple(createRandomData, {
    count: count,
}), null, 2));
console.log(`${count} samples written to ${filename}.`);
