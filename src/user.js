// import { Earth } from './earth.js'

class User {
  constructor(userAge) {
    this.userAge = userAge;
    this.earth;
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
  }

  userAgeInSeconds() {
    const yearInSeconds = (365 * 24 * 3600);
    let userAge = this.userAge.getFullYear();
    let userAgeInSeconds = (userAge * yearInSeconds);
    this.userAge = userAgeInSeconds;
    console.log(userAgeInSeconds);
  }

}

export { User };



// let date = new Date();
// let dateToString = date.toDateString();
// let userAge = this.userAge;
