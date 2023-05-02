console.clear();

const bookmark = document.querySelector(".bookmark");
const answerButton = document.querySelector(".button-answer");
const answerBox = document.querySelector(".answer-box");
console.log(answerButton);

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
