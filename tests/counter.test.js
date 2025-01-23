// Create two test cases for incrementing and decrementing a number

// Test case 1: counter(1, 'increment') will eventualy return 10

// Test case 2: counter(10, 'decrement') will eventually return 0

// Both test cases need to pass

// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')

//case 1
test("counter(5,increment) will return 5",() =>{
    return expect(counter(4,"increment")).resolves.toBe(4)
})

//case 1
test("counter(4,decrement) will return 0",() =>{
    return expect(counter(4,"decrement")).resolves.toBe(0)
})