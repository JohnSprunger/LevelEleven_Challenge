/*
Author: John Sprunger
Email: johnleesprunger@gmail.com
url: https://github.com/LevelEleven/candidate-exercises
Description: Given an input string, return true if the parentheses, brackets, 
and braces are correctly balanced. All types of braces can contain the same or 
a different type, but the child expression(s) must be closed before the parent(s). 
If the string fails this test, return false.
*/
const bracketBuster = (str) => {
    let stack = [];

    const fullBrackets = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    const rightBracket = {
        '}': true,
        ']': true,
        ')': true
    };

    for (c of str) {
        if (fullBrackets[c]) { 
            stack.push(c);
        } else if (rightBracket[c]) { 
            if (fullBrackets[stack.pop()] !== c) return false;
        }
    }

    return stack.length === 0; 
};

module.exports = bracketBuster;

/*
// Test Cases
// Expected Results: true
console.log(bracketBuster("")); 
// Expected Results: true
console.log(bracketBuster("()")); 
// Expected Results: true
console.log(bracketBuster("(())")); 
// Expected Results: true
console.log(bracketBuster("hello() (world)")); 
// Expected Results: true
console.log(bracketBuster("c[] reverse(c[] input) { ; }")); 
// Bellow test string will not compile  
/*console.log(bracketBuster("c[] reverse(c[] input) { 
    ; 
}"));*/
/*
// Expected Results: false
console.log(bracketBuster("[{]}")); 
// Expected Results: false
console.log(bracketBuster("([{ () ])}")); 
// Bellow test string will not compile
/*console.log(bracketBuster("([{
    ()
    ])}"));
// Expected Results: false    
console.log(bracketBuster("([{")); 
*/