var timeElement = document.querySelector(".time");
var timeLeft = 60;
var h1El = document.querySelector("h1");
var pEl = document.querySelector("p");
var buttonEl = document.querySelector("#start");
var questionElm = document.querySelector(".question");
var qBtnEL = document.querySelectorAll(".qbtn");
var answerDis = document.querySelector("#answerDisplay");
var currentQuestion = 0;
var correctAnswers = 0;
var questions = [
    {
        question: "1. Commonly used data types DO Not include: ",
        options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers."],
        answer: 2
    },
    {
        question: "2. The condition in an if / else statement is enclosed within ____. ",
        options: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square brackets"],
        answer: 2
    },
    {
        question: "3. Arrays in JavaScript can be used to store____.",
        options: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
        answer: 3
    },
    {
        question: "4. String values must be enclosed within ____ when being assigned to variables.",
        options: ["1. Comma", "2. Curly brackets", "3. Quotes", "4. Parentheses."],
        answer: 2
    }
];


function displayQuestion(){
    if (currentQuestion < questions.length) {
    questionElm.textContent = questions[currentQuestion].question;
    qBtnEL[0].style.display = "inline-block";
    qBtnEL[1].style.display = "inline-block";
    qBtnEL[2].style.display = "inline-block";
    qBtnEL[3].style.display = "inline-block";
    for (var i = 0; i < questions.length; i++){
        qBtnEL[i].textContent = questions[currentQuestion].options[i];
    }
    } else {
        questionElm.textContent = "Quiz Completed!";
        displayFinalScore();
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        answerDis.textContent = "Correct Answer!";
        correctAnswers++;
    } else {
        answerDis.textContent = "Wrong Answer!";
        timeLeft -= 10;
    }
    currentQuestion++;
    displayQuestion();
}

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeElement.textContent = "Time: " + timeLeft;
        if (timeLeft === 0 || currentQuestion === questions.length) {
            clearInterval(timerInterval);
            if (currentQuestion < questions.length) {
                questionElm.textContent = "Time's Up!";
                displayFinalScore();
            }
        }
    }, 1000);   
}

buttonEl.addEventListener("click", function () {
    setTime();
    h1El.textContent = "";
    pEl.textContent = "";
    buttonEl.style.display = "none";  
    displayQuestion();
});

qBtnEL.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        checkAnswer(index);
    });
});

function displayFinalScore() {
    answerDis.textContent = `You scored: ${correctAnswers} out of ${questions.length}`;
    for (var i = 0; i < qBtnEL.length; i++) {
        qBtnEL[i].style.display = "none";
    }
}
