const popquizquestions = [
    { question: "What is the recommended duration of moderate-intensity aerobic activity for adults on most days of the week, according to health guidelines?",
     options: ["15 minutes","30 minutes","45 minutes","60 minutes"],
     correctAnswer: "30 minutes",
 },
 
 {
     question: "Which of the following is a component of fitness that focuses on the ability of the heart, blood vessels, and respiratory system to supply oxygen and nutrients to the muscles during exercise?",
     options: ["Flexibility","Strength","Cardiovascular endurance","Agility"],
     correctAnswer: "Cardiovascular endurance",
 },
 
 {
     question: "What is the purpose of dynamic stretching in a warm-up routine?",
     options: ["To improve flexibility","To increase heart rate","To relax muscles", "To cool down the body"],
     correctAnswer: "To improve flexibility",
 },
 
 {
     question: "In which type of sport or activity is anaerobic exercise predominantly utilized?",
     options: ["Long-distance running","Weightlifting","Cycling", "Cycling", "Swimming"],
     correctAnswer: "Weightlifting",
 },
 
 {
     question: "Which muscle group is primarily targeted during a bicep curl exercise?",
     options: ["Quadriceps","Hamstrings","Biceps", "Triceps"],
     correctAnswer: "Biceps",
 }
 ]
 let questionIndex = 0
 let questionsHTML = document.getElementById("questions")

// Create a code quiz that contains the following requirements:
// A start button that when clicked a timer starts and the first question appears.

// const quizEl = document.querySelector("#quiz");
// // Add listener to submit element
// quizEl.addEventListener("click", endQuiz);

const timeEl = document.querySelector("#time");

function startQuiz(event) {
    setTime()
    showQuestions()
}

let secondsLeft = 10
function setTime(){
const timer = setInterval(function(){
    console.log(secondsLeft)
    secondsLeft--;
    timeEl.textContent = secondsLeft +" seconds";
    if (secondsLeft === 0) {
    clearInterval(timer);
 }
}, 1000);
}


// to DO LIST:
//LISTEN TO THE CLICK OF THE BUTTION (EVENTLISTENER) +++++++++++++
const startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz)

//CREATE A TIMER FUNCTION +++++++++++++++++++++++++++

//DISPLAYS FIRST QUESTION
function showQuestions () {
    //how to remove class hide
   questionsHTML.removeAttribute("class")
   let questionTitle = document.getElementById("question-title")
   questionTitle.textContent = popquizquestions[questionIndex].question


   let choices = document.getElementById("choices")
// for (i=0; i < popquizquestions.length; i++)  {
//     let questionTitle = document.getElementById("question-title")
//     questionTitle.textContent = popquizquestions[questionIndex].question

 //clear 

   for (i=0; i < popquizquestions[questionIndex].options.length; i++) {
    let button = document.createElement("button")
   // button.setAttribute('value', popquizquestions[0].options[i])
    button.textContent = popquizquestions[questionIndex].options[i]
    choices.append(button)
    button.onclick = answerClick
   }

//    }

   //variable that holds their answer
 
   //then compare with correct answer
  // let userAnswer = document.getElementById().value
  // if 
 // choices.textContent = popquizquestions[0].question

}
let highScore = 0;
 function answerClick() {
    console.log(this.textContent)
    let chosenAnswer = this.textContent
    if (chosenAnswer ===popquizquestions[questionIndex].correctAnswer) {
     highScore = highScore + 1;
     alert('Correct answer')
     questionIndex+= 1
     showQuestions()
 }
    else {
        console.log("wrong answer")
        alert('Wrong answer')
        //cut down time by 10 seconds#################
    }
 }


 // if time = 0 then ##################

//DISPLAY OF OPTIONS (BUTTONS)
//WHEN BUTTON IS PRESSED THE NEXT QUESTION

//eventlistenr for all the answers
//
//IF THE ANSWER IS INCORRECT SUBTRACT TIME FROM CLOCK
//IF TIME IS FINISHED END QUIZ (FUNCTION)


//check if the answer is  correct then next question
//count the score
// variables that holds 



// Action to be performed on click store in named function
function endQuiz() {
    const response =
    "Thank you for your submitting your answers! " +
    " Your HighScore is " + highScore;

  alert(response);
  }


