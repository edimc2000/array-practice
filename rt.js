const complexArr1 =
 [
    {
        el1: [1,2,3,4,5], 
        el2: [100,200,300]
    }, 
    
    {
        el3: ['c', 'f', 'h', 't', 'y', 'pl', 'ty'], 
        el4: [569,998,547]
    }
];

console.log(complexArr1.length) //2
console.log(complexArr1[0])
console.log(complexArr1[0].el1) 
console.log(complexArr1[0].el1[4]) 
console.log(complexArr1[0].el1[(complexArr1[0].el1.length-1)]) 


console.log(complexArr1[1].el3[3])
console.log(complexArr1[1]['el3'][5])

// const simpleArr= ['c', 'f', 'h', 't', 'y', 'pl', 'ty'];
