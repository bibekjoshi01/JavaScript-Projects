const buttons = document.querySelectorAll(".question-btn");
const answers = document.querySelectorAll(".answer");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentNode.nextElementSibling;
    answer.classList.toggle("show-answer");
    const i = button.querySelector("i");
    i.classList.toggle("fa-chevron-circle-up");
    i.classList.toggle("fa-chevron-circle-down");

    // hide other answers
    answers.forEach((otherAnswer) => {
      if (otherAnswer !== answer) {
        otherAnswer.classList.remove("show-answer");
        const otherIcon = otherAnswer.previousElementSibling.querySelector("i");
        otherIcon.classList.remove("fa-chevron-circle-up");
        otherIcon.classList.add("fa-chevron-circle-down");
      }
    });
  });
});


