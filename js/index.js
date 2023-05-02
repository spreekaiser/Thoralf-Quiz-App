console.clear();

// Variablen für index.html
const bookmark = document.querySelector(".bookmark");
const answerButton = document.querySelector(".button-answer");
const answerBox = document.querySelector(".answer-box");
// console.log(answerButton);

function changeBookmark() {}

bookmark.addEventListener("click", (event) => {
  //   console.log(event.target.src);
  if (
    event.target.src ==
    "http://127.0.0.1:3000/projects/Thoralf-Quiz-App/assets/bookmark.png"
  ) {
    event.target.src = "./assets/bookmark_filled.png";
  } else {
    event.target.src = "./assets/bookmark.png";
  }
});

answerButton.addEventListener("click", () => {
  // answerBox.classList.toggle("answer-box-none");
  answerBox.toggleAttribute("hidden");

  if (answerButton.innerText == "Show Answer") {
    answerButton.innerText = "Hide Answer";
  } else {
    answerButton.innerText = "Show Answer";
  }
  //   console.log(answerBox);
  //   console.log(answerButton.innerText);
});

// -----------------------------------------------------------
// questionCard zu form.js transportieren
const questionCard = document.querySelector(".question-card");
console.log(questionCard.outerHTML);
localStorage.questionCard = questionCard.outerHTML;
// -----------------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// objects and variables for form.html are not working
const submitButton = document.querySelector("#newCardButton");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const tag = document.querySelector("#tag");
const characters1 = document.querySelector("#characters1");
const characters2 = document.querySelector("#characters2");

characters1.innerText = 150 - question.value.length + " characters left";
characters2.innerText = 150 - answer.value.length + " characters left";

question.addEventListener("input", (event) => {
  console.log(150 - event.target.value.length);
  characters1.innerText = 150 - event.target.value.length + " characters left";
});

answer.addEventListener("input", (event) => {
  characters2.innerText = 150 - event.target.value.length + " characters left";
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(localStorage);

  console.log(event);
  console.log(question.value);
  console.log(answer.value);
  console.log(tag.value);
});
