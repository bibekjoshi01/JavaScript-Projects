// stopwatch

let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;
let interval;
let isPaused = false;
const timestamps = [];

const display = document.querySelector(".stopWatchDisplay");
const startBtn = document.querySelector("#startStopWatch");
const pauseBtn = document.querySelector("#pauseStopWatch");
const resetBtn = document.querySelector("#resetStopWatch");
const list = document.querySelector(".timeStamps ul");
const flagTimeBtn = document.querySelector("#flagTime");

function updateList() {
  list.innerHTML = "";
  timestamps.forEach(function (timeStamp) {
    const li = document.createElement("li");
    li.textContent = timeStamp;
    list.appendChild(li);
  });
}

function stopwatch() {
  ms += 10;
  if (ms === 1000) {
    ms = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }
  display.innerHTML = `${hr < 10 ? "0" + hr : hr}: ${
    min < 10 ? "0" + min : min
  }: ${sec < 10 ? "0" + sec : sec}: ${
    ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms
  }`;
}

function startStopWatch() {
  startBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
  flagTimeBtn.classList.remove("hidden");
  interval = setInterval(stopwatch, 10);
}

function pauseStopWatch() {
  if (!isPaused) {
    clearInterval(interval);
    pauseBtn.querySelector("i").classList.remove("fa-pause");
    pauseBtn.querySelector("i").classList.add("fa-play");
    flagTimeBtn.classList.add("disabled");
    flagTimeBtn.setAttribute("disabled", true);
    isPaused = true;
  } else {
    startStopWatch();
    pauseBtn.querySelector("i").classList.remove("fa-play");
    pauseBtn.querySelector("i").classList.add("fa-pause");
    flagTimeBtn.classList.remove("disabled");
    flagTimeBtn.removeAttribute("disabled");
    isPaused = false;
  }
}

function flagCurrentTime() {
  timestamps.push(display.innerHTML);
  updateList();
}

function resetStopWatch() {
  clearInterval(interval);
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;
  display.innerHTML = "00 : 00 : 00 : 000";
  startBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
  flagTimeBtn.classList.add("hidden");
  isPaused = false;
  list.textContent = "";
}

startBtn.addEventListener("click", startStopWatch);
pauseBtn.addEventListener("click", pauseStopWatch);
resetBtn.addEventListener("click", resetStopWatch);
flagTimeBtn.addEventListener("click", flagCurrentTime);
