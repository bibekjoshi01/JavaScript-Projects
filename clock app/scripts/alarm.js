// alarm

const setAlarmBtn = document.querySelector("#setAlarm");
const alarmTime = document.querySelector("#alarmTime");
const modal = document.getElementById("modal");
const message = document.getElementById("alertMessage");
const stopButton = document.getElementById("stopButton");
const alarms = document.querySelector(".alarms");
const audio = new Audio("assets/ringtone.mp3");
let timeoutId;

function stopAlarm() {
  clearTimeout(timeoutId);
  audio.pause();
  modal.style.display = "none";
  alarms.querySelector("h1").textContent = "";
  alarms.querySelector("span").textContent = "";
}

function showAlertWithStopButton(messageText) {
  message.textContent = messageText;
  modal.style.display = "block";
  stopButton.addEventListener("click", stopAlarm);
}

setAlarmBtn.addEventListener("click", function () {
  const currentTime = new Date();
  const alarmTimeString = alarmTime.value;
  alarmTime.value = "";
  const alarmTimeDate = new Date(alarmTimeString);

  const timeDiff = alarmTimeDate.getTime() - currentTime.getTime();

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (timeDiff > 0) {
    timeoutId = setTimeout(() => {
      audio.play();
      showAlertWithStopButton("Wake up!");
    }, timeDiff);

    const daysLabel = days === 1 ? "day" : "days";
    const hoursLabel = hours === 1 ? "hour" : "hours";
    const minutesLabel = minutes === 1 ? "minute" : "minutes";
    const secondsLabel = seconds === 1 ? "second" : "seconds";

    const ringingTime = `${days > 0 ? `${days} ${daysLabel} ` : ""} ${
      hours % 24 > 0 ? `${hours % 24} ${hoursLabel} ` : ""
    }${minutes % 60 > 0 ? `${minutes % 60} ${minutesLabel} ` : ""}${
      seconds % 60 > 0 ? `${seconds % 60} ${secondsLabel}` : ""
    }`;

    alarms.querySelector("h1").textContent = `Alarm will ring after:`;
    alarms.querySelector("span").textContent = `${ringingTime}`;
  } else {
    alarms.querySelector("h1").textContent = "Invalid alarm time!";
    alarms.querySelector("span").textContent = "";
  }
});
