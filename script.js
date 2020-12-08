// Quiz questions, choices, and answers
var quiz = [
    {
        question: "What does HTML stand for?",
        choices:  ["Hypertext Markup Link", "Hyperlink Text Markdown Language", "Hypertext Markup Language", "Handle These Mean Letters"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What does DOM stand for?",
        choices:  ["Document Object Mantle", "Document Object Model", "Deadly Orangutan Machine", "Div Organiser Mode"],
        answer: "Document Object Model"
    },
    {
        question: "Which of these is not a semantic HTML element?",
        choices:  ["<main>", "<footer>", "<section>", "<span>"],
        answer: "<span>"
    },
    {
        question: "What does CSS stand for?",
        choices:  ["Cool Sexy Styles", "Converging Style Sheets", "Cascading Style Sheets", "Cascading Script Styles"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What are the CSS Box Model components in order from the innermost to the outermost part?",
        choices:  ["Content, Padding, Margin, Border", "Content, Padding, Border, Margin", "Condiment, Pudding, Margarine, Butter", "Content, Margin, Border, Padding"],
        answer: "Content, Padding, Border, Margin"
    },
    {
        question: "Which of these is targeting the class 'rich-people'?",
        choices:  ["#rich-people", ".richPeople", "#bill-gates", ".rich-people"],
        answer: ".rich-people"
    },
    {
        question: "What does JS stand for?",
        choices:  ["Java Script", "Just Sayin", "JavaScript", "Java-Script"],
        answer: "JavaScript"
    },
    {
        question: "Which of the choices grabs the number 8 from this array? var boo = [1, 2, 3, 4, 5, 6, 7, 8];",
        choices:  ["boo[8];", "var boo = [8];", "boo[7];", "boo[urns];"],
        answer: "boo[7];"
    },
    {
        question: "How would I call this function? function quiz(status) {return 'Yes it is ' + status + '!';}",
        choices:  ["quiz('over');", "quiz[over];", "function quiz('over')", "Yes it is over!"],
        answer: "quiz('over');"
    }
]

var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var finishBtn = document.getElementById('finish-btn');
var instructions = document.getElementById('instructions');
var quizContainer = document.getElementById('quiz-container');
var questionElement = document.getElementById('question');
var currentQuestion = 0;
var feedback = document.getElementById('feedback');
var finishedForm = document.getElementById('finishedForm');
var msgAlert = document.getElementById("msgAlert");
var highScoresContainer = document.getElementById('highScoresContainer');
var highScoreList = document.getElementById('highScoreList')
var highScoresArray = JSON.parse(localStorage.getItem('nameInput')) || [];
var scoreElement = document.getElementById('scoreNum');
var scoreCount = 0;
var timeElement = document.getElementById('timeNum');
var secondsRemaining = 60;
var interval;


function startTimer(){
    interval = setInterval(function() {
        if (secondsRemaining > 0) {
            secondsRemaining--;
            timeElement.innerText = (secondsRemaining);
        } else {
            secondsRemaining = 0
            finishQuiz()
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function getQuestion (quizIndex) {
    // Get quiz object from quiz array by using the objects position in the array
    var quizObject = quiz[quizIndex];
    // Assign quiz object values to our html question and buttons
    questionElement.innerText = quizObject['question'];
    for (var i = 0; i < quizObject.choices.length; i++) {
        var choice = quizObject.choices[i];
        document.getElementById('choice'+ i).innerText = choice;
        document.getElementById('choice'+ i).disabled = false;
    }
}

// Called from our finish button in HTML
function finishQuiz() {
    stopTimer();
    quizContainer.classList.add('hide');
    finishedForm.classList.remove('hide');
    console.log("I'm finished")
}

// Called from our start button in HTML
function startQuiz() {
    // Start timer countdown
    startTimer()
    console.log('Started');
    // Hide start button and instruction and show quiz
    startBtn.classList.add('hide');
    instructions.classList.add('hide');
    quizContainer.classList.remove('hide');
    // Start at default question 0
    getQuestion(currentQuestion);
}

// Called from our next button in HTML
function nextQuestion() {
    //Update current question number
    currentQuestion +=1;  
    //Get next question
    getQuestion(currentQuestion);
    //Re-hide next button and feedback
    nextBtn.classList.add('hide');
    feedback.classList.add('hide')
}

function choiceSelection(choiceIndex) {
    // Get quiz_object for current question to verify answer
    var quizObject = quiz[currentQuestion];
    // Unhide Correct! or Wrong!
    feedback.classList.remove('hide')
    // Get feedback Correct! or Wrong! after each choice
    if (quizObject.choices[choiceIndex] === quizObject.answer) {
        feedback.innerText = 'Correct!'
        // Adds 10 to your score for every correct answer
        scoreCount = (scoreCount + 10);
        scoreElement.innerText = scoreCount
    } else {
        feedback.innerText = 'Wrong!'
        // Deduct 10 seconds for wrong answers
        secondsRemaining = secondsRemaining - 10;
        timeElement.innerText = (secondsRemaining);
        // Timer won't go below zero
        if (secondsRemaining < 0){
            timeElement.innerText = 0;
        }
    }
    // Disable choices after a choice is selected
    for (var i = 0; i < quizObject.choices.length; i++) {
        document.getElementById('choice'+ i).disabled = true;
    }
    // Change next button to finish button for last question
    if ((currentQuestion + 1) === quiz.length) {
        finishBtn.classList.remove('hide');
        nextBtn.classList.add('hide');
    } else {
        nextBtn.classList.remove('hide');
    }
    console.log(quizObject.choices[choiceIndex], quizObject.answer);
} 

function displayMessage(type, message) {
    msgAlert.textContent = message;
    msgAlert.setAttribute("class", type);
}

function setHighScore(event){
    event.preventDefault();
    // Prevent user from submitting an empty field for a name
    var nameInput = document.getElementById('nameInput').value;
    if (nameInput === "") {
        displayMessage("error", "Name cannot be blank");
    } else {
        displayMessage("success", "Registered successfully");
        highScoresArray.push(nameInput + " " + scoreCount);
        localStorage.setItem('nameInput', JSON.stringify(highScoresArray));
    }  
}

function getHighScores(event){
    event.preventDefault();
    var nameInput = localStorage.getItem('nameInput');
    if (nameInput === null || scoreNum === null) {
        return;
    }
    // Orders high scores by newest to oldest
    for (var i = (highScoresArray.length - 1); i >= 0 ; i--) {
        var li = document.createElement('li');
        li.innerText = highScoresArray[i];
        highScoreList.appendChild(li);
    }
    // Show high scores and hide finish screen
    highScoresContainer.classList.remove('hide');
    finishedForm.classList.add('hide');
    console.log(nameInput, scoreNum);
}


