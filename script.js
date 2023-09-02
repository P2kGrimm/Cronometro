let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('time');

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
        
        startButton.classList.add('active');
        stopButton.classList.remove('active');
    }
});

stopButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        
        stopButton.classList.add('active');
        startButton.classList.remove('active');
    }
});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();

    startButton.classList.remove('active');
    stopButton.classList.remove('active');
});

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timeDisplay.textContent = `${h}:${m}:${s}`;
}
