/*const student = {

    fullName : "Rahul Kumar",
    age : 20,
    cgpa:8.2,
    isPass:true,
}
// TO Update a value in object //
student["age"] = student["age"] + 1;

student["fullName"] = "Rahul Sharma";

console.log(student.age);

console.log(student.fullName)*/
//-------------------------------------------------------------------//

// type of getting output //

/* console.log(student.age);
    //    OR    // 
console.log(student["cgpa"]); */

//-------------------------------------------------------------------//

// Arithmetic Operators//

/*let a = 5;
let b = 2;

console.log("a =",a,"& b =",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a/b);
console.log("a ** b =",a**b); //Exponential Operators*/

//-------------------------------------------------------------------//
// Unary Operators//

/*console.log("a++ = ",a++);// Post increment: first this will print the value the it will increase the value.
console.log("a++ =",a); // So to see the actual value of post increment we need to print again to see the actual value.
console.log("a-- =", a--);// Post decrement: first this will print the value the it will decrease the value.
console.log("a-- =",a);// So to see the actual value of post decrement we need to print again to see the actual value.
console.log("++a =",++a);// Pre increment:  first increase the value and then it will print the actual value.
console.log("--a =",--a);// Pre decrement: first decrease the value and then it will print the actual value.

//-------------------------------------------------------------------//
// Assigntment Operators(Arithmetic)//
console.log("a+=b =",a+=b);
console.log("a-=b =",a-=b);
console.log("a*=b =", a*=b);
console.log("a/=b =",a/=b);
console.log("a%=b =", a%=b);
console.log("a+=b =",a+=b);
console.log("a+=b =",a+=b);*/

// Assigntment Operators(Exponential) //
// console.log("a**=b =",a**=b);

//-------------------------------------------------------------------//
// alert(popUp) One time PopUp only // 
// Prompt(popUp & take User Input) One time PopUp only // 

// alert("Hello");
// let name = prompt("Hello");
// console.log(name);
// -------------------------------------------------------------------//
  // Grade According to student Number using if else Condition //

//   let score = prompt("Enter your score under 1-100 :");
//   let grade;

//   if(score>=80 && score<=100){
//     grade = "A"
//   }
//   else if(score>=60 && score<=79){
//     grade = "B"
//   }
//   else if(score>=50 && score<=59){
//     grede = "C"
//   }
//   else if(score>=35 && score<=49){
//     grade = "D"
//   }
//   else if(score>=0 && score<=34){
//     grade = "F"
//   }
// console.log("according to your score,your grade is:",grade);


// ------------------------------------------------------------------ //
        // For Loop //

/*for(let i = 1; i<=108; i++){
    console.log("");
}
*/
      // While loop //
  /*let i = 1;
  while(i<=100){
    console.log("hello =",i);
    i++;
  }*/

    // DO WHILE LOOP //

/*let i = 1;
do{
    console.log("Hello World");
    i++;
}while(i<=20);*/

   // FOR OF LOOP //

//  let str = "Chandra Gupt Gurung";
//  let size = 0;
//  for( let i of str){
//     console.log("i =",i);
//     size++;
//  }  
//  console.log("string size is:",size);

// let num = 567890;

// while(num!==0){
//   let digit = num % 10;
//   num = parseInt(num/10);
//   console.log(digit);
// }

// function multiply(a, b) {
//   return a*b;
// };

// console.log(multiply);
'use strict';
var x = 10;
(function(){
  console.log(x);
})();