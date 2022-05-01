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

// Timer
function countdown() {
    var timeLeft = 60;

    // starts timer count down
    var timeInterval = setInterval(function () {
      // if timer >1 then display time left and subtract 1 from timer
    if (timeLeft >= 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } 

      // if timer !>=1, clear the time interval and run display message function
    else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        //run endGame?
    }
      //1000 = 1000ms
    }, 1000);
};

// when clicked, run this code
var startQuiz = function() {
    // start timer
    countdown();
    // endGame function if  i > questions length OR timer <= 0 
    for (var i = 0; i < questions.length; i++){
        //display 'done'
        //display score
        //enter initials
        //save data locally
        //display 'high scores'
    }   
    // if i < quetions.length
        //dynamically create question, h2 in div
        //dynamically create correct answer
        //dynamically create wrong answers

    //if correct answer clicked
        //display correct
        // score = score + 1
        //go to next question, display i+1

    //if wrong answer clicked
        //display wrong
        //timer = timer - 5000ms
        //go to next question, display i+1
}
//start the test
startBtn.addEventListener("click", startQuiz);