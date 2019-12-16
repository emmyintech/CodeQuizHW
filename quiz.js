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

var belowQuiz = document.getElementById("bottomOfPage");

var submitHighScore = document.getElementById("sub");

var highScore = document.getElementById("submitMe");

// create our questions
var questions = [{
        question: "The Earth revolves around?",
        choiceA: "The Sun",
        choiceB: "Itself",
        choiceC: "The Moon",
        correct: "A"
    }, {
        question: "What is the sun?",
        choiceA: "The sun is a planet",
        choiceB: "The sun is a star",
        choiceC: "The sun is a satellite",
        correct: "B"
    }, {
        question: "What is the closest planet to the sun?",
        choiceA: "Venus",
        choiceB: "Mars",
        choiceC: "Mercury",
        correct: "C"
    },
    {
        question: "What color is the sky",
        choiceA: "Pink",
        choiceB: "Green",
        choiceC: "Blue",
        correct: "C"
    }, {
        question: "What year did man land on the Moon?",
        choiceA: "1989",
        choiceB: "1979",
        choiceC: "1969",
        correct: "C"
    }, {
        question: "What is the circumference of the Earth?",

        choiceA: "27,802 miles",
        choiceB: "24,901 miles",
        choiceC: "22,107 miles",
        correct: "B"
    }, {
        question: "The Earth revolves around?",
        choiceA: "The Sun",
        choiceB: "Itself",
        choiceC: "The Moon",
        correct: "A"
    }, {
        question: "Why not",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }, {
        question: "The Earth revolves around?",
        choiceA: "The Sun",
        choiceB: "Itself",
        choiceC: "The Moon",
        correct: "A"
    }, {
        question: "Helllloooo?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }
];


// create some variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 150;
var totalTime = 150;
var TIMER;
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
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render


function renderCounter() {
    if (count <= totalTime) {
        counter.innerHTML = count;

        count--
    } else {
        count = 0;
        clearInterval(TIMER);
        scoreRender();

        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// function endQuiz() {
//     if (count = 0) {
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }

// checkAnwer



function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        count = count - 10;
        // answer is wrong
        // change progress color to red
        answerIsWrong();

    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}










// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#33FFF7";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#33FFF7";
}




function CheckTime() {

    document.getElementById("timer").innerHTML = "Time remaining: " + count + " seconds";

    if (count <= 0) {
        scoreRender();
    } else {
        // count = count - 1;
        timer = setTimeout(CheckTime, 1000);
    }
}
timer = setTimeout(CheckTime, 1000);







// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);



    scoreDiv.innerHTML = "<p>" + "Your final score is " + scorePerCent + "%</p>";
    // + "<br>" + "<p>" + "Enter your name below" + "</p>";
    // scoreDiv.innerHTML += "Enter your name: " + "<input type='text' name='usrname'>" +
    //     "<input type='submit' value='Submit'>";

    belowQuiz.innerHTML = "Enter your name: " + "<input type='text' name='usrname'>" +
        "<input id='sub' type='submit' value='Submit'>";

    // function submitHighScore {
    //     document.getElementById("sub")
    // }



}