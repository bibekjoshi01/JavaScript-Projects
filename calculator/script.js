const numbers = document.querySelectorAll(".number");
const calculate = document.getElementById("#calculate");
const display = document.getElementById("display");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const numberValue = number.textContent;
    console.log(numberValue);
    display.textContent = numberValue;
  });
});

