// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Use DTE(describe, test, expect) to make a test with provided data
// The describe method will state the name of the method being tested
// describe("fibMe", () => {
//     // The nested test method is a short explanation of what the function is doing
//     test("returns an array of that length containing the numbers of the fibMe", () => {
//         // The nested expect method with .toEqual takes in the provided input and output data
//         expect(fibMe(6)).toEqual([1, 1, 2, 3, 5, 8])
//         expect(fibMe(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
// })
// Running the above test gave me a successful error of "fibMe is not defined"

// b) Create the function that makes the test pass.

// const fibMe = (num) => {
//     let iGotFibbed = [1, 1];
//     for (let i = 2; i < num; i++) {
//         iGotFibbed.push(iGotFibbed[i - 1] + iGotFibbed[i - 2]);
//     }
//     return iGotFibbed;
// }
// console.log(fibMe(6));
// console.log(fibMe(10));
// Wow, this took me hours to figure out! My main issue was not declaring the iGotFibbed array with the first two values of 1 and 1. I initialy started with iGotFibbed as an empty array, but that did not work. Anyway, these are the challenges I enjoy working on!

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// Use DTE(describe, test, expect) to make a test with provided data
// The describe method will state the name of the method being tested
// describe("oddNums", () => {
//     // The nested test method is a short explanation of what the function is doing
//     test("returns a new array of only odd numbers sorted from least to greatest.", () => {
//         // The nested expect method with .toEqual takes in the provided input and output data
//         expect(sortedOdds(fullArr1)).toEqual([-9, 7, 9, 199])
//         expect(sortedOdds(fullArr2)).toEqual([-823, 7, 23])
//     })
// })
// running yarn jest gives me the expected error of sortedOdds is not defined. 

// b) Create the function that makes the test pass.

//create function called sortedOdds
//create variable to hold filtered array
//in that variable, use .filter() method to filter out value with the typeof "number" AND filter out values that are odd using mod
//return that variable with .sort() to order numbers in the array from low to high
// const sortedOdds = (array) => {
//     let numsOnly = array.filter(value => typeof value === "number" && value % 2 != 0)
//     return numsOnly.sort((a, b) => a - b) 
// }
//Test passes!

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

// Use DTE(describe, test, expect) to make a test with provided data
// The describe method will state the name of the method being tested
describe("arraySum", () => {
    // The nested test method is a short explanation of what the function is doing
    test("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        // The nested expect method with .toEqual takes in the provided input and output data
        expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(arraySum(numbersToAdd2)).toEqual([0, 7, -8, 12])
        expect(arraySum(numbersToAdd3)).toEqual([])
    })
})
//running yarn jest gives me the expected error of arraySum is not defined

// b) Create the function that makes the test pass.
