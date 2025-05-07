const emojiDetails = [
    {
        description: 'Smiling face with sunglasses', emoji: '😎'
    },
    {
        description: 'thumbs up', emoji: '👍'
    },
    {
        description: 'Heart eyes', emoji: '😍'
    },
    {
        description: 'Crying face', emoji: '😢'
    },
    {
        description: 'party popper', emoji: '🎉'
    },
    {
        description: 'party popper', emoji: '🎉'
    },
    {
        description: 'Fire', emoji: '🔥'
    },
    {
        description: 'Thinking face', emoji: '🤔'
    },
    {
        description: 'Rolling on the floor laughing', emoji: '🤣'
    },
    {
        description: 'Face with tears of joy', emoji: '😂'
    },
    {
        description: 'Sleeping face', emoji: '😴'
    },
    {
        description: 'Clapping hands', emoji: '👏'
    },
    {
        description: 'Rocket', emoji: '🚀'
    },
    {
        description: 'Hundred points', emoji: '💯'
    },
    {
        description: 'Face screaming in fear', emoji: '😱'
    },
    {
        description: 'Nerd face', emoji: '🤓'
    },
    {
        description: 'Money mouth face', emoji: '🤑'
    },
    {
        description: 'Angry face', emoji: '😠'
    },
    {
        description: 'Explosion', emoji: '💥'
    },
    {
        description: 'Star-struck', emoji: '🤩'
    },
    {
        description: 'Face blowing a kiss', emoji: '😘'
    },

];
let currentEmojiIndex = 0;
let score = 0;


const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const descriptionElement = document.getElementById('description');
const timerElement = document.getElementById('timer');
const timerDuration = 10; // seconds
let timeLeft = timerDuration;
let timerInterval;
guessInput.focus();

function displayEmoji() {
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    if (guess === '') {
        resultElement.textContent = 'Please enter a guess';
        return;
    }
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
        resultElement.textContent = '✔️ Correct!';
        score++;
    } else {
        resultElement.textContent = '❌ Wrong!';
        score = score - 0.25;
    }
    scoreElement.textContent = `Score ${score}`;
    guessInput.value = '';
    nextEmoji();
}
function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(() => { resultElement.textContent = '' }, 600);

    if (currentEmojiIndex === emojiDetails.length) {
        gameOver();
        // return;
    }
    displayEmoji();
}
document.getElementById('guess-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    displayEmoji();
    startTimer();

});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(timerInterval);
    guessInput.disabled = true;
    descriptionElement.textContent='🎮 Game Over!';
    currentEmojiIndex.textContent = '';
}