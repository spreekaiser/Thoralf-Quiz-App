console.clear();

const submitButton = document.querySelector("#newCardButton");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const tag = document.querySelector("#tag");
const characters1 = document.querySelector("#characters1");
const characters2 = document.querySelector("#characters2");

characters1.innerText = 150 - question.value.length + " characters left";
characters2.innerText = 150 - answer.value.length + " characters left";

question.addEventListener("input", (event) => {
  // console.log(150 - event.target.value.length);
  characters1.innerText = 150 - event.target.value.length + " characters left";
});

answer.addEventListener("input", (event) => {
  characters2.innerText = 150 - event.target.value.length + " characters left";
});

// -----------------------------------------
// getting div-question-card from index.html
// XHR-Request
// -----------------------------------------
// var request = new XMLHttpRequest();
// request.addEventListener(
//   "load",
//   (event) => {
//     console.log(event);
//     const questionCard = document.querySelector(event.originalTarget.response);
//     console.log(questionCard);
//   },
//   false
// );
// request.open("GET", "index.html", true), request.send();
// --------------------------------------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// object transport with localStorage
const questionCardTEXT = localStorage;
// console.log(questionCardTEXT);
// console.log(localStorage);

const htmlTransition = new DOMParser();
questionCardHTML = htmlTransition.parseFromString(
  localStorage.questionCard,
  "text/xml"
);
console.log(questionCardHTML);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(localStorage);

  console.log(event);
  console.log(question.value);
  console.log(answer.value);
  console.log(tag.value);

  printQuestionCard();
});

function printQuestionCard() {
  const cardSection = document.querySelector(".cardCreation");
  console.log(cardSection);
  cardSection.appendChild(questionCardHTML);
}
