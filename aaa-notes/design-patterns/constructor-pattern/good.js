// we define a constructor for Person objects
function Person(name, age, isDeveloper) {
  this.name = name;
  this.age = age;
  this.isDeveloper = isDeveloper || false;
}

// we extend the function's prototype
Person.prototype.writesCode = function () {
  console.log(
    this.isDeveloper
      ? "This person does write code"
      : "This person does not write code",
  );
};

// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode
var person1 = new Person("Bob", 38, true);
// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode
var person2 = new Person("Alice", 32);
