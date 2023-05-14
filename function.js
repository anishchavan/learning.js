// functions

// function sum() {
//     let num1 = 12
//     let num2 = 2
//     console.log('The sum of two numbers are', num1+num2)
// }
// sum()
// sum()
// sum()
// sum()

// function sum(num1,num2) {
//   console.log("The sum of two numbers are", num1 + num2);
// }
// sum(2,3);
// sum(4,5);
// sum(6,7);
// sum(8,9);

// funtion  with return keyword
// function sum(val1, val2){
//     let result = val1 + val2
//     return result
// }
// let add=sum(2,3)
// console.log(add)

// function sum(val1, val2){
//     let result = val1 - val2
//     return result
// }
// let add=sum(2,3)
// console.log(add)

// function sum(val1, val2){
//     let result = val1 * val2
//     return result
// }
// let add=sum(2,3)
// console.log(add)

// function sum(val1, val2){
//     let result = val1 / val2
//     return result
// }
// let add=sum(2,3)
// console.log(add)

// function sum(val1, val2){
//     let result = val1 % val2
//     return result
// }
// let add=sum(2,3)
// console.log(add)

// function fullName(middleName, surName){
//     let firstName = 'Anish'
//     let result= firstName+middleName+surName
//     return result;
// }

// let myName = fullName(' Ramcharan',' Chavan')
// console.log(myName)

// function fullName(middleName, surName){
//     let firstName = 'Anish'
//     let result = firstName+middleName+surName
//     console.log(result)
// }

// fullName(' Ramcharan', ' Chavan')

// function sum(array) {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum = sum + array[index];
//     }
//   return sum;
// }

// let sumArray = [1, 2, 3, 4, 5, 6];
// let calculations = sum(sumArray);
// console.log(calculations);

// function addition() {
//     let sum = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         sum =sum + arguments[index];
//     }
//     return sum;
// }

// let values = addition(7,8,9,10,11,12,14,15)
// console.log(values)

// Arrow function
// let arrowFun=()=>{
//     console.log('this is the arrow function')
// }
// arrowFun()

let arrFun =(val1, val2)=>{
    let addition = val1 + val2
    return addition;
}
let sum= arrFun(2, 3)
console.log(sum)