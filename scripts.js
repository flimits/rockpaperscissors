// Let's play a gave of Rock, Paper and Scissors

var playerScores = [, ,]; // wins and losses and ties
var responseResult = "";

// function getUserResponse() {
// var userResponse = prompt("Enter one of either R, S or P to play ...");
// var lowerCaseResponse = userResponse.tolowerCase();

function getUserResponse(userResponse) {

   var userResp = prompt("Enter one of either R, S or P to play ...");
   responseResult = userResp.toLowerCase();
   // alert("You entered " + responseResult);

   if (responseResult === "r" || responseResult === "s" || responseResult == "p") {
      console.log(responseResult + " is a good entry is ok");
   } else {
      alert("You did not enter an R, S, or P. Please try again");
      getUserResponse();
   }
}

getUserResponse();
// console.log(responseResult);
