 document.addEventListener("DOMContentLoaded", function(){
 let snakeButton = document.getElementById("snake");
 let waterButton = document.getElementById("water");
 let gunButton = document.getElementById("gun");
 let cpuChoiceElement = document.getElementById("cpu-choice");
 let userChoiceElement = document.getElementById("user-choice");
 let resultElement = document.getElementById("result");

 snakeButton.addEventListener("click", function(){
    playGame("Snake")
 });
 waterButton.addEventListener("click", function(){
    playGame("Water")
 });
 gunButton.addEventListener("click", function(){
    playGame("Gun")
 });
 
 function determineWinner(cpu, user){
    if (cpu === user) {
        return "The Match is tie";
      } else if (cpu == "Snake" && user == "Water") {
        return "Cpu is the winner";
      } else if (cpu == "Snake" && user == "Gun") {
        return "User is the winner";
      } else if (cpu == "Water" && user == "Snake") {
        return "User is the winner";
      } else if (cpu == "Water" && user == "Gun") {
        return "Cpu is the winner";
      } else if (cpu == "Gun" && user == "Water") {
        return "User is the winner";
      } else if (cpu == "Gun" && user == "Snake") {
        return "Cpu is the winner";
      }
 }

 function playGame(userChoice){
    let choices = ["Snake", "Water", "Gun"]
    let cpuChoice = choices [Math.floor(Math.random () * choices.length )];
    let result = determineWinner(cpuChoice, userChoice);

    cpuChoiceElement.textContent = "Cpu choose " + cpuChoice;
    userChoiceElement.textContent = "User choose " + userChoice;
    resultElement.textContent = result;
 }
 
 });