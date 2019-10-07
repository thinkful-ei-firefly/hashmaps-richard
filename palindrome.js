'use strict';

//using hashMaps
//first check if value is in the hashmap
//if not add to hashmap
//if it already is delete from hashmap
//at the end check the length of the hashmap
//if the length is 0 or 1 it is a palindrome

const hashMap = require('./hashMap');

const isPalindrome = (string) => {
    let map = new hashMap();
    for(let i=0; i<string.length; i++) {
        console.log(string[i]);
        (map.get(string[i]))
            ? map.delete(string[i])
            : map.set(string[i], 'red');
    }
    return (map.length === 0 || map.length === 1);
};

console.log(isPalindrome('acecarr'));
console.log(isPalindrome('north'));
