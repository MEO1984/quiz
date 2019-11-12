
var timerDisplay = document.querySelector("timer");
var highScore = document.querySelector("high");
var totalSeconds = 0;
var secondsElapsed = 0;
var questionCounter = 0;




var questions = [
    {
        Question: "How do you apply Javascript to your html?",
        Answers : [
             "script.js",
            "java.com",
            "java.script",
            "javaScript"]
        

    },
    {
        Question: "What do parentheses annotate?",
        Answers : [
            "Number",
            "Phrase",
            "Object",
            "String"]
        
    },
]

function quesLoop() {
    $('#main').empty().append('<h2>' + questions[questionCounter].Question+ '</h2>').append('<button onclick="ansTest()" data-attribute="0">' + questions[questionCounter].Answers[0] + '</button>').append('<button onclick="ansTest()" data-attribute="1">' + questions[questionCounter].Answers[1] + '</button>').append('<button onclick="ansTest()" data-attribute="2">' + questions[questionCounter].Answers[2] + '</button>').append('<button onclick="ansTest()" data-attribute="3">' + questions[questionCounter].Answers[3] + '</button>');

    questionCounter++;
}
function ansTest() {
if ($(this.event.target).attr('data-attribute') === '0') {
    console.log("Correct!")
    quesLoop();
    // To Do: Call function that clears the display and displays the next question
} else {
    console.log("Wrong!")
    // To Do: Call function that removes some time from the timer
}

function ansTest2() {
    if ($(questions[1].event.target).attr('data-attribute') === '2') {
        console.log("Correct!")
        quesLoop();
        // To Do: Call function that clears the display and displays the next question
    } else {
        console.log("Wrong!")
        // To Do: Call function that removes some time from the timer
    }
    }
}