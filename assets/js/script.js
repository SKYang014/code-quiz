// global variables
    var startBtn = document.querySelector("#start");
    //score
    var score = 0
    //timer
    var timerEl = document.getElementById('countdown');

    //create questions array
    var questions = ['this is question 1', 'this is question 2', 'this is question 3']
    //create right answers array
    var rightAns = ['right1', 'right2', 'right3']
    //create wrong answers array
    var wrongAns = ['wrong1', 'wrong2', 'wrong3']
    //initials and score array to save to loacl storage?
    var highscore = []

// Timer
function countdown() {
    var timeLeft = 60;

    // starts timer count down
    var timeInterval = setInterval(function () {
      // if timer >1 then display time left and subtract 1 from timer
    if (timeLeft >= 0) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } 

      // if timer !>=1, clear the time interval and run display message function
    if (timeLeft <= 0) {
        timerEl.textContent = '';
        clearInterval(timeInterval);
    }
      //1000 = 1000ms
    }, 1000);
};

// when clicked, run this code
var startQuiz = function() {
    // start timer
    countdown();
    // endGame function if  i > questions length OR timer <= 0 
    var endGame = function () {
    if (i > questions.length || timeLeft <= 0)
        //display 'done'
        //display score
        //enter initials
        var initials = window.prompt("Finished! Your score is: " + score + ".  Enter in your initials: ")
        console.log(initials);
        //save data locally, can i do two values?
        localStorage.setItem("hiscores", "score" + "initials");
        //display 'high scores'
    }

    console.log(1);
    if ( score >= 0) {
        console.log(2);
    // for i < quetions.length
    for (var i = 0; i < questions.length; i++){
        //dynamically create question, h2 in div
        //grab questions area
        var askQuestionEl = document.querySelector(".question-area");
        askQuestionEl.innerHTML = "<h3 class='questions'>" + questions[i] + "</h3>";
        console.log(questions[i]);
    
        //dynamically create correct answer
        var rightAnsEl = document.querySelector(".answers");
        rightAnsEl.innerHTML = "<li class='right-ans'>" + rightAns[i] + "</li>";
        console.log(rightAns[i]);

        //dynamically create wrong answers
        var wrongAnsEl = document.querySelector(".answers");
        wrongAnsEl.innerHTML = "<li class='wrong-ans'>" + wrongAns[i] + "</li>";
    }
    //if correct answer clicked
        //display correct
        // score = score + 1
        //go to next question, display i+1

    //if wrong answer clicked
        //display wrong
        //timer = timer - 5000ms
        //go to next question, display i+1
    }
}
//start the test
startBtn.addEventListener("click", startQuiz);