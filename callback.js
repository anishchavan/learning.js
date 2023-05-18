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

const arr = ['hey', 'hi', 'hello', 'hola', 'namaste']

arr.forEach(val => {
    console.log(val)
});

// foreach is a HOF and ()=>{} inside it is callback.

// setTimeout

setTimeout(()=>{
    console.log('hola, this is amazing')
}, 5000)

// setInterval

setInterval(() => {
    console.log('love you brother')
}, 2000);

// map

const array = [1,2,3,4,5]
array.map((el)=>{console.log(el)})
const numsq = array.map(num=>num*num)
console.log(numsq)