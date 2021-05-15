
function generatePassword() {
var randomSpecialOpt = ['~', '!',',','@','#','$','%','^','&','*','(',')','{','}','[',']','<','>',',','.','/',':',"'"];
var randomNumberOpt = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var upperCaseOpt = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var lowerCaseOpt = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var availChar = [];


//Prompt for input
passwordLength = prompt('What is the desired length of your password?');
if (passwordLength <8 || passwordLength >128 || passwordLength === null || passwordLength === "") {
  alert('You need to provide a valid response!');
}

var specialChar = confirm ('Click OK to confirm including special characters.');
console.log(specialChar);

var numberChar = confirm('Click OK to confirm including numeric characters.');
console.log(numberChar);

var lowerCase = confirm('Click OK to confirm including lowercase characters.');
console.log(lowerCase);

var upperCase = confirm('Click OK to confirm including uppercase characters.')
console.log(upperCase);

//CCollecting user desired characters
if (specialChar) {
  availChar = availChar.concat(randomSpecialOpt);
}
if (numberChar) {
  availChar = availChar.concat(randomNumberOpt);
}
if (lowerCase) {
  availChar = availChar.concat(upperCaseOpt);
}
if (upperCase) {
  availChar = availChar.concat(lowerCaseOpt);
}

//password generation
  var generatePassword = ""
  for (let i = 0; i < passwordLength; i++) {
    var randomGen = [Math.floor(Math.random() * availChar.length)];
    generatePassword = generatePassword + availChar[randomGen];
  }
  return generatePassword;
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
/*
//Assignment code here
var userPasswordLength = 0;

function promptMe(){
  var passwordLength = prompt('What is the desired length of your password?');
  if (passwordLength === null || passwordLength === "") {
    alert('You need to provide a valid response!');
    return promptMe(); 
  } else if (passwordLength < 8) {
    alert('You need to have more than 8 characters. Please try again!');
    return promptMe();
  } else if (passwordLength >128) {
    alert('You cannot have more than 128 characters. Please try again!');
    return promptMe();
  } else {
    for (var i = 0; i < passwordLength; i++) {
      console.log(passwordLength);
    }
    userPasswordLength = passwordLength;
    specChar();
  }
}

function specChar () {
  var specialChar = confirm('Click OK to confirm including special characters.')
  if (specialChar === false) {
    numChar();
  } else if (specialChar === true) {
    window.myArray.push(String.fromCharCode(Math.floor(Math.random() *15) + 33));
    console.log(specialChar);
    numChar();
  }
}

function numChar () {
  var numberChar = confirm('Click OK to confirm including numeric characters.')
  if (numberChar === false) {
    
  } else if (numberChar === true) {
    window.myArray.push(String.fromCharCode(Math.floor(Math.random() *10) +48));
    console.log(numberChar);
    lowCase();
  }
}

function lowCase() {
  var lowerCase = confirm('Click OK to confirm including lowercase characters.')
  if (lowerCase === false) {
    upCase();
  } else if (lowerCase === true) {
    window.myArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    console.log(lowerCase);
    upCase();
  }
}

function upCase () {
  var upperCase = confirm('Click OK to confirm including uppercase characters.')
  if (upperCase === false) {
  } else if (upperCase === true) {
    window.myArray.push(String.fromCharCode(Math.floor(Math.random()* 26) +65));
    console.log(upperCase);
  }
  passwordDisplay.innerHTML = myArray.join('');
}

var upperCase = String.fromCharCode(Math.floor(Math.random()* 26) +65);
console.log(upperCase);
var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
console.log(lowerCase);
var randomNumber = String.fromCharCode(Math.floor(Math.random() *10) +48);
console.log(randomNumber);
var randomSpecial = String.fromCharCode(Math.floor(Math.random() *15) + 33);
console.log(randomSpecial);


var passwordDisplay = document.querySelector("#password")

var myArray=[];

*/


