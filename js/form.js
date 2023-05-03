console.clear();

const newCardButton = document.querySelector("#newCardButton");
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
const questionCardHTML = htmlTransition.parseFromString(
  localStorage.questionCard,
  "text/xml"
);
questionCardHTML.innerHTML = questionCardTEXT;
console.log(questionCardHTML);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

newCardButton.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(localStorage);

  console.log(event);
  console.log(question.value);
  console.log(answer.value);
  console.log(tag.value);

  printQuestionCard();
  bookmarkToggle();
  buttonToggle();
  cleanValues();
});

function printQuestionCard() {
  const main = document.querySelector("main");
  // console.log(main);
  const questionCard = buildQuestionCard();
  main.append(questionCard);
}

function buildQuestionCard() {
  const questionCard = document.createElement("div");
  questionCard.className = "question-card";
  questionCard.innerHTML = `<div id="bookmark">
          <img src="assets/bookmark.png" class="bookmark" alt="bookmark">
        </div>
        <p id="question">
          ${question.value}
        </p>
        <button class="button-answer" type="button" aria-label="show answer">
          Show Answer
        </button>
        <div class="answer-box" hidden="">${answer.value}</div>
        <div id="tag-container">
          <span class="tag">${tag.value}</span>
        </div>`;

  // console.log(questionCard);
  return questionCard;
}

// ----->  bookmark - toggle  <-----

function bookmarkToggle() {
  const bookmark = document.querySelector(".bookmark");
  bookmark.addEventListener("click", (event) => {
    console.log(event.target.src);
    if (
      event.target.src ==
      "http://127.0.0.1:3000/projects/Thoralf-Quiz-App/assets/bookmark.png"
    ) {
      event.target.src = "./assets/bookmark_filled.png";
    } else {
      event.target.src = "./assets/bookmark.png";
    }
  });
}

// ----->   AnswerButton - Toggle   <-----

function buttonToggle() {
  const answerButton = document.querySelector(".button-answer");
  const answerBox = document.querySelector(".answer-box");
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
}

function cleanValues() {
  question.value = "";
  answer.value = "";
  tag.value = "";
}
