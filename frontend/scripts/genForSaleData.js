"use strict";
exports.__esModule = true;
var faker_1 = require("@faker-js/faker");
var fs = require("fs");
var keccak256 = require('keccak256');
var brands = ['DHD', 'Channel Islands', 'Pyzel', 'Mayhem', 'Stewart', 'Haydenshapes', 'Ben Webb', 'Pukas', 'Catch Surf', 'Firewire'];
var models = [];
var conditions = ['New', 'Like New', 'Very Good', 'Good', 'Fair', 'Poor'];
var types = ['Longboard', 'Shortboard', 'Midlength', 'Fish', 'Beater', 'Egg', 'Gun', 'Soft Top'];
// Populate fake models
for (var i = 0; i < 15; i++) {
    models.push('Model '.concat(i.toString()));
}
// console.log(models)
var FSBoard = /** @class */ (function () {
    function FSBoard() {
    }
    return FSBoard;
}());
function createFSBoard() {
    return {
        brand: faker_1.faker.helpers.arrayElement(brands),
        model: faker_1.faker.helpers.arrayElement(models),
        condition: faker_1.faker.helpers.arrayElement(conditions),
        type: faker_1.faker.helpers.arrayElement(types),
        description: faker_1.faker.lorem.sentence(),
        length: faker_1.faker.datatype.float({ min: 48, max: 120, precision: 1.0 }),
        width: faker_1.faker.datatype.float({ min: 17, max: 23, precision: 0.01 }),
        thickness: faker_1.faker.datatype.float({ min: 1.5, max: 3, precision: 0.01 }),
        volume: faker_1.faker.datatype.float({ min: 23, max: 90, precision: 0.01 }),
        price: faker_1.faker.datatype.float({ min: 200, max: 1200, precision: 1.0 }),
        postID: faker_1.faker.datatype.number({ min: 0, max: 100000000000 }),
        userID: faker_1.faker.datatype.number({ min: 0, max: 10000000 })
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
function genBoards(num) {
    var boards = [];
    for (var i = 0; i < num; i++) {
        boards.push(createFSBoard());
    }
    return boards;
}
fs.writeFileSync("./db.json", JSON.stringify({ FSBoards: genBoards(50) }, null, '\t'));
