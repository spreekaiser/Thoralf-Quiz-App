console.clear();

const submitButton = document.querySelector("#newCardButton");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const tag = document.querySelector("#tag");
const characters1 = document.querySelector("#characters1");
const characters2 = document.querySelector("#characters2");

console.log(question.value.length);
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

  console.log(event);
  console.log(question.value);
  console.log(answer.value);
  console.log(tag.value);
  console.log(150 - question.value.length);
});
