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


const arr = [1, 6, 98, 10, 5];
console.log(arr); // Output: [6, 45, 50, 98]

const arr3 = [].concat(arr);
arr3.reverse();

// arr.sort();
console.log(arr); // Output: [6, 45, 50, 98]
console.log(arr3); 

// Sort in ascending order
// arr.sort((a, b) => a - b);

// console.log(arr); // Output: [6, 45, 50, 98]

arr[25] = 60;
console.log(arr); // Output: [6, 45, 50, 98]