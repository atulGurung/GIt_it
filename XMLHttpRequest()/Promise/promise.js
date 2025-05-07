// const request = new Promise((resolve, reject) => {
//  setTimeout(()=>{
//     // console.log("Promise initiated");
//     resolve("Promise fulfilled");
//     // reject("Promise has been rejected");

//  },2000);
// })

// request.then((value) =>{
//     console.log(value);
// }).catch((_err)=> console.log(_err)).finally(() => console.log("request completed"));
// console.log(request);

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 200, "One");
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, "Two");
})

Promise.race([promise1, promise2]).then((value)=>{
    console.log(value);
})