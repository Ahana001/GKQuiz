var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var right = chalk.green;
var wrong = chalk.red;
var info = chalk.bold.blue;
var score = 0;

var userName = readlineSync.question("what is Your name? \n");
log(info("welcome " + userName));

var questionArray = [
  {
    question: "The language spoken by the people by Pakistan is ?",
    options: ["Hindi", "Palauan", "Sindhi", "Nauruan"],
    answer: 2
  },
  {
    question: "What is the state flower of Haryana?",
    options: ["Lotus", "Rhododendron", "Golden Shower", "Not declared"],
    answer: 0
  },
  {
    question: "In what state is Elephant Falls located?",
    options: ["Mizoram", "Orissa", "Manipur", "Meghalaya"],
    answer: 3
  },
  {
    question: "Name of the first university of India?",
    options: [" Nalanda University", " Taxshila University", " Jawahar University", " Dronacharya University"],
    answer: 0
  },
  {
    question: "Which is the largest coffee producing state of India?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Arunachal Pradesh"],
    answer: 2
  }
];

function play(arr) {
  var userAns = readlineSync.keyInSelect(arr.options, arr.question);
  if (userAns !== -1) {
    log("your answer " + arr.options[userAns])
  }
  if (userAns == arr.answer) {
    log(right("you are right"));
    score = score + 1;
  } else if (userAns == -1) {
    log(info("you skip this question"));
  } else {
    log(wrong("you are wrong"));
  }
  return score;
}
for (let i = 0; i < questionArray.length; i++) {
  play(questionArray[i]);
}
log(info("your score is : " + score));
