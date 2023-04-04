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

var checkCorrect = document.getElementById("check-correct");
var checkWrong = document.getElementById("check-wrong");
var nextButton = document.getElementById("next-btn");
var timer = document.getElementById("timer");

question.textContent = quiz[0].question;

var indx = 0;
function questionBlock() {
  for (var i = 0; i < button.length; i++) {
    button[i].textContent = quiz[0].answers[indx].pick;
    indx++;
    if (button[i].textContent === quiz[0].answers.correct) {
      button[i] === quiz[0].answers.correct;
    }
  }
}
questionBlock();

startButton.addEventListener("click", function () {
  questionContainer.style.display = "block";
  startContainer.style.display = "none";
  timeRemaining();
});

button.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.textContent === "alert('Hello World')") {
      //Work on this later
      checkCorrect.style.display = "block";
    } else {
      checkWrong.style.display = "block";
    }
    nextButton.style.display = "block";
  });
});

//nextButton.addEventListener("click",function next question)

function timeRemaining() {
  var timeleft = 60;

  var timeInterval = setInterval(function () {
    timer.textContent = timeleft + " seconds remaining";
    timeleft--;

    if (timeleft === -1) {
      clearInterval(timeInterval);
      timer.textContent = "Time's up! Click 'Start Quiz' to try again ";
    }
  }, 1000);
}
