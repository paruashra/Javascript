// const message1 ="hi there";
// module.exports = message1;

let counter = 0;

module.exports = {
    incrementCounter() {
        counter = counter + 1;
    },
    getCounter() {
        return counter;
    }
};