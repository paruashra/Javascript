// const message1 = require('./myscripts.js')
// console.log(message1);
// console.log(arguments);
// require('./myscripts.js');
// console.log(require.cache);

const counterObject =  require('./myscripts.js');

// console.log(counterObject);

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());


const newCounterObject =  require('./myscripts.js');
console.log(newCounterObject.getCounter());

