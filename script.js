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
var feedback = document.getElementById('feedback');
var scoreElement = document.getElementById('scoreNum');
var currentQuestion = 0;
var scoreCount = 0;
var finishedForm = document.getElementById('finishedForm');

function getQuestion (quizIndex) {
    //Get our quiz object from our quiz array by using the objects position in the array
    var quizObject = quiz[quizIndex];
    //Assign quiz_object values to our html
    questionElement.innerText = quizObject['question'];
    for (var i = 0; i < quizObject.choices.length; i++) {
        var choice = quizObject.choices[i];
        document.getElementById('choice'+ i).innerText = choice;
        document.getElementById('choice'+ i).disabled = false;
    }
}

function nextQuestion() {
    //Update our current question number
    currentQuestion +=1;  
    //Get next question
    getQuestion(currentQuestion);
    //Re-hide next button
    nextBtn.classList.add('hide');
    feedback.classList.add('hide')
}

function startQuiz() {
    console.log('Started');
    startBtn.classList.add('hide');
    instructions.classList.add('hide');
    quizContainer.classList.remove('hide');
    //Start at default, 0, question
    getQuestion(currentQuestion);
}

function finishQuiz() {
    quizContainer.classList.add('hide');
    finishedForm.classList.remove('hide')
    console.log("I'm finished")
}

function highScores(event){
    event.preventDefault();
    console.log("High Scores")
}

function submitNameScore(event){
    event.preventDefault();
    console.log(document.getElementById('nameInput').value);
    console.log(scoreCount);
}

function choiceSelection(choiceIndex) {
    //Get quiz_object for current question to verify answer
    var quizObject = quiz[currentQuestion];
    //Hide Correct! or Wrong! for next question
    feedback.classList.remove('hide')
    //Feedback correct or wrong after each choice
    if (quizObject.choices[choiceIndex] === quizObject.answer) {
        feedback.innerText = 'Correct!'
        //Adds 10 to your score for every correct answer
        scoreCount = (scoreCount + 10);
        scoreElement.innerText = scoreCount
    } else {
        feedback.innerText = 'Wrong!'
    }
    for (var i = 0; i < quizObject.choices.length; i++) {
        var choice = quizObject.choices[i];
        document.getElementById('choice'+ i).disabled = true;
    }
    //Question before last, prepare for final question
    if ((currentQuestion + 1) === quiz.length) {
        //Show finish button
        finishBtn.classList.remove('hide');
        //Hide next button
        nextBtn.classList.add('hide');
    } else {
        //Show next button
        nextBtn.classList.remove('hide');
    }
    console.log(quizObject.choices[choiceIndex], quizObject.answer);
} 