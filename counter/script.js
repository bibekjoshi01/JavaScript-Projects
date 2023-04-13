// set initial count state
let count = 0;

const value = document.querySelector("#value");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");

decreaseBtn.addEventListener("click", () => {
  count--;
  value.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});

increaseBtn.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

