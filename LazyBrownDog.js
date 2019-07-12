/*
Author: John Sprunger
Email: johnleesprunger@gmail.com
url: https://github.com/LevelEleven/candidate-exercises
Description: Given an input string, return all of the 
characters a-z (case insensitive) that are not present 
in the input string.
*/
const removeChars = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = str.toLowerCase().replace(/[^a-z]/g, '');
    let strSet = new Set(newStr.split(""));
    let alphaSet = new Set(alphabet.split(""));

    for (i of strSet) {
        alphaSet.delete(i);
    }

    return [...alphaSet].join('');
}

module.exports = removeChars;

/*
// Test Cases
// Expected Result: ""
console.log(removeChars("abcdefghijklmnopqrstuvwxyz"));
// Expected Result: ""
console.log(removeChars("The quick brown fox jumps over the lazy dog"));
// Expected Result: "abcdefghijklmnopqrstuvwxyz"
console.log(removeChars(""));
// Expected Result: "abcdfghijklmnopqruvwxyz"
console.log(removeChars("TeST"));
// Expected Result: "abcdfgijkmnopqrstuvwxyz"
console.log(removeChars("hell0"));
*/