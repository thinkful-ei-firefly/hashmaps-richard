'use strict';

const HashMap = require('./HashMap');

const main = () => {

    let lor = new HashMap();
    lor.MAX_LOAD_RATIO = 0.5;
    lor.SIZE_RATIO = 3;

    lor.set('Hobbit', 'Bilbo');
    lor.set('Hobbit', 'Frodo');
    lor.set('Wizard', 'Gandolf');
    lor.set('Human', 'Aragon');
    lor.set('Elf', 'Legolas');
    lor.set('Maiar', 'The Necromancer');
    lor.set('Maiar', 'Sauron');
    lor.set('RingBearer', 'Gollum');
    lor.set('LadyOfLight', 'Galadriel');
    lor.set('HalfElven', 'Arwen');
    lor.set('Ent', 'Treebeard');

    console.log(lor);
    console.log(lor['_hashTable']);
    //Values overwrote previous values with the same key
    
    console.log(lor.get('Maiar'));
    console.log(lor.get('Hobbit'));
    // Maiar --> Sauron
    // Hobbit --> Frodo
    // There is only one value for each, as calling set with the same key overwrites previous values

    // capacity = 8
    // load ratio = length + deleted + 1 / capacity (initial capacity = 8)
    // when the load ratio is greater than MAX_LOAD_RATIO we set to 0.5
    // the size or capacity is reset to capacity * SIZE_RATIO
    // 
    // initial capacity = 8
    // length = 9
    // deleted = 0
    // load ratio = 10/8 = 1.25 > MAX_LOAD_RATIO
    // so why have we not resized the capacity?
};

main();