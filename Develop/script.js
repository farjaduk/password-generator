// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
function generatePassword() {
  console.log('Hey! You Clicked the button')
 
 // function to windows for choosing password criteria
var getCharacterLength = function() {
  var length = "";

  while (length === "" || length === null) {
    length = prompt("Choose a length for Your Secure Password. Must be at least 8 characters and no longer than 128 characters.");
  }
  if (length > 128) {

  length = alert("Choose characters between 8 and 128. Try Again");
 getCharacterLength()

  } else if (length < 8) {
    length = alert("Choose characters between 8 and 128. Try Again");
 getCharacterLength()
  }

  console.log (length);

  return length;
}

var getRandomUpper = function() {
  var upper = "";

  while (upper === "" || upper === null) {
    upper = window.confirm("Would you like to include uppercase letters?");
  }
  
  if (upper){
    console.log (String.fromCharCode(Math.floor(Math.random() * 26) + 65));

  }
  console.log("You chose " + upper);
  return upper;
}

var getRandomLower = function() {
  var lower = "";

  while (lower === "" || lower === null) {
    lower = window.confirm("Would you like to include lowercase letters?");
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
    number = window.confirm("Would you like to include numbers?");
  }
  if (number) {
    randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    console.log (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
  }
  console.log("You chose " + number);
  return number;
}
var getRandomSymbol = function() {
    var symbols = '';
  
    while (symbols === "" || symbols === null) {
      symbols = window.confirm("Would you like to include symbols?");

      if (symbols = true) {
        randomsymbol = function (){
          const symbols = '!@#$%^&*(){}[]=<>/,.';
          return symbols[Math.floor(Math.random() * symbols.length)];
          
        }
          
        }
        console.log(randomsymbol());

  }
}


/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */

var playerInfo = {
  name: getCharacterLength(),
  upper: getRandomUpper(),
  lower: getRandomLower(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),

};

return "Generate";
}


/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */

 
 
 
 
 
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
// go to shop between battles function

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

