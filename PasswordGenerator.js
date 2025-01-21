// Jennifer Lyver
// 01/21/2024
//Description: CLI app that uses flags to generate a random password


const CHAR_LOWER = 0
const CHAR_UPPER = 1
const CHAR_NUMBER = 2
const CHAR_SPECIAL = 3

//defaults
let length = 8;
let upperCaseBool = true;
let numberBool = true;
let specialCharactersBool = true;


function generateCharacterArray (upperCaseBool, numberBool, specialCharactersBool) {
    let characterArray = [CHAR_LOWER];

    if (upperCaseBool) {
        characterArray.push(CHAR_UPPER);
    }
    if (numberBool) {
        characterArray.push(CHAR_NUMBER);
    }
    if (specialCharactersBool) {
        characterArray.push(CHAR_SPECIAL);
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

    for (characterType in passwordFormat) {
        switch (CharacterType) {
            case CHAR_LOWER:
                password += alphabet[Math.floor(Math.random() * alphabet.length)];
                break;

            case CHAR_UPPER:
                password += alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)];
                break;

            case CHAR_NUMBER:
                password += Math.floor(Math.random() * 10);
                break;
            
            case CHAR_SPECIAL:
                password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                break;
            default:
                throw new Error(`Invalid character type: ${characterType}`);
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