/*
Author: John Sprunger
Email: johnleesprunger@gmail.com
url: https://github.com/LevelEleven/candidate-exercises
Description: Given the following snippet of JavaScript 
code, submit a code review. Your code review can address 
anything you would normally address in a code review and 
is meant to be a very open-ended exercise. For reference, 
our frontend development team uses Airbnb JavaScript 
standards and ES7+
*/

/******************************
  ORIGINAL SNIPPET
******************************/
/**
Poor naming convention for variable
According to Airbnb rule 23.1, 
variables should not be single character
No semicolon after prompt call
Should use let over var for proper scoping 
Message doesn't convey enough information i.e.:
let num = prompt("Type a number and have the factorial returned");
**/
var n = prompt("Type a number.")

/**
Poor naming convention for function
According to Airbnb rule 23.2,
Use camelCase when naming functions 
Should be using fat arrow vs ES5 function
Base test case incorrect, should be testing for 
not one and return factorial formula
Base return missing semicolon 
else should return 1
**/
// const factorialCalc = (num) => {
var f = function(n) {
  // n != 1 
  if(n == 0) { 
      // num * factorialCalc(n - 1);
      return 0  
  } else {
    // return 1;
    return n * f(n - 1);  
  }
}

f(n);
/******************************/

/******************************
  MY SNIPPET
******************************/
let num = prompt("Type a number and have the factorial returned");

const factorialCalc = (num) => {
    return (num != 1) ? num * factorialCalc(num - 1) : 1;
}

//factorialCalc(num);
/******************************/