const chalk = require('chalk');

let readLineSync = require('readline-sync');

let userName = readLineSync.question(chalk.blue.bold('Whats your name?\t'))
console.log(chalk.green(`\nHi `) + chalk.bgRed(userName.toUpperCase()) + chalk.green(`!.\n\tWelcome to \n\t\t "HOW WELL DO YOU KNOW MARVEL HEROES?"\n`))
var score = 0;
function quiz(question, answer) {
  userAnswer = readLineSync.question(chalk.blue.bold(`${question}\t`))
  if (userAnswer) {
    if (answer.toUpperCase() === userAnswer.toUpperCase()) {
      console.log(chalk.bgGreen.black.bold(`\nYou are right!\n`))
      score++;
      console.log(chalk.bgYellow.black.bold(`Current Score :  ${score}\n`))
    } else {
      console.log(chalk.bgRed.black.bold(`\nYou are wrong!\n`))
      // score--;
      console.log(chalk.bgYellow.black.bold(`Current Score :  ${score}\n`))
    }
  } else {
    console.log(chalk.red.italic(`Please enter an answer.\n`))
    quiz(question, answer)
  }
}


let all = [{
  question: "What is spidermans uncles name?",
  answer: "ben"
},
{
  question: "What does hulk do when he is angry?",
  answer: "smash"
},
{
  question: "Who dies in the end of Avengers Movie?",
  answer: "iron man"
},
{
  question: "Which hero has access to the multiverse?",
  answer: "dr. strange"
},
{
  question: "Is batman part of the Marvel universe?",
  answer: "no"
}
]

for (let i = 0; i < all.length; i++) {

  quiz(`${i + 1}. ${all[i].question}`, all[i].answer)

}

console.log(chalk.bgBlue.black.bold(`FINAL SCORE :  ${score}\n`))

let highScores = {
  Majid: 5,
  Madiha: 3
}

if (score => highScores.Majid) {
  console.log(chalk.bgGreen.bold.underline("\nCongrats! \t You scored the highest score."))
} else if (score > highScores.Madiha) {
  console.log(chalk.bgGreen.bold.underline("\nCongrats! \t You beat Madiha's highscore."))
}