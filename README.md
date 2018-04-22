# Super Galactic Age Calculator

###### A simple app that takes a users age as an input and outputs their age in Mercury, Mars, Venus, and Jupiter years.

###### By Johnny Ray Alt

#### Specs

| Spec | Input | Output |
|------|-------|--------|
|Program takes a persons age and converts it into seconds | Users Age | Users Age in Seconds|
| Take two dates and determine the difference, in seconds, between the two | Users Age & Current Year| (Current Year- Users Age) |
| Return the age of a human in Mercury years | Users Age = x | (Todays Year - x) / .24 |
| Return the age of a human in Venus years| Users Age = x | (Todays Year - x) / .62 |
| Return the age of a human in Mars years| Users Age = x | (Todays Year - x) / 1.88 |
| Return the age of a human in Jupiter years| Users Age = x | (Todays Year - x) / 11.86 |
| Determine how many years a user has left to live on each planet and if they have already lived passed that age relative to the years of the planet | Users Age = x Planet Input = y | (79 / y) - x |

79 is the average life expectancy in the US.

#### Set up / Install requirements

* Open terminal
* run `$ git clone https://github.com/johnnyrayalt/code-review-js-1`
* run `$ npm install` to download dependancies
* run `$ npm run start` to boot up a local dev server on port 8080
* run `$ npm test` to initialize KARMA and run tests from the /spec/ directory

#### Support and Contact

johnnyrayalt@gmail.com

#### Technologies used

Node.js, Node Package Manager, Karma, Jasmine
