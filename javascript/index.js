const prompt = require('prompt-sync')()

// // console.log("first")

//          // function

// // function anything(){
// //    console.log("mera naam")
   
// // }

// // anything()

// // const func=()=>{
// //    console.log("second")
// // }

// // func()


// // function add(a , b , c){
// //    console.log(a+b+c)
// // }
// // add(7,8,7)

// // function uskaname (a , b , c){
// //    console.log(a + b + c)
// // }
// // uskaname(9 ,9 , "afzzu")



// // function add(a , b , ){
// //    console.log(a + b )
// // }
// // add(20,30)
// // add(9,4)
// // add(6,7)
// // add(3,4)
// // add(2,2 )

// // datatypes

// // String = set of characters

// // let name = ("afzal")
// // let name2 = 1
// // // let name3 = (`moyal`)

// // console.log(name)

// // console.log(typeof(name))

// // console.log(typeof(name2))


// // let string = `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG`

// // console.log(string.length)

// // console.log(string.length)

// // let trimmed = string.trimStart()
// // console.log(trimmed.length)


// // let sliced = string.slice(10,19)
// // let sliced = string.slice(10)
// // console.log(sliced)
// // console.log(string)



// // let upper = string.toUpperCase()
// // console.log(upper)

// // let lower = string.toLowerCase()
// // console.log(lower)

// // let userDetail = prompt("enter name:")

// // const upper =userDetail.toUpperCase()
// // const lower = userDetail.toLowerCase()
// // console.log(lower)


// // let string = `the quick brown fox jumps over the Jumps lazy JUMPS dog`
// // let lower = string.toLowerCase()
// // console.log(lower)

// // let replaced = string.replaceAll(/jumps/gi , 'sat')
// // console.log(replaced)

// // let include =string.includes('the')
// // let include = string.includes('afzal')
// // let include = string.charAt(2)
// // console.log(include)

// // let splitted = string.split('')
// // let splitted = string.split(' ')
// // console.log(splitted)



// // let string = `the quick brown fox jumps over the Jumps lazy JUMPS dog `
// // let string2 = `the quick brown fox jumps over the Jumps lazy JUMPS dog `
// // let string3 = `the quick brown fox jumps over the Jumps lazy JUMPS dog `

// // let concat = string.concat(string2,string3)
// // console.log(concat)



// //    conditional statement


// // let age = 26

// // if(age>=18){
// // console.log("you are eligible to vote")
// // }else{
// // console.log("no you cannot")
// // }


// // let age = prompt("enter your age")

// // if(age>=18){
// //     console.log("yes")
// // }else{
// //     console.log('no')
// // }


// // + ,- , * mathematical oprater
// // && , || , ! logical oprater
// // ++ , -- unary oprater

// // let num = 5
// // num++
// // console.log(num)


// // comparison oprater - == , === , >= , <=

// // let a = 5
// // let b = 9
// // console.log(a == b)

// // let marks = prompt('enter marks : ')
// // if(marks<=100 && marks>=90){
// //     console.log('10cgpa')
// // }
// // else if (marks<90 && marks>=80){
// //     console.log('9cgpa')
// // }
// // else if(marks<80 && marks>=70){
// //     console.log('8cgpa')
// // }
// // else if(marks<70 && marks>=60){
// //     console.log('7cgpa')
// // }
// // else if (marks<60 && marks>=50){
// //     console.log('6cgpa')
// // }
// // else if (marks<50 && marks>=40){
// //     console.log("5cgpa")
// // }
// // else{
// //     console.log("fail")
// // }






// // parseInt , parseFloat

//         //    parseInt
// const num1 = parseInt( prompt("enter numebr 1: "))
// const oprater = prompt('enter oprater either: + , - , * , / ')
// const num2 = parseInt( prompt('enter number 2: '))

// let result = '';

// if(oprater == '+'){
//     result = num1 + num2
// }
// else if(oprater == '-'){
//     result = num1 - num2
// }
// else if(oprater == '*'){
//     result = num1 * num2
// }
// else if(oprater == '/'){
//     result = num1 /num2
// }
// else{
//     console.log('wrong input')
// }
// console.log(result)


//             //    parseFloat

// const num1 = parseFloat(prompt('enter number 1: '))
// const oprater = prompt('enter oprater either: + , - , * , / :')
// const num2 = parseFloat(prompt('enter number 2: '))

// let result = '';

// if(oprater == '+'){
//     result = num1 + num2
// }
// else if(oprater == '-'){
//     result = num1 - num2
// }
// else if(oprater == '*'){
//     result = num1 * num2
// }
// else if(oprater == '/'){
//     result = num1 / num2
// }
// else{
//     result = 'wrong input'
// }


// console.log(num1 +" "+ oprater +" "+ num2 +" "+ "=" +" "+ result)
// console.log(`${num1} ${oprater} ${num2} = ${result}`)


// // let array = [1 , 'afzal' , 'fazal']
// // console.log(array[2])

// // let array = [1 , 2 , 3 , 4 , 5 , 6 ,7]

// // array.push("fazal")
// // array.pop()
// // array.shift()

// // console.log(array)
// // console.log(array.length)



// let animalHeight = prompt("enter animal height either lessthen 1 or greater then 1 (<=1 / >1): ")

// if(animalHeight<=1){
//         console.log('animal is short')

// let squeak = prompt('can / cannot squeak: yes / no')
// if(squeak == "yes"){
//         console.log('meight be a squirrel')
// }else{
//         console.log("meight be a rat")
// }

// }else{
//         console.log('animal is tall')
      
//         let neck = prompt(`enter animal's neck , short / long: `)
//         if(neck == 'long'){
//                 console.log('meight be a giraffe')

//         }else{
//                 let nose = prompt("tell me about nose , short / long")
//                 if(nose == 'long'){
//                         console.log('meight be a elephant')
//                 }
//                 else{
//                         let live = prompt('where does it live, on land / in water')
//                         if(live == "land"){
//                                 console.log("might be rhino")

//                         }else{
//                                 console.log("might be hippo")
//                         }
//                 }
//                 }
//         }



// let animalHeight = prompt("<1 / >1")
 
// if(animalHeight=="<1"){
//     console.log("animal is short")
 
//  let squeak =  prompt('can / cannot squeak: yes/ no')
//  if(squeak == "yes"){
//     console.log('might be a squirrel')
//  }else{
//     console.log('might be a rat')
//  }
// }
// else{
 
//     console.log('animal is tall')
 
//    let neck =  prompt(`enter animal's neck , short/ long:  `)
//    if(neck == 'long'){
//     console.log('might be a giraffe')
 
//    }else{
 
//    let nose =  prompt('now tell me about nose long/short: ')
//    if(nose == "long"){
//     console.log('might be an elephant')
//    }else{
   
//    let live =  prompt('where does it live,  on land/ in water: ')
//    if(live == "land"){
//     console.log("might be a Rhino")
//    }else{
//     console.log('might be a hippo')
//    }
//    }
//    }
 
 
// }



// let array = [1, 'afzal' , "fazal" , 2]
// console.log(array[2])


// let array2 = [1,2,3,4,5,6,7,8,9,]

// array2.push("afzal" , "fazal")
// array2.pop()
// array2.shift()
// array2.unshift('afzzu')


//  const sliced = array2.slice(3)
//  const sliced = array2.slice(1,7)
//  console.log(sliced)

// array2.splice(2 , 3 , 'fazal' , 0,9,8,7)

// array2.splice(3 , 0  , "fazal")
// console.log(array2)

// console.log(array2)
// console.log(array2.length)



// let array = [1,2,3,4,5,6,7,8,78,9,8,7,6,5,4,3]
// let newarr = array.toString()
// console.log(newarr)



// let arr3 = [78, 67, 55, 44,878, 90, 45, 11,21, 32,10]
// let newarrrr = arr3.toString()
// console.log(newarrrr)

// let arr4 = [567, 768, 345, 789, 675, 909]

// const newarr = array.concat(arr3 ,arr4)
// console.log(newarr)

// const newarrr = array.join('/')
// console.log(newarrr)
// array.sort()
// console.log(array)

// let arr2 = [ "fazal" , "afzal", "afzzu"   ]
// arr2.sort()
// console.log(arr2)

// let arr3 = [78, 67, 55, 44,878, 90, 45, 11,21, 32,10]
// arr3.sort()
// console.log(arr3)


// const array = [1,2,['afzal',null,['2',3], 7]]
// console.log(array[2][3])

// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')
// console.log('afzal')

// for(let i = 1 ; i<=10; i++){
//     console.log('fazal')
// }

// for(){
//     //statement
// }

// for(let i = 5; i<=50; i=i+5){
//     console.log(i)
// }

// for( let i =1 ; i<=11; i++){
//     console.log('afzzu')
// }

// for(let i =2; i<=20; i=i+2){
//     console.log(i)
// }


// for(let i=3; i<30; i=i+3){
//     console.log(i)
// }

// for(let i=17; i<=170; i=i+17){
//     console.log(i)
// }

// for(let i =1; i<=10; i++){
//     console.log(i*2)
// }


// for(let i=1; i<=10; i++){
//     console.log(i*19)
// }


// let array = parseFloat(prompt('enter value ;'))
// for(let i =1; i<=10; i++){
//     console.log(i*array)
// }

// let array = parseInt(prompt('enter value ;'))
// for(let i =1; i<=10; i++){
//     console.log(i*array)
// }


// let arr = [1,2,3,4,5]
// arr.forEach((value)=>{
//     console.log(value)
// })

// let array = [1,2,3,4,5,6]
// array.forEach((value , index)=>{
//     console.log(value , index)
// })

// const arr =[2,3,4,5,6]
// arr.forEach((value)=>{
//     console.log(value*2)
// })


// let arr = [1,2,3,4,5]
// arr.map((value)=>{
// console.log(value)
// })

// let arr = [1,2,3,4,5,6]
// arr.map((value)=>{
// console.log(value)
// })
// let array = arr.map((value)=>{
// return value
// })
// console.log(array)


// let arr = [1,2,3,4,5,]
// arr.map((value)=>{
//     console.log(value)
// })
// let array = arr.map((value)=>{
// return value
// })
// console.log(array)

// let array = [1,2,3,2,3,4,5,,4,2,3,3,6,7,5,3]
// const arr = array.filter((value)=>{
// return value==3
// })
// console.log(arr)

// let array = [1,2,3,2,3,4,2,5,7,6,4]
// const arr = array.reduce((previous , current)=>{
//     return previous * current
// })
// console.log(arr)


// let num = 23;
// console.log(isNaN(num))

// let num2 = 'afzal';
// console.log(isNaN(num2))

// let num = 34;
// const newnum =num.toString()
// console.log(typeof(newnum))

// const num = 56;
// const array = num.toString()
// console.log(typeof(array))


// let num = 2566768743543757898776744;
// console.log(num)

// let num = BigInt(234567898765434568765456);
// console.log(num)

// let num = 23.52356;
// const newnum = num.toFixed(2)
// console.log(newnum)

// let num = 45.5678654
// let num2 = num.toPrecision(5)
// console.log(num2)



        //  JS date

// const date = new Date()
// console.log(date)

// const date = new Date()
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())
// console.log(date.toTimeString())
// console.log(date.toUTCString())

// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getDay())

// const date = new Date()
// date.setDate(12)
// console.log(date)

// const newd = new Date()
// newd.setDate(19)
// newd.setMonth(4)
// newd.setFullYear(2005)
// console.log(newd)
// console.log(newd.toJSON())

// console.log(Math.PI)
// console.log(Math.sqrt(81))
// console.log(Math.round(24.56))
// console.log(Math.floor(24.56))
// console.log(Math.ceil(24.10))
// console.log(Math.trunc(24.10))

// scope , hoisting , clouser , object

// 3 type of scope = block , global , function

// var = global variable

// let , const = local/ block variable

// var a = 7;
// console.log(a)

// {
//         let a = 3;   
     

//         console.log(a)
// }

// object

// const student = {
//         name: "afzal",
//         age: 19,
//         class:12,
//         rollno: 34
// }
// // console.log(student)
        //   Same 
// let student = {
//         name: ' Mohd Aslam',
//         class: 8,
//         rollno:56,
//         dob:13
// }
// console.log(student.name)
// console.log(student.class)
// console.log(student.rollno)
// console.log(student.dob)
//         Same
// const student = {
//         name: "aadil moyal",
//         class: 5,
//         rollno: 45,
//         age: 10
// }
// console.log(student["name"])
// console.log(student["class"])
// console.log(student['rollno'])
// console.log(student['age'])

// const student = {}
// student.name = "afzal";
// student.rollno = 345678
// console.log(student)

     
//      ternary operator


// let x = 70;

// console.log(x>=18? "yes you can vote ": "no cannot vote")

         // condition ? true:false

        //  let x = 20;
        //  console.log(x>=18? "yes  you can vote" : (x<=10 ? true :false))


let job = prompt("enter job title:");
switch (job) {
        case 'engineer':
                console.log("zindagi ho to aisi");
        break;
        case "teacher":
                console.log("moj kardi");
        break;
        case "student":
                console.log("pdai lhikai kro IAS YAS bano ");
        break;

        default:
               console.log("kuch karle bhai")
                
                break;

      
}