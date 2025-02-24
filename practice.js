// // c = [1,5,9,8,10]

// // // console.log(c[1.5])
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// const plantss = ["broccolixxx", "cauliflowerxxx", "cabbagexxx", "kalexxx", "tomatoxxx"];

// // console.log(plants.pop());
// // // Expected output: "tomato"

// // console.log(plants);
// // console.log(plants.push('lll'));

// console.log(typeof(plants + plantss));
// // const complexArr1 = [{el1: [1,2,3,4,5], el2: [100,200,300]}, {el3: ['c', 'f', 'h', 't', 'y', 'pl', 'ty'], el4: [569,998,547]}]

// // console.log (complexArr1[0])

// plants.reverse(); 
// console.log(plants);


// const arr = [1, 6, 98, 10, 5];
// console.log(arr); // Output: [6, 45, 50, 98]

// const arr3 = [].concat(arr);
// arr3.reverse();

// // arr.sort();
// console.log(arr); // Output: [6, 45, 50, 98]
// console.log(arr3); 

// // Sort in ascending order
// // arr.sort((a, b) => a - b);

// // console.log(arr); // Output: [6, 45, 50, 98]

// arr[25] = 60;
// console.log(arr); // Output: [6, 45, 50, 98]




// first half or second half 
// console.log(arr38);
// const arr381H = arr38.splice(0,Math.round(arr38.length/2))
// console.log(arr381H);
// console.log(arr38);

/* This is a task that will involve control flow, arrays and functions

Write a function named whichHalf() which takes parameters named arr and num. 
arr will be an array and num will be the number in question. 
The function should return a string value,  first half or second half or it’s not part of the array. 
If the array length is odd, 1st half will have the higher number or elements. 

Use the following sample arrays to test.   

Expected results and sample array: 
const arr38 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr38 = [101, 201, 303, 404, 505, 605, 707, 808, 909, 999]

whichHalf(arr38,2) -> first half
whichHalf(arr38,9) -> second half 
whichHalf(arr38,200) -> it’s not part of the array
*/
// const arr38 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function whichHalf (arr, num) {
//     const arr1H = arr.splice(0,Math.round(arr.length/2))
 
//      return arr1H.includes(num)? '1st half'
//      : arr.includes(num) ? '2nd half'
//      : 'does not belong to the array'
// }

// console.log( whichHalf(arr38, 2)); 
// console.log( whichHalf(arr38, 9)); 
// console.log( whichHalf(arr38, 210)); 



/**
Write a function named as firstCharacter() which takes a string1 word as an argument and returns the
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T"
firstCharacter("Global") -> "G"
 */


// function firstCharacter (string1) {
//     return string1[0]
// }

// console.log( `firstCharacter("Tech") -> ${firstCharacter("Tech")}` );
// console.log( `firstCharacter("Global") -> ${firstCharacter("Global") }` );

/*
Write a function named as doubleWord() which takes a string word as an argument and returns the
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech"
doubleWord("Global") -> "GlobalGlobal"
*/

// function doubleWord (word) {
//         return word.repeat(2)
// }

// console.log(`doubleWord("Tech") -> ${doubleWord("Tech")}`);



// let address = "rhene"


//________.repeat()
//console.log(    address.repeat(2)  ); 



// console.log('billl'.repeat(3));
/*
Write a function named as lastTwoCharacters() which takes an argument - stringx, which is a word and returns
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
lastTwoCharacters("Tech") -> "ch"
lastTwoCharacters("Global") -> "al"
lastTwoCharacters("") -> ""
lastTwoCharacters(" ") -> " "
lastTwoCharacters("1") -> "1"
*/

// function lastTwoCharacters (stringx) {
//  return stringx.slice(-2)
// }

// const lastTwoCharacters2 = stringx => stringx.slice(-2)

// console.log(`lastTwoCharacters("Tech")   -> ${lastTwoCharacters("Tech") } `)
// console.log(`lastTwoCharacters("Global") -> ${lastTwoCharacters("Global") }`)
// console.log(`lastTwoCharacters("")       -> ${lastTwoCharacters("") }`)
// console.log(`lastTwoCharacters(" ")      -> ${lastTwoCharacters(" ") }"`)
// console.log(`lastTwoCharacters("1")      -> ${lastTwoCharacters("1") }"`)

// console.log('--------')
// console.log(`lastTwoCharacters2("Tech")   -> ${lastTwoCharacters2("Tech") } `)
// console.log(`lastTwoCharacters2("Global") -> ${lastTwoCharacters2("Global") }`)
// console.log(`lastTwoCharacters2("")       -> ${lastTwoCharacters2("") }`)
// console.log(`lastTwoCharacters2(" ")      -> ${lastTwoCharacters2(" ") }"`)
// console.log(`lastTwoCharacters2("1")      -> ${lastTwoCharacters2("1") }"`)


// let school = "Flora Ylagan"; 
// console.log(school)
// console.log(school.slice(0,5))
// console.log(school.slice(-6))


// let age = 16;  // driver's license 

// if(age >= 16) {  
//     console.log ('yes'); 
// } else { 
//     console.log ('no');
// }

// console.log ('----')

// age >= 16 ? console.log("yes")
//   : (age = 15) ? console.log("student license") 
//   : console.log("no");



//      return arr1H.includes(num)? '1st half'
//      : arr.includes(num) ? '2nd half'
//      : 'does not belong to the array'

/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples:
firstTwoCharacters("Tech") -> "Te"
firstTwoCharacters("Global") -> "Gl"
firstTwoCharacters("") -> ""
firstTwoCharacters(" ") -> " "
firstTwoCharacters("1") -> "1"

*/




/* 
Write a JavaScript function that takes an array of numbers and returns a new array where:
- Even numbers are doubled.
- Odd numbers are tripled.
*/

// const transformArray = arr => arr.map(   num =>  num % 2 === 0 ? num * 2 : num * 3  );

// console.log(transformArray([ 1, 2, 3, 4, 5]));  
//Output: [3, 4, 9, 8, 15]


/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples:
firstTwoCharacters("Tech") -> "Te"
firstTwoCharacters("Global") -> "Gl"
firstTwoCharacters("") -> ""
firstTwoCharacters(" ") -> " "
firstTwoCharacters("1") -> "1"

*/

// function firstTwoCharacters (word) {
//     return word.slice(0,2)
// }

// const firstTwoCharacters = word => word.slice(0,2)

// console.log(`firstTwoCharacters("Tech") -> ${firstTwoCharacters("scienceTech")}`); 




//const simpleArr= ['c', 'f', 'h', 't', 'y', 'pl', 'ty'];

// const numbers = [5, 7, 12, 15];
// // console.log( ( numbers[0] + numbers[numbers.length - 1] ) / 2);
// // console.log(numbers[-1])
// // console.log(numbers.at(5))

// console.log(numbers)
// numbers.fill(2,2,6)
// console.log(numbers)

// const numberx = [4 , 5, 6 ]
// const namesy = ["bill", "diana", "lee"]

// console.log( numberx.sort ((a,b) => a-b ) )
// console.log(numberx)
// console.log ('-----')
// console.log( numberx.sort ((a,b) => b-a ) )
// console.log(numberx)
// console.log ('-----')

// console.log( namesy.sort ((a,b) => a-b ) )
// console.log(namesy)
// console.log ('-----')
// console.log( namesy.sort ((a,b) => b-a ) )
// console.log(namesy)
// console.log ('-----')
// console.log( namesy.sort ((a,b) => b-a ).reverse() )
// console.log(namesy)

const numberz = [4 , 5, 1]
//const numbera = numberz.concat([6,8,90])
const numbera = [...numberz, 6,8,...numberz, 90,...numberz,]
console.log(numberz)
console.log(numberz)
console.log(numbera)



// console.log(numberz)
// console.log(numberz.flat())
// console.log(numberz)
// console.log(numberz.toString())
// let t = `${numberz}`
// console.log(`${numberz}`)
// console.log(t)
// numberz.join()


// let largeArray = Array.from({ length: 10000000 }, () => Math.random()*10);
// //let smallArray = Array.from({ length: 10 }, () => Math.random()*10);

//console.log(largeArray) 
//console.log(smallArray) 