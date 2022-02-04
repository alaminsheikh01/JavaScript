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

function nameOfFunction(name){
    if(!name){
        console.log('Please provide your name ')
    }else{
        console.log("Hello", name)
    }
}

nameOfFunction("Alamin Sheikh")
nameOfFunction()