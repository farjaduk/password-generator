// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
function generatePassword() {
  console.log('Hey! You Clicked the button')
 
 // function to windows for choosing password criteria
var getCharacterLength = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("Choose a length for Your Secure Password. Must be at least 8 characters and no longer than 128 characters.");
  }
  if (name > 128) {

  name = alert("Choose characters between 8 and 128. Try Again");
 getCharacterLength()

  } else if (name < 8) {
    name = alert("Choose characters between 8 and 128. Try Again");
 getCharacterLength()
  }
  
  return name;
}

var getRandomUpper = function() {
  var upper = "";

  while (upper === "" || upper === null) {
    upper = window.confirm("Would you like to include uppercase letters?");
  }
  console.log("You chose " + upper);
  return upper;
}

var getRandomLower = function() {
  var lower = "";

  while (lower === "" || lower === null) {
    lower = window.confirm("Would you like to include lowercase letters? YES or NO.");
  }
  if (lower) {
    console.log (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
  }
  console.log("You chose " + lower);
  return lower;
}

var getRandomNumber = function() {
  var number = "";

  while (number === "" || number === null) {
    number = window.confirm("Would you like to include numbers? YES or NO.");
  }
  console.log("You chose " + number);
  return number;
}

var getRandomSymbol = function() {
  var symbols = '';

  while (symbols === "" || symbols === null) {
    symbols = window.confirm("Would you like to include symbols? YES or NO.");
  }
  console.log("You chose " + symbols);

  return symbols;
};



/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */

var playerInfo = {
  name: getCharacterLength(),
  upper: getRandomUpper(),
  lower: getRandomLower(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),

};



/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */

 
 
 
 
 
  return "Generate";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
// go to shop between battles function

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

