// import { Earth } from './earth.js'

class User {
  constructor(userAge) {
    this.userAge = userAge;
    this.earth;
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
    this.earthSeconds = (365 * 24 * 3600);
  }

  userAgeInSeconds() {
    let userAge = this.userAge.getFullYear();
    let userAgeInSeconds = (userAge * this.earthSeconds);
    this.userAge = userAgeInSeconds;
  }

  differenceInSeconds() {
    let todaysDate = new Date();
    let userAge = this.userAge;
    this.userAge = ((todaysDate.getFullYear() * this.earthSeconds) - userAge);
    console.log(this.userAge);
  }

}

export { User };



// let date = new Date();
// let dateToString = date.toDateString();
// let userAge = this.userAge;
