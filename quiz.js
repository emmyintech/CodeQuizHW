// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");


var scoreDiv = document.getElementById("scoreContainer");

// create our questions     **********  Supposed to be a separate doc but how?
var questions = [{
        question: "What does HTML stand for?",
        imgSrc: "img/html.png",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        imgSrc: "img/css.png",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    }, {
        question: "What does JS stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    },
    {
        question: "What does JS stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    },
    {
        question: "What does JS stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    },
    {
        question: "What does emmy stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    },
    {
        question: "What does jkdsfHKASDHF stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    },
    {
        question: "What does JS stand for?",
        imgSrc: "img/js.png",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }

];

// create some variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;

var score = 0;

// render a question
function renderQuestion() {
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    TIMER = setInterval(renderCounter, 1000);
}

// function renderProgress() {
//     for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
//         progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
//     }
// }






// Needs to be triggered when the start button is clicked

var TIMER = setInterval(timer, 1000); // renamed?

var counter = 0;
var min = 4;
var sec = 60;

function timer() {

    sec = --sec;

    if (sec === 0) {
        min = --min;
        sec = 59;
        counter = ++counter;
    }

    if (counter === 5) {
        sec = 0;
        min = 0;
        clearInterval(TIMER);
        functionSubmit(); //    How to finish the quiz, last 3 pop ups??????
        document.write("Submitted");
    }

    document.getElementById("timer").innerHTML = "<h1>" + min + " : " + sec + "<h1>";

}


function renderProgress() {
    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}


function renderCounter() {
    // if (count <= 0) {
    //     counter.innerHTML = count;
    //     // timeGauge.style.width = count * gaugeUnit + "px";
    //     count++
    // } else {
    //     count = 0;
    //     // change progress color to red
    //     answerIsWrong();
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();

    }
}



function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        // answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        // answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        // scoreRender();
    }
}









// // answer is correct
// function answerIsCorrect() {
//     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// // answer is Wrong
// function answerIsWrong() {
//     document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// score render
function scoreRender() {
    scoreDiv.style.display = "block";
}

// checkAnwer

// function checkAnswer(answer) {
//     if (answer == questions[runningQuestion].correct) {
//         score++;
//         answerIsCorrect();
//     } else {
//         answerIsWrong();
//         count = 0;
//         if (runningQuestion < lastQuestion) {
//             runningQuestion++;
//             renderQuestion();
//         } else {
//             // end the quiz and show the score
//             clearInterval(TIMER);
//             scoreRender();
//         }




// calculate the amount of question percent answered by the user
var scorePerCent = Math.round(100 * score / questions.length);

// // choose the image based on the scorePerCent
// var img = (scorePerCent >= 70) ? " images/greatjob.png" :
//     (scorePerCent >= 0) ? " images/youtried.png" :

// scoreDiv.innerHTML = "<img src=" + img + ">";
// scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";