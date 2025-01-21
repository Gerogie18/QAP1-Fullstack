// Jennifer Lyver
// 01/21/2024
//Description: CLI app that uses flags to generate a random password



//defaults
let length = 8;
let upperCaseBool = true;
let numberBool = true;
let specialCharactersBool = true;


function generateCharacterArray (upperCaseBool, numberBool, specialCharactersBool) {
    // 0 = lowercase character // 1 = uppercase character // 2 = number // 3 = special character
    let characterArray = [0];

    if (upperCaseBool) {
        characterArray.push(1);
    }
    if (numberBool) {
        characterArray.push(2);
    }
    if (specialCharactersBool) {
        characterArray.push(3);
    }
    return characterArray;
}

function generatePasswordFormat (characterArray, length) {
    let passwordFormat = characterArray;
    for (let i = passwordFormat.length - 1; i < length; i++) {
        passwordFormat.push(characterArray[Math.floor(Math.random() * characterArray.length)]);
    }
}

function generatePassword (passwordFormat) {
    let password = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let specialCharacters = "!@#$%^&*()_+";
    for (let i = 0; i < passwordFormat.length; i++) {
        switch (passwordFormat[i]) {
            case 0:
                password += alphabet[Math.floor(Math.random() * alphabet.length)];
                break;

            case 1:
                password += alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)];
                break;

            case 2:
                password += Math.floor(Math.random() * 10);
                break;
            
            case 3:
                password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                break;
            default:
                print("Error: Unknown password format: " + passwordFormat[i]);
                break;
        }
    }
}


// parse command line arguments

// make help flag

//length flag (default to 8 - minimum of 4)

//flag for lowercase

//flag for upper case

//flag for numbers

//flag for special characters

//default to all - flags to limit