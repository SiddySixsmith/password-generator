var specialChars = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericChars =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseChars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function getPasswordOptions() {
  var length = parseInt( prompt("how many chars would you like the password to have?"), 10);
  
  if (Number.isNaN(length)){
    alert("Password lenght must be writen as a number");
    return null;
  }

  if (length < 8) { 
    alert ("Password lenght must be minimum of 8 chars");
    return null;
  }

  if (length > 128) {
    alert ("password lenght must be less then 129 chars");
    return null;
  }

  var hasSpecialChars = confirm("Click OK if you would like special charaters");

  var hasLowerCaseChars = confirm("Click OK if you would like lower case charaters ");

  var hasUpperCaseChars = confirm("Click OK if you would like upper case charaters");

  var hasNumericChars = confirm("Click OK if you would like numeric charaters");

  if (
  hasLowerCaseChars === false &&
  hasSpecialChars === false &&
  hasUpperCaseChars === false &&
  hasNumericChars === false
  ) { 
  alert ("must have atleast one type of charater");
  return null;
  }

  var passwordOptions = {
  length: length,
  hasLowerCaseChars: hasLowerCaseChars,
  hasNumericChars: hasNumericChars,
  hasSpecialChars: hasSpecialChars,
  hasUpperCaseChars: hasUpperCaseChars,
  };
  return passwordOptions;
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleChars = [];

  var guaranteedChars = [];

  if (!options) return null;

  if (options.hasLowerCaseChars) {
    possibleChars = possibleChars.concat(lowerCaseChars);
    guaranteedChars.push(getRandom(lowerCaseChars));
  }

  if (options.hasNumericChars) {
    possibleChars = possibleChars.concat(numericChars);
    guaranteedChars.push(getRandom(numericChars));
  }

  if (options.hasSpecialChars) {
    possibleChars = possibleChars.concat(specialChars);
    guaranteedChars.push(getRandom(specialChars));
  }

  if (options.hasUpperCaseChars) {
    possibleChars = possibleChars.concat(upperCaseChars);
    guaranteedChars.push(getRandom(upperCaseChars));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharater = getRandom(possibleChars);
    result.push(possibleCharater);
  }

  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
    console.log(result.join(""));
  }
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
