
function showAnswer(questionNumber){
var answerElement = document.getElementById("answer" + questionNumber);
var questionElement = document.getElementById("question" + questionNumber);
var image = document.getElementById("img" + questionNumber);
if(answerElement.style.display === "none"){
   answerElement.style.display = "block";
   image.style.transform = "rotate(180deg)";
   questionElement.style.fontWeight = "700";
} else {
   answerElement.style.display = "none";
   image.style.transform = "rotate(0deg)";
   questionElement.style.fontWeight = "400";
}
}
