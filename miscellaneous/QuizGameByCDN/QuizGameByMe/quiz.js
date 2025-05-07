const quesJson = [
    {
        correctAnswer: 'Three',
        options: ['Two', 'Three', 'Four', 'Five'],
        question: "How many pieces of buns are in a McDonald Big Mac?",
    },
    {
        correctAnswer: 'Mozzarella',
        options: ['Cheddar', 'Mozzarella', 'Parmesan', 'Gouda'],
        question: "Which cheese is traditionally used on a Margherita pizza?",
    },
    {
        correctAnswer: 'Water',
        options: ['Milk', 'Oil', 'Water', 'Yogurt'],
        question: "What is the main ingredient in ice cubes?",
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
    }    
];

const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const progress = document.getElementById('progress');

let score = 0;
let currentIndex = 0;
let countdown;
let timeleft = 30;

function loadquestion(index) {
    const currentQ = quesJson[index];
    questionEl.textContent = currentQ.question;
    optionEl.innerHTML = '';

    const shuffledoption = shuffle(currentQ.options);

    shuffledoption.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = `${i + 1}. ${opt}`;
        optionEl.appendChild(btn);

        btn.addEventListener('click', () => handleAnswer(opt));
    });

    progress.textContent = `Question ${currentIndex + 1} of ${quesJson.length}`;
    startTimer();
}

function handleAnswer(selectedOption) {
    const currentQ = quesJson[currentIndex];

    if (selectedOption === currentQ.correctAnswer) {
        score++;
    } else {
        score -= 0.25;
    }

    scoreEl.textContent = `Score: ${score}`;
    clearInterval(countdown);
    currentIndex++;

    if (currentIndex < quesJson.length) {
        loadquestion(currentIndex);
    } else {
        questionEl.textContent = `Quiz Completed!`;
        optionEl.innerHTML = '';
        timerEl.textContent = '';
        progress.textContent = '';
    }
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startTimer() {
    clearInterval(countdown);
    timeleft = 30;
    timerEl.textContent = `Time left: ${timeleft} seconds`;

    countdown = setInterval(() => {
        timeleft--;
        timerEl.textContent = `Time left: ${timeleft} seconds`;

        if (timeleft <= 0) {
            clearInterval(countdown);
            timerEl.textContent = "Time's up!";
            currentIndex++;

            if (currentIndex < quesJson.length) {
                loadquestion(currentIndex);
            } else {
                questionEl.textContent = `Quiz Completed!`;
                optionEl.innerHTML = '';
                progress.textContent = '';
            }
        }
    }, 1000);
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (['1', '2', '3', '4'].includes(key)) {
        const index = parseInt(key) - 1;
        const buttons = optionEl.querySelectorAll('button');
        if (buttons[index]) {
            buttons[index].click();
        }
    }
});

loadquestion(currentIndex);
