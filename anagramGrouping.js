'use strict';

const HashMap = require('./HashMap');

//iterate through list (i)
// add stringA to results[i]
//iterate throuth list again (j)
// --- check if same string skip
// --- check if stringA + stringB is odd skip
// make a map of stringA + stringB
// if length of map === 0
// add stringB to results[i]

// create map results = {string[i]: {string[i+1]: true, ... }, string[i+1]: {}, ... }
// iterate through list (i) 
// --- key is string[i] and value is all possible combinations of string[i]
// --- add to results true/false
// at end iterate through results and return list of lists

//tests two strings and returns true if they are anagrams, false if not
const isAnagram = (stringA, stringB) => {

    let map = new HashMap();
    if(stringA === stringB) return false;
    if((stringA + stringB) % 2 === 0) return false;
    for(let k=0; k<stringA.length; k++) {
        map.set(stringA[k], 'value');
    }
    for(let l=0; l<stringB.length; l++) {
        (map.get(stringB[l])) 
            ? map.delete(stringB[l])
            : false
        ;
    }
    if(map.length !== 0) return false;
    return true;
};


const anagramGrouping = (list) => {
    let results = [];
    for(let i=0; i<list.length; i++) {
        for(let j=0; j<list.length; j++) {
            if(isAnagram(list[i], list[j])) {
                results.push([list[i], list[j]]);
                
            }
        }
    }
    return results;
};

console.log(anagramGrouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

