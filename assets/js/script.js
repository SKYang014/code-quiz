// global variables
    var startBtn = document.querySelector("#start");
    //score
    var score = 0
    //setting index
    var i = 0
    //timer
    var timerEl = document.getElementById('countdown');
    //element listener
    var pageContentEl = document.querySelector(".page-content");
    //grab answers area
    var ansEl = document.querySelector(".answers");
    //grab questino area
    var askQuestionEl = document.querySelector(".question-area");
    //create questions array
    var questions = ['Storing data in local storage must be in ____ format.', 'Scoping refers to a typo about scooping ice cream.', 'Coding is best done at 2am.']
    //create right answers array
    var rightAns = ['String', 'False', 'True, programmers share one brain and there is more access when it is dark outside 🦇.']
    //create wrong answers array
    var wrongAns = ['Object', 'True', 'False, lightmode at noon is your strongest form. 💪☀︎']
    //initials and score array to save to loacl storage?
    var highscore = [];
    //stored stats
    var oldStats = [];
    //timer
    var timeLeft = 60

// Timer
function countdown() {
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
    // $( "btn" ).remove();
    // endGame function if  i > questions length OR timer <= 0 
    var endGame = function () {
        console.log(5);
        //display 'done'
        //display score
        //enter initials
        var initials = window.prompt("Finished! Your score is: " + score + ".  Enter in your initials: ")
        console.log(initials);
        //save data locally, can i do two values?
        highscore = {
            init: initials,
            points: score,
        }
        // createNewScore(highscore);
        saveGame();
        // loadGame();
        //display 'high scores'
    }

    var quiz = function () {
        if ( i < 3 && timeLeft > 0) {
            
        // for i < quetions.length
        // for (var i = 0; i < questions.length; i++){
            var incorrect = function () {
            //if wrong answer clicked
            //display wrong
            //timer = timer - 5000ms
            //go to next question, display i+1
                $( "li" ).remove();
                i = (i+1)
                timeLeft = (timeLeft - 5); 
                quiz();
            }

            var correct = function () {
            //if correct answer clicked
            //display correct
            // score = score + 1
            //go to next question, display i+1
                $( "li" ).remove();
                i = (i+1)
                score = score + 1;
                console.log("score: " + score);
                quiz();
            }
            
            //dynamically create question, h2 in div
            //have i +1 on button click
            //grab questions area
            
            
            
            askQuestionEl.innerHTML = "<h3 class='questions'>" + questions[i] + "</h3>";
            console.log(questions[i]);


            //create correct answer area
            var rightAnsEl = document.createElement("li");
            rightAnsEl.innerHTML = "<btn class='right-ans ans'>" + rightAns[i] + "</btn>";
            ansEl.appendChild(rightAnsEl);
            rightAnsEl.addEventListener("click", correct);

            //create wrong answers
            var wrongAnsEl = document.createElement("li");
            wrongAnsEl.innerHTML = "<btn class='wrong-ans ans'>" + wrongAns[i] + "</btn>";
            ansEl.appendChild(wrongAnsEl);
            wrongAnsEl.addEventListener("click", incorrect);
        }
    
        else {
            endGame();
        }   
    }
    quiz();
}

// var createNewScore = function () {
    
// }




var saveScore = function() {
    localStorage.setItem("record", JSON.stringify(highscore));
};

var saveGame = function () {
    //grab old score and turn into obj
    oldStats = localStorage.getItem("record");
    oldStats = JSON.parse(oldStats);
    console.log(oldStats);
    console.log(highscore.points);
    //if 0 return

    var restart = document.createElement("li");
    $("li").remove();
    restart.innerHTML = "<btn class='restart'> Do you want to try again? </btn>";
    restart.addEventListener("click", tryAgain);
    startBtn.addEventListener("click", tryAgain);
    ansEl.appendChild(restart);

    if (oldStats === null){
        oldStats = []
        var firstGame = document.createElement("h3");
        $( "h3" ).remove();
        //options to restart/refresh page
        firstGame.innerHTML = "<h3>" + highscore.init + ", your score is " 
        + highscore.points + ".  This is the first score!";
        askQuestionEl.appendChild(firstGame);
        saveScore();
        restart();
        return false;
    }
    //if current score (highscore) is greater than old score, save new, higher score
    if (oldStats.points < highscore.points) {
        var winText = document.createElement("h3");
        $( "h3" ).remove();
        //options to restart/refresh page
        winText.innerHTML = "<h3>" + highscore.init + ", your score is " 
        + highscore.points + ".  You've beat the current high score of " 
        + oldStats.points + ". </h3>";
        askQuestionEl.appendChild(winText);

        //restart mechanic



        //save new high score
        saveScore();
        winText();
        console.log("i ran restart");
        restart();
    }
    
    else {
        //if score is not higher, do not save score
        var loseText = document.createElement("h3");
        $( "h3" ).remove();
        //options to restart/refresh page
        loseText.innerHTML = "<h3>" + highscore.init + ", your score is " 
        + highscore.points + ".  You did not beat the high score of:  " 
        + oldStats.points + ". </h3>";
        askQuestionEl.appendChild(loseText);
        restart();
    }

    // loadGame();
}

// var loadGame = function() {
//     savedStats = localStorage.getItem("record");

//     if (savedStats === null) {
//         highscore = []
//         return false;
//     }

//     console.log("this is string: " + savedStats);

//     highscore = JSON.parse(savedStats)

//     console.log("this is object: " + highscore);

    var tryAgain = function () {
            window.location.reload();
    }
//     var restart = document.createElement("h3");
//             $( "h3" ).remove();
//             restart.innerHTML = "<h3>" + highscore.init + ", your score is " 
//             + highscore.points + ".  You've beat the current high score of " 
//             + highscore.points + ". </h3><btn class='restart'> Do you want to try again? </btn>";
//             askQuestionEl.appendChild(restart);
//             restart.addEventListener("click", tryAgain);
//             startBtn.addEventListener("click", tryAgain);

//     // tryAgain();
// }


//below is copied code
// var loadSaveGame = function() { 
//     // Loading
//     var users = JSON.parse(localStorage.getItem("users") || "[]");
// console.log("# of users: " + users.length);
// users.forEach(function(user, index) {
//     console.log("[" + index + "]: " + user.id);
// });

// // Modifying
// var user = {
//     id: Math.floor(Math.random() * 1000000)
// };
// users.push(user);
// console.log("Added user #" + user.id);

//     // Saving
// localStorage.setItem("users", JSON.stringify(users));
// };

//start the test
startBtn.addEventListener("click", startQuiz);