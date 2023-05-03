// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const special = "!@#$%^&*()_-{}[]+=|:;<>,.?";
  const numbers = "0123456789";
  // fullCriteria pulls properties from all 4 strings
  let fullCriteria = "";
  // Prompt to allow user to select password char length


  const passwordlength = window.prompt("Choose  password length (8-128 characters). ");
  let password = "";
  console.log(passwordlength)

  const passCrit = window.confirm("Would you like your password to include special characters?");

  if (passCrit) {
    password += getRandomCharacter(special);
    // fullCriteria = fullCriteria + special ;
    fullCriteria += special;
  }
  console.log(passCrit)

  const includeNumbers = window.confirm("Would you like your password to include numbers?");

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
