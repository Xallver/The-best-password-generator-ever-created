// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["@", "#", "$", "%", "^", "&", "*", "!"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var userPrompts = function () {
  console.log("Hey! You clicked the button!")

  var passwordLength = window.prompt("How many characters would you like your password to be?");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) === true) {
    alert("Please pick a number");
    userPrompts();
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number between 8 - 128")
    userPrompts();
    return;
  }

  var includeSpecial = confirm("Would you like to use special characters?");
  var includeUpperCase = confirm("Would you like to use upperCase characters?");
  var includeLowerCase = confirm("Would you like to use lowercase characters?");
  var includeNumbers = confirm("would you like to use numbers?");

  if (
    includeSpecial === false &&
    includeUpperCase === false &&
    includeLowerCase === false &&
    includeNumbers === false
  ) {
    window.alert("You must select one.");
    userPrompts();
    return;
  }

  var userSelections = {
    passwordLength: passwordLength,
    includeSpecial: includeSpecial,
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeNumbers: includeNumbers
  };
  return userSelections;

}

var generatePassword = function () {
  var passwordSelections = userPrompts();
  var possibleCombo = [];
  var securePassword = []
  console.log(passwordSelections);

  if (passwordSelections.includeSpecial) {
    for (var i of specialChar)
      possibleCombo.push(i);
  }
  if (passwordSelections.includeUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordSelections.includeLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordSelections.includeNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }

  console.log(possibleCombo);

  for (var i = 0; i < passwordSelections.passwordLength; i++) {
    var randomCharacters = Math.floor(Math.random() * possibleCombo.length);
    securePassword.push(possibleCombo[randomCharacters]);    
  }

  console.log(securePassword.join(""));  

  writePassword(securePassword.join(""));
}

// Write password to the #password input
function writePassword(securePassword) {
  var passwordText = document.querySelector("#password");

  passwordText.value = securePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
