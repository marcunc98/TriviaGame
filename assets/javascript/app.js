// alert("good connection to html!");
$(".start-button").on("click", function() {
  game.start();
  // console.log("I've been click");
});
//**create question in an object that you will need to access */
var questions = [
  {
    question:
      "In the movie Top Gun, Tom Cruises had an initial flight partner (R.I.O) who died while out on a flight exercised named?",
    choices: [
      " LT Pete \"Maverick\" Mitchell",
      " LT Bill \"Cougar\" Cortell",
      " LT Nick \"Goose\" Bradshaw"
    ],
    correctAnswer: " LT Nick \"Goose\" Bradshaw"
  },
  {
    question:
      "Never say Never Again was the last time this actor would play the heralded British spy super agent 007?",
    choices: [" Roger Moore", " Sean Connery", " Pierce Brosnan"],
    correctAnswer: " Sean Connery"
  },
  {
    question:
      "Eddie Murphy has many block buster movies he starred in on the big screen, but he made a real name for himself on what TV variety show?",
    choices: [
      " The Richard Pryor Show",
      " In Living Color",
      " Saturday Night Live"
    ],
    correctAnswer: " Saturday Night Live"
  },
  {
    question:
      "Angelina Jolie, an American actress, filmmaker, and humanitarian has a famous father named?",
    choices: [" Don Jolie", " Jon Voight", " Don Ameche"],
    correctAnswer: " Jon Voight"
  },
  {
    question:
      "In the movie Pretty woman, Vivian (Julia Roberts) and Edward (Richard Gere)  jet set off to see this Italian operatic play in which Vivian is moved to tears?",
    choices: [" Madama Butterfly", " La Traviata", " La Gioconda"],
    correctAnswer: " La Traviata"
  }
];
console.log(questions[0].question);
console.log(questions[1].choices[2]);
// GLOBAL VARIABLES
// ==========================================================================
var game = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  counter: 20,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#start-container").prepend(
      '<h2> Time Remaining: <span id="counter">20 </span> Seconds </h2>'
    );
    $(".start-button").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#start-container").append("<h2>" + questions[i].question + "</h2");
      for (var j = 0; j < questions[i].choices.length; j++) {
        $("#start-container").append(
          "<input type = 'radio' name='questions-" +
            i +
            "' value='" +
            questions[i].choices[j] +
            "'>" 
            // "' value='" + questions[i].answers[j] + "''>"
            +
            questions[i].choices[j]
        );
      }
    }
  },
  done: function() {
    // $.each($("input[name='question-0']:checked"), function() {
    //   if ($(this).val() === questions[0].correctAnswer) {
    //     game.correct++;
    //   }
    //   else {
    //     game.incorrect++;
    //   }
    // });
    $.each($("input[name='questions-0']:checked"), function() {
    
      console.log("this.val");
      console.log($(this).val());
      console.log("questions[0].correctAnswer");
      console.log(questions[0].correctAnswer);
      if ($(this).val() == questions[0].correctAnswer) {
        game.correctAnswers++;
        console.log("Correct " + game.correctAnswers);
      } else {
        game.incorrectAnswers++;
        console.log("Incorrect " + game.correctAnswers);
      }
    });
    $.each($('input[name="questions-1"]:checked'), function() {
      console.log("this.val");
      console.log($(this).val());
      console.log("questions[0].correctAnswer");
      console.log(questions[0].correctAnswer);
      if ($(this).val() == questions[1].correctAnswer) {
        game.correctAnswers++;
        console.log("Correct " + game.correctAnswers);
      } else {
        game.incorrectAnswers++;
        console.log("Incorrect " + game.correctAnswers);
      }
    });
    $.each($('input[name="questions-2"]:checked'), function() {
      console.log("this.val");
      console.log($(this).val());
      console.log("questions[0].correctAnswer");
      console.log(questions[0].correctAnswer);
      
      if ($(this).val() == questions[2].correctAnswer) {
        game.correctAnswers++;
        console.log("Correct " + game.correctAnswers);
      } else {
        game.incorrectAnswers++;
        console.log("Incorrect " + game.correctAnswers);
      }
    });
    $.each($('input[name="questions-3"]:checked'), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correctAnswers++;
        console.log("Correct " + game.correctAnswers);
      } else {
        game.incorrectAnswers++;
        console.log("Incorrect " + game.correctAnswers);
      }
    });
    $.each($('input[name="questions-4"]:checked'), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correctAnswers++;
        console.log("Correct " + game.correctAnswers);
      } else {
        game.incorrectAnswers++;
        console.log("Incorrect " + game.correctAnswers);
      }
    });
    // this.result(); {
      clearInterval(timer);
      $("#start-container").empty();
      $("#start-container h2").remove();
      $("#start-container").html("<h2>Game Over!</h2>");
      $("#start-container").append("<h3>Correct Answer: "+this.correctAnswers+"</h3>");
      $("#start-container").append("<h3>InCorrect Answer: "+this.incorrectAnswers+"</h3>");
      $("#start-container").append("<h3>Unanswered: "+(questions.length-(this.incorrectAnswers+this.correctAnswers))+"</h3>");
    // }
  }
};
