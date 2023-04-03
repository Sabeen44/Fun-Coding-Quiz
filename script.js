var quiz = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msg('Hello World')" },
      { text: "alert('Hello World')" },
      { text: "prompt('Hello World" },
      { text: "alertBox('Hello World')" },
    ],
    correct: "alert('Hello World')",
  },
];

var questionContainer = document.getElementById("question-container");

var question = document.getElementById("question");
//var button = document.querySelector("#a");
var answerBtns = document.getElementById("answer-buttons");

var button = document.querySelectorAll(".btn");

question.textContent = quiz[0].question;

var indx = 0;
quiz[0].answers.forEach(answer);
function testfunc() {
  console.log("testfunc called " + indx++);
}
function answer() {
  var button = document.createElement("button");
  button.textContent = quiz[0].answers[indx].text;
  indx++;

  button.classList.add("btn");
  answerBtns.appendChild(button);
}

// button.addEventListener("click", function (event) {
//   var element = event.target;

//   if (element.matches(".btn")) {
//     var checkButton = element.getAttribute("data-status");
//   }

//   if (checkButton === check) {
//     element.setAttribute("data-status", "correct");
//   }
// });
