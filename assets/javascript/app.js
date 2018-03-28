// GLOBAL VARIABLES
      // ==========================================================================
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
//**create question in an object that you will need to access */
var questions = [{
  question: "In the movie Top Gun, Tom Cruises had an initial flight partner (R.I.O) who died while out on a flight exercised named?",
  choices: ["LT Pete 'Maverick' Mitchell", "LT Bill 'Cougar' Cortell", "LT Nick 'Goose' Bradshaw"],
  correctAnswer: 2
}, {
  question: "Never say Never Again was the last time this actor would play the heralded British spy super agent 007?",
  choices: ["Roger Moore", "Sean Connery", "Pierce Brosnan"],
  correctAnswer: 1
}, {
  question: "Eddie Murphy has many block buster movies he starred in on the big screen, but he made a real name for himself on what TV variety show?",
  choices: ["The Richard Pryor Show", "In Living Color", "Saturday Night Live"],
  correctAnswer: 2
}, {
  question: "Angelina Jolie, an American actress, filmmaker, and humanitarian has a famous father named?",
  choices: ["Don Jolie", "Jon Voight", "Don Ameche"],
  correctAnswer: 1
}, {
  question: "In the movie Pretty woman, Vivian (Julia Roberts) and Edward (Richard Gere)  jet set off to see this Italian operatic play in which Vivian is moved to tears?",
  choices: ["Madama Butterfly", " La Traviata", "La Gioconda"],
  correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var unAnswered = 0;
var quizOver = false;

console.log(questions[0].question);
 // FUNCTIONS
      // ==============================================================================
      $(document).ready(function () {

        // Create a function/click event that starts the quiz


        // Create a function that moves from the click of the start, to the first set of questions and/or
        //produces all of the questions dynamically/ and the goes to the results when comeplete.


        //Create jQuery method that dynamically produces questions inside of an element

        //Create countdown timer functionality

        //Create if statements that will determine if questions have been answered correctly or incorrectly, or not at all

        //Find a way to create buttons for each answer set dynamically, as well as functionality that will capture the input value
        // of the correct, incorrect, and unanswered values

        //Place text of questions, answers, buttons, results on the page.

        //Create function that ends the game


      
































// function submitAnswers() {
    

// $(".quizForm").on("click", function()
// {
//     alert($('label[for=inlineRadio1]:checked ','.form-check form-check-inline').for());
// })

// }

// // Function that updates the score...
// function updateScore() {
//     document.querySelector("#score").innerHTML = "Score: " + score;
//   }

//   // Calling functions to start the game.
//      renderQuestion();
//      updateScore();


//     // If there are no more questions, stop the function.
//         if (questionIndex === questionsArray.length) {
//           return; //this will exit the functioin once the count of the questions has cycled all they way thru
//         }

//           // Here we use jQuery to select the header with "click-me" as its ID.
//       // Notice I have the click, #click-me, and then the function
//       // So action, id|class|element, function
//       // And so whenever it is clicked...
//       $("body").on("click", "#click-me", function() {
//         alert("I've been clicked!");
//       });

//     });

//  // For Loop???
//       // ==============================================================================
//     for (var i = 0; i < 4; i++) {
//         var crystalCollectors = $("<div>"); //assign a new divs
//         crystalCollectors.attr("class", "crystalCollectors"); //give div a class
//         $(".crystal-container").append(crystalCollectors); // append new div to a containter
//         randomNumber = Math.floor(Math.random() * 12) + 1;
//         //  console.log(randomNumber);
//  //       
//         crystalCollectors.addClass("crystal number");
//         crystalCollectors.attr("data-number", randomNumber); //set value of each crystal
//         // crystalCollectors.text(randomNumber);
  
//         crystalCollectors.css("background-image", "url('" + images[i] + "')");