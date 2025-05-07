const queJson = [
    {
        correctAnswer:"Two",
        options:["Three","Two","Four","Five"],
        question:"How many pieces of bun are in a McDonald Big Mac?",
    },
    {
        correctAnswer:"Mozzarella",
        options:["Mozzarella","Parmesan","Cheddar","Gouda"],
        question:"Which Cheese is traditionally used on a Margherita pizza?"
    },
    {
        correctAnswer:"Water",
        options:["Water","Milk","Oil","Yogurt"],
        question:"What is the main ingredient in ice cubes?"
    },
    {
        correctAnswer: 'Coca-Cola',
        options: ['Pepsi', 'Fanta', 'Coca-Cola', 'Sprite'],
        question: "Which soft drink was originally created as a medicinal tonic?",
    },
    {
        correctAnswer: 'Japan',
        options: ['China', 'Thailand', 'Korea', 'Japan'],
        question: "Where did sushi originate?",
    },
    {
        correctAnswer: 'Potato',
        options: ['Carrot', 'Potato', 'Turnip', 'Cabbage'],
        question: "What vegetable is used to make traditional French fries?",
    },
    {
        correctAnswer: 'India',
        options: ['Mexico', 'India', 'Morocco', 'Turkey'],
        question: "Where did the dish 'biryani' originate?",
    },
    {
        correctAnswer: 'Bees',
        options: ['Butterflies', 'Wasps', 'Bees', 'Flies'],
        question: "Which insect is primarily responsible for producing honey?",
    },
    {
        correctAnswer: 'Caffeine',
        options: ['Vitamin C', 'Caffeine', 'Calcium', 'Glucose'],
        question: "Which stimulant is found in coffee?",
    },
    {
        correctAnswer: 'Eggs',
        options: ['Milk', 'Eggs', 'Flour', 'Yeast'],
        question: "Which of the following is commonly used to make an omelette?",
    },    
 ];
  
    let score = 0;
     let currentQ = 0;

    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const scoreEl = document.getElementById('score');
    const progress = document.getElementById('progress');

    ShowQuestion();
    
   function ShowQuestion(){ 
        const{correctAnswer,question,options} = queJson[currentQ];
        questionEl.textContent = question;
        optionsEl.innerHTML='';

         //* ♠ Manipulating the DOM ♠
         const shuffledOption = shuffle([...options]);

        shuffledOption.forEach((opt) =>{
        //!: ♥ Creating button and appending it to the option div ♥
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionsEl.appendChild(btn);

        //?: ♦ Event handling on the button ♦ 
        btn.addEventListener('click', ()=>{
            if(opt === correctAnswer){
                score++;               
            }else{
                score = score - 0.25;
            }
           

            scoreEl.textContent = `Your score is: ${score}`; 
            currentQ++;

            if(currentQ<queJson.length){
                ShowQuestion();
            }else{
                scoreEl.textContent = `Your score:${score}`;                
                questionEl.textContent = `Quize Completed`;
                optionsEl.textContent = "";
            }
           
           
        });
    });
    progress.textContent = `Questions :${currentQ + 1} of ${queJson.length}`;
}   
   
function shuffle(options){
    for(let i = options.length - 1; i>=0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [options[i],options[j]] = [options[j],options[i]];
    }
    return options;
}