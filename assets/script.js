// Assignment code here
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

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
    console.log(passwordLength);
    specChar();
  }
}

function specChar () {
  var specialChar = confirm('Click OK to confirm including special characters.')
  if (specialChar === false) {
    console.log(specialChar);
    numChar();
  } else if (specialChar === true) {
    console.log(specialChar);
    numChar();
  }
}

function numChar () {
  var numberChar = confirm('Click OK to confirm including numeric characters.')
  if (numberChar === false) {
    console.log(numberChar);
    lowCase();
  } else if (numberChar === true) {
    console.log(numberChar);
    lowCase();
  }
}

function lowCase() {
  var lowerCase = confirm('Click OK to confirm including lowercase characters.')
  if (lowerCase === false) {
    console.log(lowerCase);
    upCase();
  } else if (lowerCase === true) {
    console.log(lowerCase);
    upCase();
  }
}

function upCase () {
  var upperCase = confirm('Click OK to confirm including uppercase characters.')
  if (upperCase === false) {
    console.log(upperCase);

  } else if (upperCase === true) {
    console.log(upperCase);
  }
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