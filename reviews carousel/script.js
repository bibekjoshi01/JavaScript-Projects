// import reviews from "./objects.js";

const reviews = [
  {
    id: 1,
    name: "Bibek Joshi",
    job: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Jane Doe",
    job: "UX Designer",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    text: "Wonderful place to stay. I don’t normally stay in hostels but this was perfect – the beds are comfortable, and the rooms are quiet despite the fact that if you want to, you can spend time outside with other travelers and the staff",
  },
  {
    id: 3,
    name: "John Doe",
    job: "Web Developer",
    image:
      "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
    text: "“I stayed at [Hotel Name] for three nights in November 2019. What an amazing hotel. I was greeted with such kindness and this continued throughout my stay. I booked the king room and my room was situated on the 14th floor. ",
  },
  {
    id: 4,
    name: "Syman Dyan",
    job: "Python Developer",
    image:
      "https://t3.ftcdn.net/jpg/01/00/64/80/360_F_100648089_wC27pjGpTspFIRTvvIT8L63oqcOyeihQ.webp",
    text: "Positive reviews examples: copy and paste ideas that businesses can use to collect positive reviews and improve customer satisfaction.",
  },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
