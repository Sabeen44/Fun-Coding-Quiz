var quiz = [
  {
    question: "How do you write 'Hello World' in an alert function?",
    answers: [
      "msg('Hello World')",
      "alert('Hello World')",
      "prompt('Hello World",
      "alertBox('Hello World')",
    ],
    correct: "alert('Hello World')",
  },

  {
    question: "Which of the following is not commonly used data types?",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correct: "parentheses",
  },
  {
    question: "How do you round the number 102.456, to the nearest integer",
    answers: [
      "Math.random(102.456)",
      "Math.rnd(102.456)",
      "round(102.456)",
      "None of the above",
    ],
    correct: "Math.random(102.456)",
  },

  {
    question:
      "Which built-in method returns the calling string value converted to lower case?",
    answers: [
      "toLowerCase()",
      "toLower()",
      "changeCase(case)",
      "None of the Above",
    ],
    correct: "toLowerCase()",
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

var highScoreBoard = document.querySelector(".score-board");

var qIndex = 0;
var timeleft;
var highScore = 0;

function questionBlock() {
  question.textContent = quiz[qIndex].question;
  var indx = 0;
  for (var i = 0; i < button.length; i++) {
    button[i].disabled = false;
    button[i].textContent = quiz[qIndex].answers[indx];
    indx++;
  }
}

nextButton.addEventListener("click", function () {
  qIndex++;
  questionBlock();
});

startButton.addEventListener("click", function () {
  questionContainer.style.display = "block";
  startContainer.style.display = "none";
  questionBlock();
  score = 0;
  timeleft = 60;
  timeRemaining();
});

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
  if (score > highScore) {
    highScore = score;
    highScoreBoard.innerHTML = "Highscore " + highScore;
  }
}

function timeRemaining() {
  var timeInterval = setInterval(function () {
    timer.textContent = timeleft + " seconds remaining";
    timeleft--;

    if (timeleft < 0) {
      clearInterval(timeInterval);

      //timer.textContent = "Time's up! Click 'Restart' to try again ";

      EndQuiz();
    }
  }, 1000);
}

restartButton.addEventListener("click", function () {
  qIndex = 0;
  questionContainer.style.display = "none";
  resultsContainer.style.display = "none";
  checkWrong.style.display = "none";
  checkCorrect.style.display = "none";
  startContainer.style.display = "block";
  document.getElementById("initials").value = "";

  //questionBlock();
});

highScore = localStorage.getItem("highscore") || 0;
initials = localStorage.getItem("initials");

localStorage.setItem("high score", highScore);
localStorage.setItem("initials", initials);
