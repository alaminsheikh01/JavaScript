const numbers = [2,3,4,5,6,7]

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i] * 2)
//     sum += numbers[i]

// }
// console.log(sum)

// callback function

// const cb = (value, index, arr) =>{
//     console.log(value, index, arr)
// }

// numbers.forEach(cb)


// imperative way

// const arr = [1,2,3, null, false, 4,5,6, '', 'test', 9]

// let count = 0;

// for(let i=0; i < arr.length; i++)
// {
//     for(let j=i; j < arr.length - 1; j++){
//         if(!arr[j] || typeof arr[j] !== 'number'){
//             arr[j] = arr[j+1]
//             arr[j+1] = undefined;
//         }
//     }

//     if(arr[i] == undefined){
//         count++;
//     }
// }

// arr.length -= count;
// console.log(arr)

// const filteredArray = arr.filter((v) => typeof v == 'number');
// console.log(filteredArray)


// const newArr= []
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == 'number'){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// const a = {a:10},
// b = {a: 10};
// console.log(a == b)

// const arr = [
//     {id: 1, value: 10},
//     {id: 2, value: 20},
//     {id: 3, value: 30},
//     {id: 4, value: 40}
// ]

// splice -> mutable
// const index = arr.findIndex(item => item.id == 2);
// const arr1 = arr.splice(index, 1)
// // console.log(arr1)


// filter -> immutable
// const arr2 = arr.filter((item) => item.id !== 3);
// console.log(arr)
// console.log(arr2)

// const microphone ={
//     brand: 'Fifine',
//     indicator: true,
//     price: 8000,
//     color: 'Black',
//     startRecording() {
//         console.log('recording started')
//     },
//     stopRecording: () =>{
//         console.log('recording stopped')
//     }
// }

// Object.freeze(microphone)
// microphone.newProperty = 'my new property'

// console.log(Object.keys(microphone))
// console.log(Object.values(microphone))

// console.log(microphone)


/**
 * There are two different parts in Object
 * 1. Noun / Adjective (state/data/property)
 * 2. Verb
 */

 function uuidv4() {
     return 'xxxxxx-xxxx-4xx-yxx-xxxxxxxxxxx'.replace(/[xy]/g, (c) =>{
         const r = (Math.random() * 16) | 0;
         const v = c == 'x' ? r : (r & 0x3) | 0x8;
         return v.toString(16);
     })
 }
//  console.log(uuidv4())

//  const students = [
//     {
//         id: '4da52a-c4eb-4b7-9ff-3ed204e21ad',
//         name: 'Alamin Shiekh',
//         email: 'alamin@gmail.com'
//       },
//       {
//         id: 'd42527-83e8-4df-935-8ab96c21086',
//         name: 'Sheikh Alamin',
//         email: 'sheikh@gmail.com'
//       }
//  ]

//  // update
// //  const idToUpdate = 'd42527-83e8-4df-935-8ab96c21086';
// //  const updatedData = {
// //      name: 'Allahu akbar',
// //      email: 'allah1@gmail.com'
// //  };
// //  const updatedIndex = students.findIndex(item=> item.id == idToUpdate)
// // students[updatedIndex] = {
// //     id: idToUpdate,
// //     ...updatedData
// // }

// const std = {
//     id: uuidv4(),
//     name: 'Feroz khan',
//     email: 'feroz@gmail.com'
// };
// students[std.id] = std;

// const idToUpdated = 'd42527-83e8-4df-935-8ab96c21086'
// const updatedData = {
//     name: 'HM azijul',
//     email: 'azijul@gmail.com'
// };
// students[idToUpdated] ={
//     ...students[idToUpdated],
//     ...updatedData
// }

// for(let key in students){
//     console.log(students[key].name)
// }


// Object.keys(students).forEach((key) =>{
//     const student = students[key];
//     console.log(student.name, student.email)
// })
//  console.log(students)

// const arr = []
// const arrToObj = {}

// for(let i=0; i < 5000000; i++){
//    const o ={
//        id: i,
//        value: i,
//    };
//    arr.push(o);
//    arrToObj[i] = o;
// }
// // console.log(arr.length)
// console.time('array');
// const index = arr.findIndex((item) => item.id == 4000000);
// arr.splice(index, 1)
// console.timeEnd('array')

// console.time('object')
// delete arrToObj[4000000];
// console.timeEnd('object')

// const num = [1,2,3,4,5, false, NaN, '', 6,7]
// const strs = num.map(v => v.toString())
// console.log(strs)

// const filtered = num.filter((v) => !!v)
// console.log(filtered)

// const result = numbers.reduce((acc, cur, index) =>{
//     if(index == 0 ) acc += '[';
//     if(cur) {
//         acc += cur.toString() + (index < numbers.length - 1 ? ', ': '');
//     }
//     if(index == numbers.length - 1) acc += ']';
//     return acc;
// }, '')

// console.log(result)


// working data from server

// const axios = require('axios').default;
// const url = 'https://jsonplaceholder.typicode.com/posts'

// async function getData() {
//     const {data} = await axios.get(url);
//     // const result = data.splice(0,10).map(item => {
//     //     return {
//     //         userId: item.userId,
//     //         id: item.id,
//     //         title: item.title,
//     //     }
//     // })
//     const result = data.splice(0,10).reduce((acc, cur) =>{
//         acc[cur.id] = {...cur};
//         delete acc[cur.id].body;
//         return acc;
//     },{})
//     return result;
// }

// getData().then(data => console.log(data))
// .catch(e => console.log(e))

function fact(n){
    if(n==0){
        return 1;
    }else{
        return fact(n-1) * n;
    }
}

console.log(fact(0));