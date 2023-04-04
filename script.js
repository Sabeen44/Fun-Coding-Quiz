var quiz = [
  {
    question: "How do you write 'Hello World' in an alert function?",
    answers: [
      "msg('Hello World')",
      "alert('Hello World')",
      "prompt('Hello World",
      "alertBox('Hello World')",
      // { pick: "msg('Hello World')" },
      // { pick: "alert('Hello World')" },
      // { pick: "prompt('Hello World" },
      // { pick: "alertBox('Hello World')" },
    ],
    correct: "alert('Hello World')",
  },

  {
    question: "Which of the following is not commonly used data types?",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts",
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
//var highScore = document.getElementById("high-scores");
var yourScore = document.querySelector(".score");

var resultsContainer = document.getElementById("results-container");

var restartButton = document.getElementById("restart-btn");

var qIndex = 0;

function questionBlock() {
  question.textContent = quiz[qIndex].question;
  var indx = 0;
  for (var i = 0; i < button.length; i++) {
    button[i].disabled = false;
    button[i].textContent = quiz[qIndex].answers[indx];
    indx++;
    // if (button[i].textContent === quiz[qIndex].answers.correct) {
    //   button[i] === quiz[qIndex].answers.correct;
    // }
  }
}
questionBlock();

nextButton.addEventListener("click", function () {
  qIndex++;
  questionBlock();
});

startButton.addEventListener("click", function () {
  questionContainer.style.display = "block";
  startContainer.style.display = "none";
  timeRemaining();
});

score = 0;
var timeleft = 30;
button.forEach((xbutton) => {
  xbutton.addEventListener("click", (event) => {
    var correctAnswer = quiz[qIndex].correct;
    if (event.target.textContent === correctAnswer) {
      //Work on this later
      checkCorrect.style.display = "block";
      checkWrong.style.display = "none";
      score++;
      console.log(score);
    } else {
      checkCorrect.style.display = "none";
      checkWrong.style.display = "block";
      timeleft -= 10;
    }

    //button.disabled = true;
    button.forEach((zbutton) => {
      zbutton.disabled = true;
    });
    //button.removeEventListener("click",function(event))

    if (qIndex === quiz.length - 1) {
      EndQuiz();
      return;
    }
    nextButton.style.display = "block";
  });
});

function EndQuiz() {
  //questionContainer.style.display = "none";
  nextButton.style.display = "none";
  resultsContainer.style.display = "block";
  yourScore.textContent = "Your Score: " + score;
}
function timeRemaining() {
  var timeInterval = setInterval(function () {
    timer.textContent = timeleft + " seconds remaining";
    timeleft--;

    if (timeleft < 0) {
      clearInterval(timeInterval);
      timer.textContent = "Time's up! Click 'Restart' to try again ";
      EndQuiz();
    }
  }, 1000);
}

restartButton.addEventListener("click", function () {
  var qIndex = 0;
  questionContainer.style.display = "block";
});
