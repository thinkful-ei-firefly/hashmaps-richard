'use strict';

const HashMap = require('./HashMap');

//iterate throug char in string
//store value in hash key = 0 up to i, where i = num of char, excluding duplicates
//for i, assemble result string
//return result
const removeDuplicates = (string) => {
    let rd = new HashMap();
    for(let i=0; i<string.length; i++) {
        rd.set(string[i], string[i]);
    }
    console.log(rd['_hashTable']);
    return rd['_hashTable'].reduce((acc, obj) => {
        return acc + obj['value'];
    }, '');
};

console.log(removeDuplicates('google'));
console.log(removeDuplicates('google all that you think can think of'));