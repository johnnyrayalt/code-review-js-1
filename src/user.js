class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.todaysDate = new Date().getFullYear();
    this.lifeExpectancy = 79;
    this.planets = {
      'earth': 365,
      'mercury': .24,
      'venus': .62,
      'mars': 1.88,
      'jupiter': 11.86
    };
    this.timeLeft;
  }

  userAgeInSeconds(planets) {
    this.userAge = (this.userAge * (this.planets[planets] * 24 * 3600));
  }

  differenceInSeconds(planets) {
    this.userAge = ((this.todaysDate * (this.planets[planets] * 24 * 3600)) - this.userAge);
  }

  planetsAge(planets) {
    this.userAge = (((this.todaysDate - this.userAge)) / (this.planets[planets]));
  }

  timeLeft(planets) {
    const lifeExpectancyOnPlanet = (this.lifeExpectancy / (this.planets[planets]))
    this.userAge = (lifeExpectancyOnPlanet - this.userAge);
    this.userAge <= 0 ? (this.timeLeft = "nope") : (this.timeLeft = this.userAge);
  }


}
export { User };
