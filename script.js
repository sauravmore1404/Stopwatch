let sec;
let min;
let hrs;
let interval;
let cap;
resetTimer();
function starTimer() {
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
  interval = setInterval(function () {
    if (sec < 59) {
      sec = sec + 1;
    } else if (min < 59) {
      min = min + 1;
      sec = 0;
    } else {
      hrs = hrs + 1;
      min = 0;
      sec = 0;
    }
    if (sec < 10) {
      document.getElementById("secContainer").innerHTML = "0" + sec;
    } else {
      document.getElementById("secContainer").innerHTML = sec;
    }
    if (min < 10) {
      document.getElementById("minContainer").innerHTML =
        "0" + min + " : ";
    } else {
      document.getElementById("minContainer").innerHTML = min + " : ";
    }
    if (hrs < 10) {
      document.getElementById("hrsContainer").innerHTML =
        "0" + hrs + " : ";
    } else {
      document.getElementById("hrsContainer").innerHTML = hrs + " : ";
    }
  }, 1000);
}

function stopTimer() {
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hrs = 0;
  document.getElementById("hrsContainer").innerHTML = "0" + hrs + " : ";
  document.getElementById("minContainer").innerHTML = "0" + min + " : ";
  document.getElementById("secContainer").innerHTML = "0" + sec;
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}
function clearappend() {
  document.getElementById("captureContainer").innerHTML = "";
}
function doublefunction() {
  resetTimer();
  clearappend();
}
function capture() {
  let cap = document.createElement("p");
  let tempHrs = hrs < 10 ? "0" + hrs + " : " : hrs + " : ";
  let tempMin = min < 10 ? "0" + min + " : " : min + " : ";
  let tempSec = sec < 10 ? "0" + sec : sec;
  cap.innerHTML = "" + tempHrs + tempMin + tempSec;
  document.getElementById("captureContainer").appendChild(cap);
}