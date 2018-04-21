class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.todaysDate = new Date().getFullYear();
    this.age = ((this.todaysDate - this.userAge) * 365); //users age in years
    this.earth = (365 * 24 * 3600); //seconds in a year
    this.mercuryYear = (365 * .24); // 87.6
    this.venusYear = (365 * .62); // 226.3
    this.marsYear = (365 * 1.88); // 686.19~
    this.jupiterYear = (365 * 11.86); // 4328.9
    this.lifeExpectancy = (79 * 365); //avg life expectancy in the US // 28835
    this.timeLeft
  }

  userAgeInSeconds() {
    this.userAge = (this.userAge * this.earth);
  }

  differenceInSeconds() {
    this.userAge = ((this.todaysDate * this.earth) - this.userAge);
  }

  mercuryAge() {
    this.userAge = (this.age / this.mercuryYear);
  }

  venusAge() {
    this.userAge = (this.age / this.venusYear);
  }

  marsAge() {
    this.userAge = (this.age / this.marsYear);
  }

  jupiterAge() {
    this.userAge = (this.age / this.jupiterYear);
  }

  timeLeft(planet) {
    this.timeLeft = ((this.lifeExpectancy - this.age) / planet);

    this.userAge = this.timeLeft;

  }




}

export { User };
