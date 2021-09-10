"use strict";
const salay = 60000;
const salayInString = '60000';
// array 
const numberAndStringArray = [4, 6, 7, '6', 777, 888, 'sejan'];
const stringArray = ['sejan', 'sajal', 'Ash'];
const numberArray = [4, 6, 7, 6, 777, 888];
// array function
let empryArray = 0;
for (const element of numberArray) {
    if (element < empryArray) {
        empryArray = element;
    }
}
