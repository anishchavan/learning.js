// Array 
// Array methods

// let names=['anish','suhas','ganesh','shyam','mukesh','roshani','seema']

// console.log(names)
// console.log(names.length)
// console.log(names[3])
// console.log(names[names.length-1])
// names[6]='makram'
// console.log(names)

// another way of declaring array

// let names = new Array('nilesh', 'manish', 'santosh')
// console.log(names)
// names.push('anish')
// console.log(names)

// console.log(names.slice(0,2))
// names.push('vaibhav')
// console.log(names)
// console.log(names.slice(2,4))

// splice
let fruits=['banana', 'pineapple','orange', 'grapes', 'sapota']
fruits.splice(2,2,'watermelon', 'guava')
console.log(fruits)

// concationations

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let arr3 = [9,10,11,12]
// console.log(arr1.concat(arr2))
// console.log(arr1.concat(arr2,arr3))

// includes
// let myArray = [1,2,3,4,5]
// console.log(myArray.includes(4,3))
// console.log(myArray.includes(4,4))

// indexOf
// console.log(myArray.indexOf(3))
// console.log(myArray.indexOf(4))

// isArray
// console.log(Array.isArray(myArray))
// let str = 'satish'
// console.log(Array.isArray(str))

// join
// console.log(myArray.join(' '))
// console.log(myArray.join(' anish '))

// lastindexOf
// let we = ['anish','suhas','shyam','mukesh','ganesh','anish']
// console.log(we.lastIndexOf('anish'))

// map
// let calc = [1,4,9,16,25]
// console.log(calc.map(Math.sqrt))

// pop
// let nums = [1, 2, 3, 4, 5, 6, 7]
// console.log(nums.pop())
// console.log(nums) it modifies the original array

//reverse
// let nums = [1, 2, 3, 4, 5, 6, 7]
// console.log(nums.reverse())

// shift
// let nums = [1, 2, 3, 4, 5, 6, 7]
// console.log(nums.shift())

// sort
// let we = ['anish','suhas','vhyam','mukesh','ganesh','vanish']
// console.log(we.sort())
// console.log(we.reverse())
// console.log(we.reverse(we.sort())) gives same output like above line

// unShift
// let stationary = ['pen', 'eraser','notebook','pencil','sharpner']
// console.log(stationary.unshift('refill','ruler'))
// console.log(stationary)

// converting string to array
// let myName = 'Anish'
// console.log(myName.split(''))

// for of
// let fruits = ['sapota','strwaberry','banana','pineapple','apple']
// let fruitsInUppercase = []
// for (const etables of fruits) {
//     fruitsInUppercase.push(etables.toUpperCase())
// }
// console.log(fruitsInUppercase)

// break and continue
// for (let index = 0; index <= 5; index++) {
//     if (index == 3) {
//         break;
        
//     }
//     console.log(index)
// }

// for (let index = 0; index <= 5; index++) {
//     if (index == 3) {
//         continue;
        
//     }
//     console.log(index)
// }