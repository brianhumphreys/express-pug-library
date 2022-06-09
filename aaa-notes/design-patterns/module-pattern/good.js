A closure is a function with access to the parent scope, even after the parent function has closed. They help us mimic the behavior of access modifiers through scoping. Let’s show this via an example

// we  used an immediately invoked function expression
// to create a private variable, counter
var counterIncrementer = (function () {
  var counter = 0;

  return function () {
    return ++counter;
  };
})();

// prints out 1
console.log(counterIncrementer());
// prints out 2
console.log(counterIncrementer());
// prints out 3
console.log(counterIncrementer());
