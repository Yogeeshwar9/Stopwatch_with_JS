// JavaScript code for the timer functionality
const setTimerButton = document.getElementById('setTimerButton');
const mainDays = document.getElementById('days');
const mainHours = document.getElementById('hours');
const mainMinutes = document.getElementById('mins');
const mainSeconds = document.getElementById('secs');
const startResumeButton = document.getElementById('startResumeButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let timerInterval;
let remainingTime = 0;

function convertToSeconds(days, hours, minutes, seconds) {
  return ((days * 24 + hours) * 60 + minutes) * 60 + seconds;
}

function updateMainBox() {
  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  mainDays.innerHTML = `${days.toString().padStart(2, '0')}<br>Days`;
  mainHours.innerHTML = `${hours.toString().padStart(2, '0')}<br>Hours`;
  mainMinutes.innerHTML = `${minutes.toString().padStart(2, '0')}<br>Minutes`;
  mainSeconds.innerHTML = `${seconds.toString().padStart(2, '0')}<br>Seconds`;
}

setTimerButton.addEventListener('click', function() {
  const daysInput = document.getElementById('daysInput');
  const hoursInput = document.getElementById('hoursInput');
  const minutesInput = document.getElementById('minutesInput');
  const secondsInput = document.getElementById('secondsInput');

  const days = parseInt(daysInput.value) || 0;
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  remainingTime = convertToSeconds(days, hours, minutes, seconds);
  updateMainBox();
});

startResumeButton.addEventListener('click', function() {
  if (!timerInterval && remainingTime > 0) {
    timerInterval = setInterval(function() {
      remainingTime--;
      updateMainBox();

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }, 1000);
  }
});

pauseButton.addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetButton.addEventListener('click', function() {
  clearInterval(timerInterval);
  remainingTime = 0;
  updateMainBox();
  const daysInput = document.getElementById('daysInput');
  const hoursInput = document.getElementById('hoursInput');
  const minutesInput = document.getElementById('minutesInput');
  const secondsInput = document.getElementById('secondsInput');
  daysInput.value=0;
  hoursInput.value=0;
  minutesInput.value=0;
  secondsInput.value=0;
});
