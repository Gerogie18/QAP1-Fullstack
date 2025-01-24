#!/usr/bin/env node

// Jennifer Lyver
// 01/21/2024 - 01/23/2024
//Description: CLI app that uses flags to generate a random password

const process = require('node:process'); 
const argv = process.argv.slice(2); //removes the first two arguments from the array.

// Constants for character encoding.  
    // They CANNOT be the same values.
const CHAR_LOWER = 0
const CHAR_UPPER = 1
const CHAR_NUMBER = 2
const CHAR_SPECIAL = 3

//defaults
let length = 8;
let upperCaseBool = true;
let numberBool = true;
let specialCharactersBool = true;
let defaultFlags = true;

main(argv);

function main(args) {
    parseArguments(args);
    let characterArray = generateCharacterArray(upperCaseBool, numberBool, specialCharactersBool);
    let passwordFormat = generatePasswordFormat(characterArray, length);
    let password = generatePassword(passwordFormat);

    console.log(`
    Password Generator
    Length: ${length} | Upper Case = ${upperCaseBool} |Numbers = ${numberBool} | Special Characters = ${specialCharactersBool}
    Password: ${password}
    `);
    return;
}

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
    for (let i = passwordFormat.length; i < length; i++) {
        passwordFormat.push(characterArray[getRandom(passwordFormat.length)]);
    }
    return passwordFormat;
}

function generatePassword(passwordFormat) {
    let password = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let specialCharacters = "!@#$%^&*()_+";

    for (let characterType of passwordFormat) { 
        switch (characterType) {
            case CHAR_LOWER:
                password += alphabet[getRandom(alphabet.length)];
                break;

            case CHAR_UPPER:
                password += alphabet.toUpperCase()[getRandom(alphabet.length)];
                break;

            case CHAR_NUMBER:
                password += Math.floor(getRandom(10));
                break;
            
            case CHAR_SPECIAL:
                password += specialCharacters[Math.floor(getRandom(specialCharacters.length))];
                break;
            default:
                help();
                throw new Error (`\nInvalid character type: "${characterType}"`);
        }
    }
    return password; 
}

function getRandom (length) {
    return Math.floor(Math.random() * length);
}

function help () {
    console.log(`
    Password Generator
    Flags:
    -u, --upper           : Include uppercase characters   :  Default: true
    -n, --number          : Include numbers                :  Default: true
    -s, --special         : Include special characters     :  Default: true
    -l, --length=<length> : Set the length of the password :  Default: 8 | Min: 4

    Note: Character flags all default to true if no charcter flags are provided,
          if one character flag is specified, the others will default to false.
          if a number less than 4 is provided no password will be generated.
    `);
    return;
}

function resetDefaultFlags(bool) {
    if (!bool) {
        return;
    }
    if (bool) {
        defaultFlags = false;
        upperCaseBool = false; 
        numberBool = false;
        specialCharactersBool = false;
        return;
    }
}

function parseArguments(args) {
    if (arguments.length === 0) {
        return;
    };
    for (let i = 0; i < args.length; i++) {
        let arg = args[i].split('='); 
        switch (arg[0]) { 
            case '-h':
            case '--help':
                help();
                process.exit(0);
            case '-l':
            case '--length':
                if (arg.length === 2) {
                    length = parseInt(arg[1]);
                    if (isNaN(length) || length < 4) {
                        help();
                        throw new Error (`\nInvalid length: "${arg[1]}": must be a positive integer greater than or equal to 4`);
                        
                    }
                    break; 
                } else { 
                    help();
                    throw new Error(`\nInvalid length: "${args[i]}": use -h or --help for more information`); 
                }
            case '-u':
            case '--upper':
                resetDefaultFlags(defaultFlags);
                upperCaseBool = true;
                break;

            case '-n':
            case '--number':
                resetDefaultFlags(defaultFlags);
                numberBool = true;
                break;

            case '-s':
            case '--special':
                resetDefaultFlags(defaultFlags); 
                specialCharactersBool = true;
                break;
            default:
                help();
                throw new Error (`\nInvalid flag: "${args[i]}":use -h or --help for more information`);
        }
    }
}

