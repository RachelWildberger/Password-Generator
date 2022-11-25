// Assignment code
var generateBtn = document.querySelector("#generate");

// Declares variables using arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "*", "(", ")", "^"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creating a series of prompts for password criteria
function getPasswordOptions() {
  var passwordLength = prompt("Choose a password length between 8-128 characters?");
    while((passwordLength < 8) || (passwordLength > 126)){
    passwordLength = prompt("Please enter a number between 8 and 126.");
  }
  var passwordNumbers = confirm("Do you want to include numbers in your password?");
  var passwordSymbols = confirm("Do you want to include special characters in your password?");
  var passwordUpperCase = confirm("Do you want to include uppercase characters in your password?");
  var passwordLowerCase = confirm("Do you want to include lowercase characters in your password?");

  // 
  var options = {
    passwordLength: passwordLength,
    passwordNumbers: passwordNumbers,
    passwordSymbols: passwordSymbols,
    passwordupperCase: passwordUpperCase,
    passwordlowerCase: passwordLowerCase,
  };
  return options;
}

// using Math.floor(Math.random()
function createRandom(length) {
  var randomNumber = Math.floor(Math.random() * length);
  return randomNumber;
}


//Generate password function
function generatePassword() {
  var password = getPasswordOptions();
  var availableChars = [];
  var passwordArray = [];
  if(password.passwordLength) {
    availableChars = availableChars.concat(symbols)
  } if(password.passwordLength) {
    availableChars = availableChars.concat(numbers)
  } if(password.passwordLength) {
    availableChars = availableChars.concat(upperCase)
  } if(password.passwordLength) {
    availableChars = availableChars.concat(lowerCase)
  }
 
 // Loops through all character types and selects random characters each time
 for(var i = 0; i < password.passwordLength; i ++) {
  passwordArray.push(availableChars[createRandom(availableChars.length)])
 }
  return passwordArray.join("")

}