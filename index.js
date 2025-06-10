// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}


// 3. Function Returning a Function (Closure)
const wrapAdjective = function(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
};

// 2. Define Hoisting
// The following works because of hoisting (only works with function declarations)
hoistedFunction(); // Logs: "I'm hoisted!"

function hoistedFunction() {
  console.log("I'm hoisted!");
}

// 3. Define Function Expression
const razzle = function () {
  console.log("Yet more razzling");
};

// 4. Define Anonymous Function
// This is an anonymous function used as a callback
document.addEventListener("DOMContentLoaded", function () {
  console.log("Anonymous function executed on DOMContentLoaded");
});

// 5. Define a Function Using a Function Expression
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 6. Define an IIFE: Immediately-Invoked Function Expression
(function (baseNumber) {
  console.log(`IIFE result: ${baseNumber + 3}`);
})(2); // Outputs: IIFE result: 5

// 7. Define Function-Level Scope
function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  return innerFunction("student", "JavaScript");
}

// Test function-level scope
console.log(outer("Hello")); // "Hello, student! It's a fine day to learn JavaScript"

// 8. Define Scope Chain
function outerScope(greeting, msg = "Stay curious") {
  const inner = function (name) {
    const finalMessage = function () {
      return `${greeting}, ${name}! ${msg}.`;
    };
    return finalMessage();
  };
  return inner("Explorer");
}

// Test scope chain
console.log(outerScope("Hi")); // "Hi, Explorer! Stay curious."

// 9. Define Closure
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10 — Closure captures `factor`

