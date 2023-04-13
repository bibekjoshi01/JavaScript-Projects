const startTimerBtn = document.querySelector("#startTimer");
const pauseTimerBtn = document.querySelector("#pauseTimer");
const resetTimerBtn = document.querySelector("#resetTimer");
const timerAlertMessage = document.getElementById("timerAlertMessage");
const timerStopButton = document.getElementById("timerStopButton");
const timerModal = document.getElementById("timerModal");
const timerDisplay = document.querySelector(".timerDisplay");

const timerAudio = new Audio("assets/timer.mp3");

function startTimer(totalSeconds) {
  let timeleft = totalSeconds * 1000;

  intervalId = setInterval(function () {
    let hours = Math.floor(timeleft / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    let milliSeconds = Math.floor(timeleft % 1000);

    console.log(hours, minutes, seconds);

    const displayHours = hours < 10 ? `0${hours}` : `${hours}`;
    const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    // const displayMilliSeconds =
    // milliSeconds < 10
    //   ? `000${milliSeconds}`
    //   : milliSeconds < 100
    //   ? `00${milliSeconds}`
    //   : `${milliSeconds}`;

    timerDisplay.textContent = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;

    if (timeleft < 0) {
      clearInterval(intervalId);
      resetTimer();
      timerModal.style.display = "block";
      timerAlertMessage.textContent = "Time Off !";
      timerAudio.play();
    }
    timeleft -= 1000; // subtract 1 second from timeleft every second
  }, 1000);
}

function stopTimerAudio() {
  timerAudio.pause();
  timerModal.style.display = "none";
}

function pauseTimer() {
  clearInterval(intervalId);
  pauseTimerBtn.querySelector("i").classList.remove("fa-pause");
  pauseTimerBtn.querySelector("i").classList.add("fa-play");
  isTimerPaused = true;
}

function resumeTimer() {
  startTimer(remainingSeconds);
  pauseTimerBtn.querySelector("i").classList.remove("fa-play");
  pauseTimerBtn.querySelector("i").classList.add("fa-pause");
  isTimerPaused = false;
}

function resetTimer() {
  clearInterval(intervalId);
  timerDisplay.innerHTML = "00 : 00 : 00";
  isTimerPaused = false;
  startTimerBtn.classList.remove("hidden");
  pauseTimerBtn.classList.add("hidden");
  resetTimerBtn.classList.add("hidden");
}

startTimerBtn.addEventListener("click", function () {
  const hoursInput = document.getElementById("timer-hours");
  const minutesInput = document.getElementById("timer-minutes");
  const secondsInput = document.getElementById("timer-seconds");
  const hours = Number(hoursInput.value);
  const minutes = Number(minutesInput.value);
  const seconds = Number(secondsInput.value);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  startTimer(totalSeconds);

  startTimerBtn.classList.add("hidden");
  pauseTimerBtn.classList.remove("hidden");
  resetTimerBtn.classList.remove("hidden");

  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
});

pauseTimerBtn.addEventListener("click", function () {
  if (!isTimerPaused) {
    pauseTimer();
  } else {
    resumeTimer();
  }
});

resetTimerBtn.addEventListener("click", resetTimer);
timerStopButton.addEventListener("click", stopTimerAudio);
