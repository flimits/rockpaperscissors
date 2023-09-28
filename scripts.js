// Let's play a gave of Rock, Paper and Scissors

var playerScores = [0,0,0]; // wins and losses and ties
var responseResult = ""; // Store the users response
var compResp = ""; // Store the computers response
var validValues = ["r", "p", "s"];

// function getUserResponse() {
// var userResponse = prompt("Enter one of either R, S or P to play ...");
// var lowerCaseResponse = userResponse.tolowerCase();

function getUserResponse(userResponse) {

   var userResp = prompt("Enter one of either R, S or P to play ...");
   responseResult = userResp.toLowerCase();
   if (responseResult === "r" || responseResult === "s" || responseResult == "p") {
   } else {
      alert("You did not enter an R, S, or P. Please try again");
      getUserResponse();
   }
}

function computerResponse() {
   var indexNumber = Math.floor(Math.random() * validValues.length);
   compResp = validValues[indexNumber];
}


function descisionMaker() {
   if (compResp === responseResult) {
      window.alert("Computer says " + compResp + ". And you say " + responseResult + "." + "\nIt was a tie! You can play again.");
      playerScores[2]++;
   } else
      if (
         (compResp === "r" && responseResult === "p") ||
         (compResp === "s" && responseResult === "p") ||
         (compResp === "p" && responseResult === "r")
      ) {
         window.alert("Computer says " + compResp + ". And you say " + responseResult + "." + "\nSorry, the computer won. What a bummer! You can try again!");
         playerScores[1]++;
      } else {
         {
            window.alert("Computer says " + compResp + ". And you say " + responseResult + "." + "\nYou win! Computer is a loser!");
            playerScores[0]++;
         }
      }
}

function showStats() {
   window.alert("Here are your stats:" + "\nWins = " + playerScores[0] + "\nLosses = " + playerScores[1] + "\nTies = " + playerScores[2]);
}

do{
getUserResponse();
computerResponse();
descisionMaker();
showStats();
} while (true);
