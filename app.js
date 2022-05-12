const counter = document.querySelector("h1#counter");

const interval = function () {
  let val = counter.innerHTML;
  val++;
  counter.innerHTML = val;
};

let intervalId = null;

function start() {
  if (intervalId) return window.alert("Timer is already running");
  intervalId = setInterval(interval, 1000);
}

function stop() {
  if (!intervalId) return window.alert("NO timer to stop");
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  if (intervalId) {
    stop();
  }
  counter.innerHTML = 0;
}

console.log(new Date().toLocaleTimeString())