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
var WantedBoard = /** @class */ (function () {
    function WantedBoard() {
    }
    return WantedBoard;
}());
function createWantedBoard() {
    return {
        brand: faker_1.faker.helpers.arrayElement(brands),
        model: faker_1.faker.helpers.arrayElement(models),
        condition: faker_1.faker.helpers.arrayElement(conditions),
        type: faker_1.faker.helpers.arrayElement(types),
        description: faker_1.faker.lorem.sentence(),
        minLength: faker_1.faker.datatype.float({ min: 48, max: 60, precision: 1.0 }),
        maxLength: faker_1.faker.datatype.float({ min: 61, max: 120, precision: 1.0 }),
        minVolume: faker_1.faker.datatype.float({ min: 23, max: 30, precision: 0.01 }),
        maxVolume: faker_1.faker.datatype.float({ min: 31, max: 90, precision: 0.01 }),
        minPrice: faker_1.faker.datatype.float({ min: 200, max: 400, precision: 1.0 }),
        maxPrice: faker_1.faker.datatype.float({ min: 401, max: 1200, precision: 1.0 }),
        postID: faker_1.faker.datatype.number({ min: 0, max: 100000000000 }),
        userID: faker_1.faker.datatype.number({ min: 0, max: 10000000 })
    };
}
function genBoards(num) {
    var boards = [];
    for (var i = 0; i < num; i++) {
        boards.push(createWantedBoard());
    }
    return boards;
}
fs.writeFileSync("./dbWanted.json", JSON.stringify({ WantedBoards: genBoards(50) }, null, '\t'));
