
//take input from user and print it.
var readlineSync = require("readline-sync");
console.log("Welcome to the game.")
// let askUser = ;

// console.log(askUser);
let score = 0;

if (readlineSync.keyInYN("Do you know Nalin") === true) {  // use of keyInYN method to ask the user yes or no. This automatically populates the options y/n. where y: true and n: false


  console.log("")
  console.log("Cool, Let's start!");
  console.log("")

  let questionOne = {
    question: "Is Nalin older than 30? ",
    answer: "Yes",
  }
  let questionTwo = {
    question: "Where does Nalin live? ",
    answer: "Delhi",
  }
  let questionThree = {
    question: "What's Nalin hair color? ",
    answer: "Black",
  }
  let questionFour = {
    question: "Is Nalin married? ",
    answer: "Yes",
  }
  let questionFive = {
    question: "In which city Nalin works? ",
    answer: "Gurgaon",
  }

  let questionare = [questionOne, questionTwo, questionThree, questionFour, questionFive];

  function play(x, y, z) {

    var userAns = readlineSync.question("Q." + z + " " + x);
    if (userAns.toUpperCase() === y.toUpperCase()) {
      console.log("correct");
      score = score + 1;
    }
    else {
      console.log("incorrect");
      score = score;
    }
  }

  for (let i = 0; i <= questionare.length - 1; i++) {
    play(questionare[i].question, questionare[i].answer, i + 1);
    console.log("");

  }
  console.log("Your score is: " + score);

}




else {
  console.log("Good bye!");
}
