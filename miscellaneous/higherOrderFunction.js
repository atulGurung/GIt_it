// const inputs = [1,2,3,4,5,6,7,8,12,4,16];

// function square(input){
// const squared = [];
// for(let num of input){
//     squared.push(num*num);
// }
// return squared;
// }
// function cubic(input){
//     const cube = [];
//     for(let num of input){
//         cube.push(num * num * num);
//     }
//     return cube;
// }
// console.log(square(inputs));
// console.log(cubic(inputs));

// * OR else we can do the same thing in other way... //

// function operation(input, fn){
//     const output = [];
//     for(let num of input){
//         output.push(fn(num));
//     }
//     return output;
// }
// function square(number){
//     return number * number;
// }
// function cube(number){
//     return number * number * number;
// }
// console.log(operation(inputs, square));
// console.log(operation(inputs, cube));

//* reduce() function in js //

// const input = [2,3,4,5,6];

// const sum = input.reduce((total, num)=>{ //?: total is an accumalator and num is CurrentValue
//    return total + num;                  //?: Here we return the parameter which will do there sum
// },0)                                   //*: 0 is the initialValue it shows from where the array will be started.

// console.log(sum);

//?: Used the filtered() method.//

// function canVote(age){
//    return age >= 18;
// }
// let filtered = [24,33,16,40].filter(canVote);
// console.log(filtered);


// const input = [6,4,3,2,1,0,-1,-2,-3,-4];

// const positives = input.filter(noNegative);

// function noNegative(num){
//    return num > 0;
// }
// console.log(`the original array is:${input}`);
// console.log(`the positive numbers of an array is: ${positives}`)

// const number = [1,2,3,4,5,2,4,2];

// const filtered = number.filter((element,index,array)=>{
//     return array.indexOf(element) === index;
// });
// console.log(filtered);

function print(){
    console.log(this)
}
print();