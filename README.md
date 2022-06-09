
### BOILER PLATE
`express express-locallibrary-tutorial --view=pug`
`cd express-locallibrary-tutorial`
`npm install`

`DEBUG=express-locallibrary-tutorial:* npm start`

`npm install --save-dev nodemon`

"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
},

`npm install mongoose`



======
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
=======

refer to schemas below

create a populate.js file for testing purposes

`npm install async`

`node populatedb <your mongodb url>`

install time formatting library

`npm install luxon`

perform validation and sanitization of request forms

`npm install express-validator`
`const { body,validationResult } = require("express-validator");`

### Testing Setup
`npm i mongodb-memory-server jest`

### Testing boiler plate
check test/db.js and test/validator.js for boiler plate.


### Test endpoints
`npm install supertest --save-dev`




### BASIC SCHEMA
var BreakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea', 'Water',]
  },
  mixed: Schema.Types.Mixed, // an arbitrary schema type
  _someId: Schema.Types.ObjectId, // represents specific instances of a model in the database. can call `populate()` to replace with object data instead of object ID
});
var BreakfastModel = mongoose.model('BreakfastModel', BreakfastSchema );

https://mongoosejs.com/docs/queries.html

### EXAMPLE QUERY
```
Athlete.
    find().
    where('sport').equals('Tennis').
    where('age').gt(17).lt(50).  //Additional where query
    limit(5).
    sort({ age: -1 }).
    select('name age').
    exec(callback); // where callback is the name of our callback function.
```

Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})

var query = Athlete.find({ 'sport': 'Tennis' });
query.select('name age');
query.limit(5);
query.sort({ age: -1 });
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})


### EXAMPLE QUERY HELPER
animalSchema.query.byName = function(name) {
  return this.where({ name: new RegExp(name, 'i') })
};


### RELATED DOCUMENT
after query, you can call `populate()` to populate fields with type `Schema.Types.ObjectId[s]`

### ONE TO MANY RELATIONSHIP
## defining
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }] // ARRAY OF IDS
});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);

## saving
var bob = new Author({ name: 'Bob Smith' });

bob.save(function (err) {
  if (err) return handleError(err);

  //Bob now exists, so lets create a story
  var story = new Story({
title: "Bob goes sledding",
author: bob._id    // assign the _id from our author Bob. This ID is created by default!
  });

  story.save(function (err) {
if (err) return handleError(err);
// Bob now has his story
  });
});
## reading
Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Bob Smith"
});

### Virtual
## simple virtual property that isnt stored in db
const userSchema = mongoose.Schema({
  email: String
});
// Create a virtual property `domain` that's computed from `email`.
userSchema.virtual('domain').get(function() {
  return this.email.slice(this.email.indexOf('@') + 1);
});
const User = mongoose.model('User', userSchema);

let doc = await User.create({ email: 'test@gmail.com' });
// `domain` is now a property on User documents.
doc.domain; // 'gmail.com'

## getters and setters
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});
// Create a virtual property `fullName` with a getter and setter.
userSchema.virtual('fullName').
  get(function() { return `${this.firstName} ${this.lastName}`; }).
  set(function(v) {
// `v` is the value being set, so use the value to set
// `firstName` and `lastName`.
const firstName = v.substring(0, v.indexOf(' '));
const lastName = v.substring(v.indexOf(' ') + 1);
this.set({ firstName, lastName });
  });
const User = mongoose.model('User', userSchema);

const doc = new User();
// Vanilla JavaScript assignment triggers the setter
doc.fullName = 'Jean-Luc Picard';

doc.fullName; // 'Jean-Luc Picard'
doc.firstName; // 'Jean-Luc'
doc.lastName; // 'Picard'

## ignore virtuals with `.lean()`
const fullDoc = await User.findOne();
fullDoc.domain; // 'gmail.com'

const leanDoc = await User.findOne().lean();
leanDoc.domain; // undefined






### CONTROLLERS


### async
## parallel
async.parallel({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback
  function(err, results) {
// 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}
  }
);

## series
async.series({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback after the last asynchronous function completes.
  function(err, results) {
// 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}
  }
);

## series when subsequent dependencies
async.series([
  function(callback) {
// do some stuff ...
callback(null, 'one');
  },
  function(callback) {
// do some more stuff ...
callback(null, 'two');
  }
 ],
  // optional callback
  function(err, results) {
  // results is now equal to ['one', 'two']
  }
);



### VIEWS
### pug template primer link
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer



### VALIDATORS
## Starting
`const { body,validationResult } = require("express-validator");`

## Validators
Trim whitespace, check is not empty, remove js tags to stop XSS attacks
`body('name', 'Empty name').trim().isLength({ min: 1 }).escape(),`

`body('age', 'Invalid age').optional({ checkFalsy: true }).isISO8601().toDate(),`

Give message if previous validators fail.
`body('name').trim().isLength({ min: 1 }).withMessage('Name empty.').isAlpha().withMessage('Name must be alphabet letters.'),`






### Design patterns

https://www.patterns.dev/posts/classic-design-patterns/#observerpatternjavascript





### SSH
`ssh -v -p 24601 user@IP-Address`