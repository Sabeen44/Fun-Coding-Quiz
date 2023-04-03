var quiz = [
  {
    question: "How do you write 'Hello World' in an alert function?",
    answers: [
      { pick: "msg('Hello World')" },
      { pick: "alert('Hello World')" },
      { pick: "prompt('Hello World" },
      { pick: "alertBox('Hello World')" },
    ],
    correct: "alert('Hello World')",
  },
];

var questionContainer = document.getElementById("question-container");

var question = document.getElementById("question");
//var button = document.querySelector("#a");
var answerBtns = document.getElementById("answer-buttons");

var button = document.querySelectorAll(".btn");

var startButton = document.getElementById("start-btn");

var startContainer = document.getElementById("start-container");

var startButton;

question.textContent = quiz[0].question;

var indx = 0;
function questionBlock() {
  for (var i = 0; i < button.length; i++) {
    button[i].textContent = quiz[0].answers[indx].pick;
    indx++;
  }
}
questionBlock();

startButton.addEventListener("click", function () {
  questionContainer.style.display = "block";
  startContainer.style.display = "none";
});
