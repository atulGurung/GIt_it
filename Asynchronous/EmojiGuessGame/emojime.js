const emojiDetails = [
    { description: 'Smiling face with sunglasses', emoji: '😎' },
    { description: 'thumbs up', emoji: '👍' },
    { description: 'Heart eyes', emoji: '😍' },
    { description: 'Crying face', emoji: '😢' },
    { description: 'party popper', emoji: '🎉' },
    { description: 'Fire', emoji: '🔥' },
    { description: 'Thinking face', emoji: '🤔' },
    { description: 'Rolling on the floor laughing', emoji: '🤣' },
    { description: 'Face with tears of joy', emoji: '😂' },
    { description: 'Sleeping face', emoji: '😴' },
    { description: 'Clapping hands', emoji: '👏' },
    { description: 'Rocket', emoji: '🚀' },
    { description: 'Hundred points', emoji: '💯' },
    { description: 'Face screaming in fear', emoji: '😱' },
    { description: 'Nerd face', emoji: '🤓' },
    { description: 'Money mouth face', emoji: '🤑' },
    { description: 'Angry face', emoji: '😠' },
    { description: 'Explosion', emoji: '💥' },
    { description: 'Star-struck', emoji: '🤩' },
    { description: 'Face blowing a kiss', emoji: '😘' },
];

let currentEmojiIndex = 0;
let score = 0;
const timerDuration = 20;
let timeLeft = timerDuration;
let timerInterval;

const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const descriptionElement = document.getElementById('description');
const timerBar = document.getElementById('timer-bar');
const timerText = document.getElementById('timer-text');

guessInput.focus();

function displayEmoji() {
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timeLeft = timerDuration;
    updateTimerUI();
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    if (guess === '') {
        resultElement.textContent = 'Please enter any guess';
        return;
    }

    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
        resultElement.textContent = '✅ Correct!';
        score++;
        resetTimer();
    } else {
        resultElement.textContent = '❌ Wrong!';
        score -= 0.25;
    }

    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';
    nextEmoji();
}

function nextEmoji() {
    currentEmojiIndex++;
    if (currentEmojiIndex >= emojiDetails.length) {
        gameOver();
    } else {
        displayEmoji();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            resultElement.textContent = "⏰ Time's up!";
            nextEmoji();
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.textContent = `Time Left: ${timeLeft}s`;
    timerBar.style.width = `${(timeLeft / timerDuration) * 100}%`;

    if (timeLeft <= 3) {
        timerBar.style.backgroundColor = '#e63946'; // red when low
    } else {
        timerBar.style.backgroundColor = '#4caf50'; // green normal
    }
}

function resetTimer() {
    timeLeft = timerDuration;
    updateTimerUI();
}

function gameOver() {
    clearInterval(timerInterval);
    descriptionElement.textContent = "🎮 Game Over!";
    guessInput.disabled = true;
    timerBar.style.width = '0%';
    timerText.textContent = '';
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
