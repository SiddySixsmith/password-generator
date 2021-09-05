var specialCharaters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var numericCharaters =  ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharaters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var uperCaseCharaters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getPasswordOptions() {
  var length = parseInt(prompt("how many charaters would you like the password to have?"), 10);
  
  if (Number.isNaN(length)){
    alert("Password lenght must be writen as a number");
    return null;
  }

  if (length < 8) { 
    alert ("Password lenght must be minimum of 8 charaters");
return null;
}

if (length > 128) {
    alert ("password lenght must be less then 129 charaters");
return null;
}

var hasSpecialCharacters = confirm("Click OK if you would like special charaters");

var hasLowerCaseCharaters = confirm("Click OK if you would like lower case charaters ");

var hasUpperCaseCharaters = confirm("Click OK if you would like upper case charaters");

var hasNumericCharaters = confirm("Click OK if you would like numeric charaters")

if (
  hasLowerCaseCharaters === false &&
  hasSpecialCharacters === false &&
  hasUpperCaseCharaters === false &&
  hasNumericCharaters === false
) { 
  alert ("must have atleast one type of charater");
  return null;
}

var passworOptions = {
  length: length,
  hasLowerCaseCharaters: hasLowerCaseCharaters,
  hasNumericCharaters: hasNumericCharaters,
  hasSpecialCharacters: hasSpecialCharacters,
  hasUpperCaseCharaters: hasUpperCaseCharaters,
};
return passworOptions;
}

function getrandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
return randomElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharaters = [];

  var guaranteedCharaters = [];

  if (!options) return null;

  if (options.hasLowerCaseCharaters) {
    possibleCharaters = possibleCharaters.concat(lowerCaseCharaters);
    guaranteedCharaters.push(getrandom(lowerCaseCharaters));
  }

  if (options.hasNumericCharaters) {
    possibleCharaters = possibleCharaters.concat(numericCharaters);
    guaranteedCharaters.push(getrandom(numericCharaters));
  }

  if (options.hasSpecialCharacters) {
    possibleCharaters = possibleCharaters.concat(specialCharaters);
    guaranteedCharaters.push(getrandom(specialCharaters));
  }

  if (options.hasUpperCaseCharaters) {
    possibleCharaters = possibleCharaters.concat(upperCaseCharaters);
    guaranteedCharaters.push(getrandom(upperCaseCharaters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharater =getrandom(possibleCharaters);
    result.push(possibleCharaters)
  }

  for (var i = 0; i < guaranteedCharaters.lenght; i++) {
    result[i] = guaranteedCharaters[i];
  }

  return result.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
