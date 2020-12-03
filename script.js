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
        choices:  ["boo[8];", "var boo = [8];", "boo[7];", "boo[hoo];"],
        answer: "boo[7];"
    },
    {
        question: "How would I call this function? function quiz(status) {return 'Yes it is ' + status + '!';}",
        choices:  ["quiz('over');", "quiz[over];", "function quiz('over')", "Yes it is over!"],
        answer: "quiz('over');"
    }
]

var startBtn = document.getElementById('start-btn')
var instructions = document.getElementById('instructions')
var quizContainer = document.getElementById('quiz-container')
var questionElement = document.getElementById('question')
var currentQuestion = 0;


function getQuestion (quiz_idx) {
    // Get the our quiz object from our quiz array by using the objects position in the array
    var quiz_object = quiz[quiz_idx];

    console.log(quiz_object);
    // assign quiz_object values to our html form
    questionElement.innerText = quiz_object['question'];
    for (var i = 0; i < quiz_object.choices.length; i++) {
        var choice = quiz_object.choices[i];
        console.log(choice);
        document.getElementById('choice'+ i).innerText = choice;
    }

}
// getQuestion(0);
// getQuestion(1);

function nextQuestion(){
    //Get next question
    getQuestion(currentQuestion);
    //Update our current question number
    currentQuestion +=1;
}

function startQuiz() {
    console.log('Started');
    startBtn.classList.add('hide');
    instructions.classList.add('hide');
    quizContainer.classList.remove('hide');
    nextQuestion()
}

function choiceSelection(choiceIndex) {
    console.log(choiceIndex);
} 
