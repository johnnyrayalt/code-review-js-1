class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.earth = (365 * 24 * 3600);
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
  }

  userAgeInSeconds() {
    let userAgeInSeconds = (this.userAge * this.earth);
    this.userAge = userAgeInSeconds;
  }

  differenceInSeconds() {
    let todaysDate = new Date();
    this.userAge = ((todaysDate.getFullYear() * this.earth) - this.userAge);
    console.log(this.userAge);
  }

  mercury() {
    
  }

}

export { User };



// let date = new Date();
// let dateToString = date.toDateString();
// let userAge = this.userAge;
