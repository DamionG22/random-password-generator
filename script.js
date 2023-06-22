// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const special = "!@#$%^&*()_-{}[]+=|:;<>,.?";
  const numbers = "0123456789";
  // fullCriteria pulls strings based off of users answers .
  let fullCriteria = "";
  // Prompt to allow user to select password char length
  let passwordlength = NaN;

  while (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    passwordlength = parseInt(window.prompt("Choose password length (8-128 characters)."));
    
    if (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
      console.log("Error: Please enter a valid password length between 8 and 128 characters.");
    }
  }
  
  let password = "";
  console.log(passwordlength);
  // Prompt for password criteria to include 
  const passCrit = window.confirm("Would you like your password to include special characters?");

  if (passCrit) {
    password += getRandomCharacter(special);
    fullCriteria += special;
  }
  console.log(passCrit)
  const includeNumbers = window.confirm("Would you like your password to include numbers?");
// determines what strings to pull from for password
  if (includeNumbers) {
    password += getRandomCharacter(numbers);
    fullCriteria += numbers;
  }
  const includeLower = window.confirm("Would you like your password to include lower case letters?");

  if (includeLower) {
    password += getRandomCharacter(lowercase);
    fullCriteria += lowercase;

  }
  const includeUpper = window.confirm("Would you like your password to include uppercase letters?");

  if (includeUpper) {
    password += getRandomCharacter(uppercase);
    fullCriteria += uppercase
  }
  while (password.length < passwordlength) {
    password += getRandomCharacter(fullCriteria)
  }
  return password;
}
function getRandomCharacter(str) {
  let randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
