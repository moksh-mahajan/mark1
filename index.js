var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name?\n");
console.log("\nWelcome " + userName + " to DO YOU KNOW MOKSH?");

var questions = [{
  question: "What is my favorite color?",
  answer: "Black"
}, {
  question: "My favorite superhero would be?",
  answer: "Batman"
}, {
  question: "My favorite anime would be?",
  answer: "Death Note"
}, {
  question: "My favorite anime character would be?",
  answer: "Light Yagami"
}, {
  question: "What is my TV series of all time?",
  answer: "Cobra Kai"
}, {
  question: "What is my favorite video game?",
  answer: "Ghost of Tsushima"
}];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log('\nYAY! You scored:', score);

function play(question, answer) {
  var userAnswer = readlineSync.question('\n\n' + question + "\n");
  if (userAnswer === answer) {
    console.log('Bingo!');
    score = score + 1
  } else {
    console.log('Oops! The answer was not right!');
  }
  console.log('Current Score:', score);
  console.log('------------');
}
