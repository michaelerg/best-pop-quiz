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


const timeEl = document.querySelector("#time");

function startQuiz(event) {
    setTime()
    showQuestions()
}

let secondsLeft = 60
function setTime(){
const timer = setInterval(function(){
    console.log(secondsLeft)
    secondsLeft--;
    timeEl.textContent = secondsLeft +" seconds";
    if (secondsLeft <= 0) {
    secondsLeft = 0;
      endQuiz();
    clearInterval(timer);
    choices.innerHTML = "";
   // questionTitle.innerHTML = ""
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

   choices.innerHTML = "";
   for (i=0; i < popquizquestions[questionIndex].options.length; i++) {
    let button = document.createElement("button")
   // button.setAttribute('value', popquizquestions[0].options[i])
    button.textContent = popquizquestions[questionIndex].options[i]
    choices.append(button)
    button.onclick = answerClick
   }


}
let highScore = 0;
 function answerClick() {
    console.log(this.textContent)
    let chosenAnswer = this.textContent
    if (chosenAnswer ===popquizquestions[questionIndex].correctAnswer) {
     highScore = highScore + 1;
     alert('Correct answer')

      if (questionIndex < popquizquestions.length - 1) {
      questionIndex += 1;
      showQuestions();
    } else {
      endQuiz();
      //clearInterval(timer);
      choices.innerHTML = "";
      //questionTitle.innerHTML = ""
    }
  } else {
    alert("Wrong answer");
    secondsLeft = secondsLeft - 10;
    }
 }
 
function saveHighscore(){
   
   localStorage.setItem(initials, highScore)
   console.log(initials, highScore)
   
}

// Action to be performed on click store in named function
function endQuiz() {
    questionTitle = ""
    let initials = prompt('what is your initials?')
    saveHighscore()
    const response =
    "Thank you for your submitting your answers " + initials +
    " ,Your HighScore is " + highScore;
  alert(response);
  //clearInterval(timer);
  }


