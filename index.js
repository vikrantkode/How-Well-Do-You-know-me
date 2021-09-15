var readlineSync = require("readline-sync") 

function welcome(){
  var userName = readlineSync.question("Can you please tell me your name ?\n")

  console.log("Hello..! " + userName+ "\nLet's play a game to know how well do you know me ");

  console.log("================================")
}
var score = 0;
function quiz(question,answer){
   var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You're Correct...!")
    score = score+1;
  } else {
    console.log("No")
    score = score-1;
  }
  console.log("Your Score is : "+score);
  console.log("------------------------");
}
var questions =[
  {
    question : "What was my branch during my engineering ?\n",
    answer   : "CSE"
  },
  {
    question : "From which college I graduated ?\n",
    answer   : "SRM"
  },
  {
    question : "In which company currently I work ?\n",
    answer   : "Ford"
  },
  {
    question : "Where do I live ?\n",
    answer   : "Chennai" 
  },
  {
    question : "Who is my favourite superhero ?\n",
    answer   : "Mumma"
  },
];

function play(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

function result(){
  if(score >= 3){
    console.log("You know me so well.....!");
  } else{
    console.log("I think we need to connect well...");
  }
}
welcome();
play();
console.log("You Scored total : " + score + " : points")
result();