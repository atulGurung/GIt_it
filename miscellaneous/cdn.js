// -------------------------------------------------------------- //
          // FUNCTION IN JS //

// function greetUser(userName){
//     console.log('hello ' + userName + ' Welcome to Cdn World !!!')
// }          
// greetUser('Atul');
// ------------------------------------------------------
// function sum(num1 = 0, num2 = 0){
//  console.log("Sum of the number is:",num1 + num2)
// }

// sum(4, 5);
// sum(4);
// ------------------------------------------------------

// function getvalue(){
//     return 1,2,3;
// }

// var result = getvalue();
// console.log(result);
// -------------------------------------------------------

/*const teams = ['CSK','RCB','MI','LSG'];
console.log(teams.length);

   // ADDING ELEMENT ON ARRAYS //
   //push(); will add an element, from last.
  
teams.push('GT');
console.log(teams);   

   //unshift(); will also add element, from starting. 

teams.unshift('KKR');
console.log(teams);

    // REMOVING ELEMENT FROM ARRAYS //
    //pop(); will remove element, from last. and don't need any argument in it.
teams.pop();
console.log(teams);

    //shift(); also remove element,from starting.
 teams.shift();
 console.log(teams);  */
 
 //------------------------------------------------------------//

   //  code test
// const arr1 = [1,2,34,5];
// const arr2 = arr1.slice();
// arr2.push(6);
// console.log(arr1);

// var arr1 = ['a','b','c','d'];
//  arr1.splice(2,'x','y');
//  console.log(arr1);

// const arr = Array.from("CodingNinja");
// console.log(arr);

 // Question/Answers from Coding Ninja
   //  TODO: finding the occurence and removing it from the array..

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// let ele = 56;
// function deleteOccur(arr,ele){
//    Implement Your function here
//     for(let i = arr.length; i>=0; i--){
//       if(arr[i] === ele){
//          arr.splice(i,1);
//       }
//     }
//     return arr;
// };
    // Question/Answers from Coding Ninja
      // TODO: Find duplicate and remove it ..

//     let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function findDuplicate(arr){
//  Implement your function here
//    return[...new Set(arr)];

    
// }    
// console.log(findDuplicate(arr));

// console.log(deleteOccur(arr,ele));
// --------------------------------------------------------------------//
      // 
   //? code for Loop Over Array //

// const Students = [
//    'Raj',
//    'Sheetal',
//    'Raman',
//    'Bobby',
//    'Seema',
//    'Alexa',
//    'Bunty'
// ]
         //!: FOR LOOP //
// for(let i=0; i<Students.length; i++){
//    console.log(`Roll No ${i+1}: ${Students[i]}`);
// }

      //  !:FOR IN LOOP //

// for(let i in Students){
//    console.log(`Roll No ${Number(i) + 1}:${Students[i]}`);
// }

      //!: FOR OF LOOP //

//  for(let student of Students){
//    console.log(student);
//  }  

// !: BREAK VS CONTINUE //

   // const inputs = [11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];
   
   // const evenNumber = [];

   // for(i of inputs){
   //    if(i % 2 !== 0){
   //       continue;
   //    }
   //    evenNumber.push(i);
   //    if(evenNumber.length === 5){
   //       break;
   //    }
   //    console.log(evenNumber);
   // }
   // console.log(evenNumber);

   // !: REST VS SPREAD OPERATOR IN ARRAY //

   // const aprilBatch = ['Tina','Madhur'];
   // const mayBatch = ['Ritik','Deepak','Shalini'];
   // const  juneBatch = ['Rahul', 'Shivani'];
   // const julyBatch = [];

   // *:  Normal way to add student in batch //
   // function addStudents(batch, student){
   //    batch.push(student);
   //    console.log(batch);
   // }
   // addStudents(aprilBatch,'Ritu');

   // !: REST OPERATOR (...) : TO use rest operator is represented by 3 dots (...).,
   //? multiple arguments को एक array में collect करता है,जिससे functions को ज़्यादा flexible बनाया जा सकता है। 
   //?: यह खासतौर पर तब काम आता है जब हमें अज्ञात (unknown)संख्या में arguments को handle करना हो ।

   // TODO: creating same function of above but in Rest operator ↓

   // function addStudents(batch, ...students){
   //    for(let i of students){
   //       batch.push(i);
   //    }
   //    console.log(batch);
   // }
//* Invocation:↓


// addStudents(aprilBatch, "Meera","Radha","Krishna");

//! SPREAD(...)

// let student= {
//    name : "Alexa",
//    class:"12"
// }
//    student.age = 21;
//    console.log(student);

//?: Sample code
// const num = [];
// const sum = num.reduce((acc,curVal)=> acc + curVal,5);

// console.log(sum); //?: Used the reduce() method.

