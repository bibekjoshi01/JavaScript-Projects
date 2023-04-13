const form = document.querySelector(".lorem-form");
const generateBtn = document.querySelector(".generateBtn");
const inputAmount = document.querySelector("#amount");
const randomText = document.querySelector(".randomText");

let randomGeneratedText;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = Number(amount.value);

  if (isNaN(value) || value < 0 || value > 10) {
    randomText.innerHTML = `<p>Invalid Input !</p>`;
  } else {
    randomGeneratedText = generateRandomText(value);
    randomText.classList.remove("hidden");
    randomText.innerHTML = `${randomGeneratedText}`;
  }
});

function generateRandomText(paragraphs) {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];

  let text = "";
  for (let i = 0; i < paragraphs; i++) {
    let paragraph = "";
    const numSentences = Math.floor(Math.random() * 4) + 2;
    for (let j = 0; j < numSentences; j++) {
      let sentence = "";
      const numWords = Math.floor(Math.random() * 10) + 5;
      for (let k = 0; k < numWords; k++) {
        const wordIndex = Math.floor(Math.random() * words.length);
        const word = words[wordIndex];
        sentence += word + " ";
      }
      sentence =
        sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + ". ";
      paragraph += sentence;
    }
    text += "<p>" + `${i + 1}) ` + paragraph.trim() + "</p>";
  }
  return text;
}
