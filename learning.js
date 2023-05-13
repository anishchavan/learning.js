// let age = 28

// if(age>=21){
//     console.log('You are enough old to get married')
// }else{
//     console.log(`You need to wait till you complete 21 `)
// }

// let age = 55;
// if (age < 18){
//     console.log('You are minor, you are not allowed.')
// }
// else if(age >= 18 && age < 65){
//     console.log('You are adult, You can enjoy the movie.')
// }
// else if(age >= 65){
//     console.log('You are senior citizen, you need to take some rest and watching movie is not feasible for you.')
// }

// switch case

// let user = 'Actor'

// switch (user) {
//     case 'Admin':
//         console.log("hello i am Admin and i can do whatever I want to.")
//         break;

//     case 'Mentor':
//         console.log("Mentor is here")
//         break;

//     default:
//         console.log("I am something new to the market")
//         break;
// }

// let owner = 'ganesh'

// switch (owner) {
//     case 'Anish':
//         console.log('hand me whole property')
//         break;

//         case 'suhas':
//             console.log('dont make him stand infront of my door')
//             break;

//     default:
//         console.log('donate all the property to the trust')
//         break;
// }

// conditional operators

// let raining = true

// raining ? console.log('it is raining'): console.log('not raining')

// array

// let name = ['anish','suhas','shyam','ganesh','mukesh','seema','roshani']

// console.log(name)
// console.log(name[0])

// object

// let bankaccount = {
//     firstname: 'anish',
//     lastname : 'chavan',
//     mobile : 8600236197,
//     email : 'anishchavan29@gmail.com',
//     account : 31601876677,
//     branch : 'SBI Murtizapur'

// }

// console.log(bankaccount.mobile)
// console.log(bankaccount.email)
// console.log(bankaccount.firstname)
// console.log(bankaccount.lastname)
// console.log(bankaccount.account)
// console.log(bankaccount.branch)

// Date

// const todaysDate = new Date()

// console.log(todaysDate)
// console.log(todaysDate.toString())
// console.log(todaysDate.getFullYear())
// console.log(todaysDate.getMonth())
// console.log(todaysDate.getDay())
// console.log(todaysDate.getTime())
// console.log(todaysDate.getHours())
// console.log(todaysDate.getMinutes())
// console.log(todaysDate.getSeconds())

// Math

// const  pi = Math.PI
// console.log(Math.round(pi))
// console.log(Math.ceil(pi))
// console.log(Math.floor(pi))

// console.log(Math.round(Math.random()* 10))

// loops

// do while, while, for

// let i = 7;
// do {
//   console.log("value of i:", i);
//   i++;
// } while (i <= 5);

// let j = 8;
// while (j <= 5) {
//     console.log('value of i:', j)
//     j++
// }

for (let i = 0; i <=100; i++) {
    console.log(`${i} * ${i} is ${i * i}`)
}