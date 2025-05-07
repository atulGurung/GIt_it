// const buttonElement = document.querySelector('.button');
// const textElement = document.querySelector('#text')

// buttonElement.addEventListener('click', () => {
//     textElement.textContent = 'Button is pressed!';

//     setTimeout(() => {
//         textElement.textContent = 'Click it again!';
//     });

// });

console.log("start");
setTimeout(() =>console.log("timeOut"),0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');