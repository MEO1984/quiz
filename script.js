
var timerDisplay = document.querySelector("#timer");
var highScore = document.querySelector("high");
var totalSeconds = 0;
var secondsElapsed = 0;
var questionCounter = 0;
var result = document.querySelector("result");
var secondsLeft = 60;
var start = document.querySelector("#start")

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            $("#main").append('<h1>' + "TIMES UP" + '</h1>') 
        }
    }, 1000);
}



 



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
    {
        Question: "What do you use to add a click function?",
        Answers: [
            ".on",
            ".create",
            ".append",
            ".math" ]
    },
    
    {        
        Question: "Which parentheses annotate an array",
        Answers: [
            "{}",
            "[]",
            "()",
            "''",]



    }
]

function quesLoop() { 
    setTime();
    $('#main').empty().append('<h2>' + questions[questionCounter].Question+ '</h2>').append('<button onclick="ansTest()" data-attribute="0">' + questions[questionCounter].Answers[0] + '</button>').append('<button onclick="ansTest()" data-attribute="1">' + questions[questionCounter].Answers[1] + '</button>').append('<button onclick="ansTest()" data-attribute="2">' + questions[questionCounter].Answers[2] + '</button>').append('<button onclick="ansTest()" data-attribute="3">' + questions[questionCounter].Answers[3] + '</button>');
    

    questionCounter++;
}
function ansTest() {
if ($(this.event.target).attr('data-attribute') === '0') {
    $("#result").empty().append("Correct!");
    //I cannot figure out how to call the different indexes within the array to declare answers right or wrong

    
        
    quesLoop();
    
} else {
    $("#result").empty().append("Wrong!")
    // To Do: Call function that removes some time from the timer
}
}





    
        

