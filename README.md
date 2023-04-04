# Fun-Coding-Quiz

## Overview

An example of a timed quiz with multiple choice questions.

##Technologies Used

HTML
CSS
Javascript
DOM
Web API

## Code Snippet

function questionBlock() {
question.textContent = quiz[qIndex].question;
var indx = 0;
for (var i = 0; i < button.length; i++) {
button[i].disabled = false;
button[i].textContent = quiz[qIndex].answers[indx];
indx++;

}
}

In the above snippet a question and answer options are grabbed from an object inside an array each time the loop is run and indx is increments

## Learning Points:

Using display:none to hide an entire section and calling it when needed with display:block

Using .disabled so that the buttons(answer options in this case) can only be clicked once

## Code By

Sabeen Chaudhry
