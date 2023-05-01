// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// // a) Create a test with an expect statement using the variable provided.
  
describe("sentenceJoiner" , () =>{
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", ()=>{
      expect(sentenceJoiner(people)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.")
    })
  })


  // FAIL  ./code-challenges.test.js
  // sentenceJoiner
  //   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (3 ms)

  // ● sentenceJoiner › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

  //   ReferenceError: sentenceJoiner is not defined

  //     25 | describe("sentenceJoiner" , () =>{
  //     26 |     it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", ()=>{
  //   > 27 |       expect(sentenceJoiner(people)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.")
  //        |       ^
  //     28 |     })
  //     29 |   })
  //     30 |     

  //     at Object.expect (code-challenges.test.js:27:7)

// b) Create the function that makes the test pass.
// Use .map and .split & toUpperCase.
// Use split to split the string into seperate words and put it into a new array that'll then get uppercased. It should return the n

const sentenceJoiner = (variable) => {
  return variable.map((newPeople)=>{
    let variable1 = newPeople.split('')
    let variable2 = variable1.toUpperCase
    return variable2

  })
}
const newPeople = sentenceJoiner(people);
console.log(newPeople)














// 2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// a) Create a test with an expect statement using the variables provided.
describe("arrayDivider", ()=>{
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", ()=>{
    expect(arrayDivider(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(arrayDivider(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})



// FAIL  ./code-challenges.test.js
// arrayDivider
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)

// ● arrayDivider › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//   ReferenceError: arrayDivider is not defined

//     85 | describe("arrayDivider", ()=>{
//     86 |   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", ()=>{
//   > 87 |     expect(arrayDivider(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//        |     ^
//     88 |     expect(arrayDivider(hodgepodge2)).toEqual([ 2, 1, -1 ])
//     89 |   })
//     90 | })

//     at Object.expect (code-challenges.test.js:87:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.533 s, estimated 1 s

// b) Create the function that makes the test pass.
 // Use filter to filter out anything out of the array that isn't a number & map to create a new aray out of the filtered array. With the new filtered array i'll divide each number by 3 and put it into a new array. 
const arrayDivider = (array) => {
  const newArray = array.filter(item =>typeof item === 'number');
  const newArray2 = newArray.map(num => num %3 );
  return newArray2
};
console.log(arrayDivider(hodgepodge1));
console.log(arrayDivider(hodgepodge2));











//3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// a) Create a test with an expect statement using the variables provided.

describe("arrayCuber",()=>{
  it("takes in an array of numbers and returns the sum of all the numbers cubed.",()=>{
    expect(cubeAndSum1).toEqual(99)
    expet(cubeAndSum2).toEqual(1125)
  })
})



// FAIL  ./code-challenges.test.js
// arrayDivider
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (3 ms)
// arrayCuber
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed. (3 ms)

// ● arrayCuber › takes in an array of numbers and returns the sum of all the numbers cubed.

//   expect(received).toEqual(expected) // deep equality

//   Expected: 99
//   Received: [2, 3, 4]

//     147 | describe("arrayCuber",()=>{
//     148 |   it("takes in an array of numbers and returns the sum of all the numbers cubed.",()=>{
//   > 149 |     expect(cubeAndSum1).toEqual(99)
//         |                         ^
//     150 |     expet(cubeAndSum2).toEqual(1125)
//     151 |   })
//     152 | })

//     at Object.toEqual (code-challenges.test.js:149:25)

// Test Suites: 1 failed, 1 total



// b) Create the function that makes the test pass.



// So to get cubeAndSum1 to equal 99... I had to google how a cubed number works. 
//I should multiple each number in the array by 3 of itself so 2x2x2 =8, 3x3x3 = 27 and 4x4x4= 64  and then add all of them to the sum which should equal 99.
// So I used a for loop so that it can just loop over each number and multiply each number by itself 3 times and add the sum into a new array. The starting sum should be 0 and at the end it'll be the sum of each number cubed and added up.

//
 const arrayCuber = (array)=>{
  let cubedSum = 0;
  for(let i = 0;i <array.length; i++){
    cubedSum += array[i]**3;
  } 
  return cubedSum
 }
 console.log(arrayCuber(cubeAndSum1));
 console.log(arrayCuber(cubeAndSum2));