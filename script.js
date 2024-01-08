// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//creates a function to generate password
function generatePassword() {

    //prompt user for input regarding pass size
    passLen = prompt("please enter a password length (between 8 and 128 character): ");

    //ensure size of pass is greater then 8 and smaller then 128 and is a number
    if (passLen < 8 || passLen > 128 || isNaN(passLen)) {
        alert("Invalid input");
        return;
    }

    //confirms what characters will be in pass
    includeLowerCase = confirm("would you like to add lower case characters to your password?");
    includeUpperCase = confirm("would you like to add upper case characters to your password?");
    includeNum = confirm("would you like to add numbers to your password?");
    includeSpecialChar = confirm("would you like to add special characters to your password?");

    //ensures the user will pick one of the criteria
    if (!includeLowerCase && !includeUpperCase && !includeNum && !includeSpecialChar) {
        alert("at least one of the catagories has to be chosen.");
        return;
    }

    //initialises arrays of possible chars in pass 
    var lowerCaseChar = "qwertyuiopasdfghjklzxcvbnm ";
    var upperCaseChar = lowerCaseChar.toUpperCase();
    var numbersChar = "123456789";
    var specialChar = "!@#$%^&*()-_+={}[]|\;:'<>,.?/~`"

    //initialises empty arrray, adds chars to pass if user confirmed them
    var charUsed = "";
    if (includeLowerCase) charUsed += lowerCaseChar;
    if (includeUpperCase) charUsed += upperCaseChar;
    if (includeNum) charUsed += numbersChar;
    if (includeSpecialChar) charUsed += specialChar;

    //randomises the places the chars above goes in 
    var generatedPass = "";
    for (var i = 0; i < passLen; i++) {
        var randomise = Math.floor(Math.random() * charUsed.length);
        generatedPass += charUsed.charAt(randomise);
    }

    return generatedPass;

}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);



