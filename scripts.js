// Let's play a gave of Rock, Paper and Scissors

var playerScores = [, ,]; // wins and losses and ties
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
      console.log(responseResult + " is a good entry is ok");
   } else {
      alert("You did not enter an R, S, or P. Please try again");
      getUserResponse();
   }
}

getUserResponse();

function computerResponse() {
   var indexNumber = Math.floor(Math.random() * validValues.length);
   compResp = validValues[indexNumber];
   console.log(compResp + " is what the computer says");
}

computerResponse();

function descisionMaker() {
   if (compResp === responseResult) {
      window.alert("It was a tie! You can play again.");
      playerScores[2]++;
   } else
      if (
         (compResp === "r" && responseResult === "p") ||
         (compResp === "s" && responseResult === "p") ||
         (compResp === "p" && responseResult === "r")
      ) {
         window.alert("Sorry, the computer won. What a bummer! You can try again!");
         playerScores[1]++;
      } else {
         {
            window.alert("You win! Computer is a loser!");
            playerScores[0]++;
         }
      }
}



descisionMaker();