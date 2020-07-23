var questions = [{
        "question": "Inside which HTML element do we put the JavaScript?",
        "option1": "<javascript>",
        "option2": "<javaScript>",
        "option3": "<script>",
        "option4": "<Scripting>",
        "answer": "3"
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "option1": "Both the <head> and the <body> section are correct",
        "option2": "The <head> section",
        "option3": "The <body> section",
        "option4": "Both the <head> and the <body> section are wrong",
        "answer": "1"
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'abc.js'?",
        "option1": "<script name = 'abc.js'>",
        "option2": "<script href = 'abc.js'>",
        "option3": "<script src = 'abc.js'>",
        "option4": "<script type = 'abc.js'>",
        "answer": "3"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "option1": "alertBox('Hello World');",
        "option2": "msgBox('Hello World');",
        "option3": "msg('Hello World');",
        "option4": "alert('Hello World');",
        "answer": "4"
    },
    {
        "question": "How do you create a function in JavaScript?",
        "option1": "myFunction myFunction()",
        "option2": "function myFunction()",
        "option3": "function : myFunction",
        "option4": "function = myFunction()",
        "answer": "2"
    },
    {
        "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        "option1": "if (i != 5)",
        "option2": "if i <> 5",
        "option3": "if i != 5",
        "option4": "if (i <> 5)",
        "answer": "1"
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "option1": "call myFunction()",
        "option2": "myFunction()",
        "option3": "call function myFunction()",
        "option4": "myFunction",
        "answer": "2"
    },
    {
        "question": "How does a FOR loop start?",
        "option1": "for (i = 0; i >= 5; i++)",
        "option2": "for var i = 0; i <= 5; i++",
        "option3": "for (var i = 0; i <= 5; i++)",
        "option4": "for i = 0; i <= 5;",
        "answer": "3"
    },
    {
        "question": "What is the correct way to write a JavaScript array?",
        "option1": "var colors = [1='red', 2='green', 3='blue']",
        "option2": "var colors = (1:'red', 2:'green', 3:'blue')",
        "option3": "var colors = 'red', 'green', 'blue'",
        "option4": "var colors = ['red', 'green', 'blue']",
        "answer": "4"
    },
    {
        "question": "How do you round the number 6.75, to the nearest integer?",
        "option1": "Math.round(6.75)",
        "option2": "round(6.75)",
        "option3": "Math.rnd(6.75)",
        "option4": "rnd(6.75)",
        "answer": "1"
    }
];



window.onload = function timer() {

    var minutes = 4;
    var seconds = 59;

    var interval = setInterval(function() {
        if (minutes < 10 && seconds < 10) {
            time.innerHTML = "0" + minutes + ":" + "0" + seconds;
        } else if (minutes < 10) {
            time.innerHTML = "0" + minutes + ":" + seconds;
        } else if (seconds < 10) {
            time.innerHTML = minutes + ":" + "0" + seconds;
        } else { time.innerHTML = minutes + ":" + seconds; }
        seconds--;

        if (minutes < 0) {
            container.style.display = "none";
            resultCont.style.display = "";
            time.innerHTML = "Time Out";
            resultCont.textContent = "Your Score; " + score + "%" + " " + "Correct Ans" + ': ' + score / 10;
            button_box.style.display = 'none';
            result2.style.display = 'block';
            result3.style.display = 'block';
            warning.style.display = 'none';
            marks.style.display = 'block';
            tOut.innerHTML = "!Time Out"
            tOut.style.display = 'block';
            clearInterval(interval);
        } else if (seconds == 0) {
            minutes--;
            seconds = 60;
        }
        if (minutes === 00 && seconds === 59) {
            time.style.color = "#d80000";
        }
    }, 1000);
};



var currentQuestion = 0;
var score = 0;
var time = document.getElementById("timer");
var totalQuestion = questions.length;
var container = document.getElementById("container");
var question1 = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var resultCont = document.getElementById("result");
var button_box = document.getElementById("button_box");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var warning = document.getElementById("warning");
var marks = document.getElementById("marks");
var nextBtn = document.getElementById("nxt-btn");
var tOut = document.getElementById("timeout");




function loadQuestion(questionIndex) {
    var ques = questions[questionIndex];
    question1.textContent = (questionIndex + 1) + ". " + ques.question;
    option1.textContent = ques.option1;
    option2.textContent = ques.option2;
    option3.textContent = ques.option3;
    option4.textContent = ques.option4;

};


function loadNxtQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption == null) {
        alert('Please select your answer!');
        return;
    }

    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion == totalQuestion) {
        resultCont.style.display = "";
        container.style.display = "none";
        resultCont.textContent = "Your Score; " + score + "%" + " " + "Correct Ans" + ': ' + score / 10;
        warning.style.display = 'none';
        button_box.style.display = 'none';
        result2.style.display = 'block';
        result3.style.display = 'block';
        marks.style.display = 'block';

        return;
    }

    if (score > 60) {
        marks.innerHTML = "<b>'Bravo You Cleared The Test'</b>";
    } else {
        marks.innerHTML = "<i>'Sorry You Failed'</i>";
    }

    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);


function startAgain() {
    location = "started.html";
}