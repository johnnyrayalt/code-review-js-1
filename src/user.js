class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.earth = (365 * 24 * 3600);
    this.todaysDate = new Date()
    this.mercuryYear = (365 * .24); //87.6
    this.venus;
    this.mars;
    this.jupiter;
  }

  userAgeInSeconds() {
    this.userAge = (this.userAge * this.earth);
  }

  differenceInSeconds() {
    this.userAge = ((this.todaysDate.getFullYear() * this.earth) - this.userAge);
  }

  mercuryAge() {
    this.userAge = (((this.todaysDate.getFullYear() - this.userAge) * 365) / this.mercuryYear);
  }

}

export { User };



// let date = new Date();
// let dateToString = date.toDateString();
// let userAge = this.userAge;
