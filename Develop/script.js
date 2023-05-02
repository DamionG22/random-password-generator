// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const special = "!@#$%^&*()_-{}[]+=|:;<>,.?";
  const numbers = "0123456789";
  // fullCriteria pulls properties from all 4 strings
  // const fullCriteria = uppercase + lowercase + special + numbers;
  // Prompt to allow user to select password char length


  const passwordlength = window.prompt("Choose  password length (8-128 characters). ");
  let password = "";
  console.log(passwordlength)

  const passCrit = window.prompt("Would you like your password to include special characters?");

  if (passCrit === "yes") {
    password += special[getRandomIndex(special)]
  }
  console.log(passCrit)
  function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;


  }





const passrit = window.prompt("Would you like your password to include numbers");
}

// for (let i = 0; i < passwordlength; i++) {
//   let  randomIndex = Math.floor(Math.random() * fullCriteria.length);
//   password += fullCriteria[randomIndex];
// }

// return password;
// }

const newPassword = generatePassword();
alert(`Your new password is: ${newPassword}`);

document.getElementById("placeholder").value = password;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
