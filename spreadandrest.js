// spread and rest
// try and catch

// spread

// function sumone(x,y){
//     return x + y
// }

// let val = [2, 3]
// console.log(sumone(...val))

// rest

// function sum(...args){
//     let total = 0
//     for (const el of args) {
//         total = total + el
//     }
//     return total
// }

// console.log(sum(1,2,3,4))

// // try catch

// try {
//     let firstname = 'anish'
//     console.log(firstname)
// } catch (error) {
//     console.log('variale name is missing')
// } finally{
//     console.log('i will run')
// }

// try {
//     let firstname = 'anish'
//     console.log(firstname + " " + lastname)
// } catch (error) {
//     console.log('variale name is missing')
// } finally{
//     console.log('i will run')
// }

// // event loop

// const funcOne = ()=>{
//     console.log('i am function one')
// }

// const funcTwo = ()=>{
//     setTimeout(()=>{
//         console.log('i am setTimeout')
//     }, 3000)
//     console.log('i am function two')
// }

// const funcThree=()=>{
//     console.log('i am function three')
// }

// funcOne()
// funcTwo()
// funcThree()

// // promise

// const one =()=>{
//     return 'this is index page'
// }

// const two =()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ('credintial success')
//         }, 3000);
//     })
// }

// const three =()=>{
//     return 'this is homepage'
// }

// const callme = async ()=>{
//     let fone = one()
//     console.log(fone)

// let ftwo = await two()
// console.log(ftwo)

// let fthree = three()
// console.log(fthree)
// }

// callme()

// closure

// function sum() {
//   let a = 10;
//   function add() {
//     console.log(a);
//   }
//   add();
// }
// sum();

function outer(){
    let a = 10;
    function inner(){
        // let b = 20;
        // console.log(a)
        function innerInner(){
            // console.log(a)
            // console.log(b)
            // let c = 30;
            function innerInnerInner(){
                console.log(a)
                // console.log(b)
                // console.log(c)
            }
            innerInnerInner()
        }
        innerInner()
    }
    inner()
}

outer()