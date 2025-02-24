const arr38 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const arr39 = [101, 201, 303, 404, 505, 605, 707, 808, 909, 999]


function whichHalf (arr, num) {
    const arr1H = arr.splice(0,Math.round(arr.length/2))
 
     return arr1H.includes(num)? '1st half'
     : arr.includes(num) ? '2nd half'
     : 'it\'s not part of the array'
}

console.log( whichHalf(arr38, 2)); 
console.log( whichHalf(arr38, 9)); 
console.log( whichHalf(arr38, 210)); 

console.log('-----')
console.log( whichHalf(arr39, 404)); 
console.log( whichHalf(arr39, 909)); 
console.log( whichHalf(arr39, 210)); 