const textElement = document.querySelector('#text');

let seconds = 60;
textElement.textContent = `${seconds}`;

const timer = setInterval(()=>{
seconds --;
textElement.textContent = `${seconds}`;

if(seconds<=0){
    clearInterval(timer);
}
},1000);