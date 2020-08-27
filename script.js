// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {
  // Used split() funtion to convert strings into character arrays //
  let abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let abcUpperArr = abcUpper.split("");
  let abcLower = "abcdefghijklmnopqrstuvwxyz";
  let abcLowerArr = abcLower.split("");
  let num = "0123456789";
  let numArr = num.split("");
  let sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
  let symArr = sym.split("");
  let password = "";
  // empty array to be filled by confirmed character arrays // *
  let allChars = [];


  let passLength = prompt("Choose a password length between 8 and 128 characters");


  if (passLength < 8 || passLength > 128) {
    alert("Please choose a whole number between 8 and 128 characters");
  }

  // used window.confirm method to accept or decline character arrays // 
  if (window.confirm("Would you like to use uppcase letters?")) {
    // used "Array.prototype.push.apply(array1, array2)"" to merge confirmed character arrays into allChars* array //
    Array.prototype.push.apply(allChars, abcUpperArr);
  }

  if (window.confirm("Would you like to use lowercase letters?")) {
    Array.prototype.push.apply(allChars, abcLowerArr);
  }

  if (window.confirm("Would you like to use numbers?")) {
    Array.prototype.push.apply(allChars, numArr);
  }

  if (window.confirm("Would you like to use special characters?")) {
    Array.prototype.push.apply(allChars, symArr);
  }

  if (allChars.length === 0) {
    alert("At least one type of characters must be applied.");
  }

  else
    for (let i = 0; i < passLength; i++) {
      let randomChars = Math.floor(Math.random() * allChars.length);
      // "+=" denotes "x2 = x1 + y"
      password += allChars[randomChars];
    }


  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// #Potential component functions //

// #####
// let randomstring = Math.random().toString(36).substr(2, 8)

// #####
// function makeid(length) {
//   var result = '';
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }


// #####
//   function randomPassword(length) {
//     var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
//     var pass = "";
//     for (var x = 0; x < length; x++) {
//       var i = Math.floor(Math.random() * chars.length);
//       pass += chars.charAt(i);
//     }
//     return pass;
//   }

//   function generate() {
//     myform.row_password.value = randomPassword(myform.length.value);
//   }


// #####
//   var charTypes = {
//     'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     'lower': 'abcdefghijklmnopqrstuvwxyz',
//     'number': '0123456789',
//     'special': '!$%^&*()-=+[]{};#:@~,./<>?'
//   };

