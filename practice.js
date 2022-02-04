// let names = ['Alamin', 'sheikh12', 'Alamin Sheikh'];
// let index = -1;
// let name = names[++index];

// setInterval(() =>{
//     name = names[index++]
//     console.log(name, name.length)

//     if(index == names.length){
//         index = 0;
//     }
// }, 1000)

// for(let i=1; i<10; i++){
//     console.log("Hello", i)
// }

// while(true){
//     let num = Math.ceil(Math.random() * 100);
//     console.log("Alamin", num)

//     if(num == 99) {
//         break;
//     }
// }

// do{
//     console.log("It wil run at least once")
// }while(false)

// function nameOfFunction(name){ // parameter
//     if(!name){
//         console.log('Please provide your name ')
//     }else{
//         console.log("Hello", name)
//     }
// }

// nameOfFunction("Alamin Sheikh") // argument
// nameOfFunction()

function generateRandomNumber(min=1, max){
    const randomNumber = Math.floor(Math.random() * min + (max-min))
    return randomNumber;
}

console.log(generateRandomNumber(5, 10))

// Array
const name1 = 'Rayhan';
const name2 = 'Alvi';
const somethingElse = 'Anik';
const name4 = 'Arjun';
const name5 = 'Ayman';

const students = ['Rayhan', 'Alvi', 'Anik', 'Arjum', 'Ayman', 'Ayyub', 'Bipon'];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

for (let i = 0; i < students.length; i++) {
	console.log(students[i], students[i].toLowerCase());
}

// name1.sendEmail()
// name2.sendEmail()
// somethingElse.sendEmail()

const nums = [1, 2, 3, 4, 5, 6]
const bools = [true, true, false, false]
const nulls = [null, null, null, null]
const us = [undefined, undefined, undefined]
const arrayOfArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const mixed = [true, null, "SL", 100, [1, 3, 4]]

// Object

const student1 = {
	firstName: 'Abu',
	secondName: 'Rayhan',
	email: 'rayhan@example.com',
	age: 25,
	attend: true,
};

const student2 = {
	firstName: 'Alvi',
	secondName: 'Chowdhury',
	email: 'alvi@example.com',
	age: 25,
	attend: true,
};

const student3 = {
	firstName: 'Akib',
	secondName: 'Ahmad',
	email: 'akib@example.com',
	age: 25,
	attend: true,
};

const allStudents = [student1, student2, student3];
for (let i = 0; i < allStudents.length; i++) {
	sendEmail(allStudents[i].email);
}

function sendEmail(email) {
	console.log('Sending email to', email);
}