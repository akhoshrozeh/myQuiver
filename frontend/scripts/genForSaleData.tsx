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

class FSBoard {
    brand: string;
    model: string;
    condition: string;
    type: string;
    description: string;

    length: number;
    width: number;
    thickness: number;
    volume: number;
    price: number;

    // boardID: number;
    userID: number;
    postID: number;

}


function createFSBoard(): FSBoard {
    
    return {
        brand: faker.helpers.arrayElement(brands),
        model: faker.helpers.arrayElement(models),
        condition: faker.helpers.arrayElement(conditions),
        type: faker.helpers.arrayElement(types),
        description: faker.lorem.sentence(),
        
        length: faker.datatype.float({ min: 48, max: 120, precision: 1.0 }),
        width: faker.datatype.float({ min: 17, max: 23, precision: 0.01 }),
        thickness: faker.datatype.float({ min: 1.5, max: 3, precision: 0.01 }) ,
        volume: faker.datatype.float({ min: 23, max: 90, precision: 0.01 }),
        price: faker.datatype.float({ min: 200, max: 1200, precision: 1.0 }),
        postID: faker.datatype.number({ min: 0, max: 100000000000}), // these are going to be unique, but isn't guranteed for this simple script
        userID: faker.datatype.number({min: 0, max: 10000000})
        // , 
        // postID: ""
    };

    // avoid hash collision
    // let prehashPostID: string = obj.boardID.toString().padEnd(10, '0').concat(obj.userID.toString().padEnd(10,'0'))
    // let hash: string = keccak256(prehashPostID).toString('hex')
    // let hashSubStr: string = hash.substring(0, 16);
    // console.log(prehashPostID);
    // console.log(hash);
    // console.log(hashSubStr);

    // console.log('boardID', obj.boardID);
    // console.log('userID', obj.userID);
    // console.log('postID', postID);

    // obj.postID = hashSubStr;
    // return obj;
}

// collision

function genBoards(num): FSBoard[] {
    let boards: FSBoard[] = []
    for (let i = 0; i < num; i++) {
        boards.push(createFSBoard())
    }
    return boards
}

fs.writeFileSync(
    "./db.json",
    JSON.stringify({ FSBoards: genBoards(50) }, null, '\t')
  );


