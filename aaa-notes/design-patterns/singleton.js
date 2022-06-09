// ES2015+ keywords/syntax used: const, let, arrow function syntax
//          class, constructor

// options: an object containing configuration options for the singleton
// e.g const options = { name: "test", pointX: 5};
class Singleton {
  constructor(options = {}) {
    // set some properties for our singleton
    this.name = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }
}

// our instance holder
let instance;

// an emulation of static variables and methods
const SingletonTester = {
  name: "SingletonTester",
  // Method for getting an instance. It returns
  // a singleton instance of a singleton object
  getInstance(options) {
    if (instance === undefined) {
      instance = new Singleton(options);
    }

    return instance;
  },
};

const singletonTest = SingletonTester.getInstance({
  pointX: 5,
});

// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log(singletonTest.pointX);
