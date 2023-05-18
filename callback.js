// callback
// hof
// a function called by another function

// function a(){
//     console.log('i am called by function b')
// }

// function b(){
//     a()
// }

// b()

// const arr = ['hey', 'hi', 'hello', 'hola', 'namaste']

// arr.forEach(val => {
//     console.log(val)
// });

// foreach is a HOF and ()=>{} inside it is callback.

// setTimeout

// setTimeout(()=>{
//     console.log('hola, this is amazing')
// }, 5000)

// setInterval

// setInterval(() => {
//     console.log('love you brother')
// }, 2000);

// map

// const array = [1,2,3,4,5]
// array.map((el)=>{console.log(el)})
// const numsq = array.map(num=>num*num)
// console.log(numsq)

// fiter

// const country = ['india', 'pakistan', 'finland', 'china', 'japan', 'newzealand', 'canada', 'denmark', 'switzerland', 'srilanka', 'iceland']
// const filteredCountry = country.filter((el)=>el.includes('land'))
// console.log(filteredCountry)

// reduce

// const count = [1,2,3]
// // const initialValue = 1;
// const initialValue = 2;
// const reducedCount = count.reduce((accumalator, currentValue)=>accumalator + currentValue,initialValue )
// console.log(reducedCount);

// sort

// const names = ['anish','vishal', 'ramcharan', 'manu', 'kajal', 'yatika']
// const sorted = names.sort()
// const sortedReverse = sorted.reverse()
// console.log(sortedReverse)

// destructuring

// const arr2 = ['chavan','rathod','pawar','jadhao']
// let [anish,kajal,kalyani,vinod] = arr2
// console.log(anish,kajal,kalyani,vinod)

// const arr1 = [1,2,3]
// let [var1, ,var2]= arr1
// console.log(var1, var2)

const arr4 =[1,2,3,4,5,6,7,8]
let [num1, num2, ...rest]= arr4
console.log(num1, num2)
console.log(...rest)
console.log(rest)