function generatePassword() {
var randomSpecialOpt = ['~', '!',',','@','#','$','%','^','&','*','(',')','{','}','[',']','<','>',',','.','/',':',"'"];
var randomNumberOpt = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var upperCaseOpt = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var lowerCaseOpt = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var availChar = [];


//Prompt for input
passwordLength = prompt('What is the desired length of your password?');
if (passwordLength <8 || passwordLength >128 || passwordLength === null || passwordLength === "") {
  alert('Password length must be between 8 - 128 characters long! Please click "GENERATE PASSWORD" button again to retry.');
  return ('Try Again');
}

var specialChar = confirm ('Click OK to confirm including special characters.');

var numberChar = confirm('Click OK to confirm including numeric characters.');

var lowerCase = confirm('Click OK to confirm including lowercase characters.');

var upperCase = confirm('Click OK to confirm including uppercase characters.')

if (specialChar === false && numberChar === false && lowerCase === false && upperCase=== false) {
  alert ('You must choose at least 1 option to form a valid password. Please click "GENERATE PASSWORD" button again to retry.');
  return('Try Again');
}


//Collection and concatenation of user desired characters
if (specialChar) {
  availChar = [...availChar, ...randomSpecialOpt];
}
if (numberChar) {
  availChar = [...availChar, ...randomNumberOpt];
}
if (lowerCase) {
  availChar = [...availChar, ...upperCaseOpt];
}
if (upperCase) {
  availChar = [...availChar, ...lowerCaseOpt];
}

//password generation
  var genPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomGen = Math.floor(Math.random() * availChar.length);
    genPassword = genPassword + availChar[randomGen];
  }
  return genPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);