import { faker } from '@faker-js/faker';
import * as fs from 'fs';
const keccak256 = require('keccak256');

let brands: string[] = ['DHD', 'Channel Islands', 'Pyzel', 'Mayhem', 'Stewart', 'Haydenshapes', 'Ben Webb', 'Pukas', 'Catch Surf', 'Firewire']
let models: string[] = []
let conditions: string[] = ['New', 'Like New', 'Very Good', 'Good', 'Fair', 'Poor']
let types: string[] = ['Longboard', 'Shortboard', 'Midlength', 'Fish', 'Beater', 'Egg', 'Gun', 'Soft Top']


// Populate fake models
for (let i = 0; i < 15; i++) {
    models.push('Model '.concat(i.toString()))
}

// console.log(models)

class WantedBoard {
    brand: string;
    model: string;
    condition: string;
    type: string;
    description: string;

    minLength: number;
    maxLength: number;
    minVolume: number;
    maxVolume: number;
    minPrice: number;
    maxPrice: number;

    userID: number;
    postID: number;

}


function createWantedBoard(): WantedBoard {
    
    return {
        brand: faker.helpers.arrayElement(brands),
        model: faker.helpers.arrayElement(models),
        condition: faker.helpers.arrayElement(conditions),
        type: faker.helpers.arrayElement(types),
        description: faker.lorem.sentence(),


        minLength: faker.datatype.float({ min: 48, max: 60, precision: 1.0 }),
        maxLength: faker.datatype.float({ min: 61, max: 120, precision: 1.0 }),
        minVolume: faker.datatype.float({ min: 23, max: 30, precision: 0.01 }),
        maxVolume: faker.datatype.float({ min: 31, max: 90, precision: 0.01 }),
        minPrice: faker.datatype.float({ min: 200, max: 400, precision: 1.0 }),
        maxPrice: faker.datatype.float({ min: 401, max: 1200, precision: 1.0 }),
        
        postID: faker.datatype.number({ min: 0, max: 100000000000}), // these are going to be unique, but isn't guranteed for this simple script
        userID: faker.datatype.number({min: 0, max: 10000000})

    };

}


function genBoards(num): WantedBoard[] {
    let boards: WantedBoard[] = []
    for (let i = 0; i < num; i++) {
        boards.push(createWantedBoard())
    }
    return boards;
}

fs.writeFileSync(
    "./dbWanted.json",
    JSON.stringify({ WantedBoards: genBoards(50) }, null, '\t')
  );


