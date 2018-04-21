class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.todaysDate = new Date().getFullYear();
    this.lifeExpectancy = (79 * 365); //avg life expectancy in the US in days // 28835
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
    this.userAge = (((this.todaysDate - this.userAge) * 365) / (this.planets[planets] * 365));
    console.log(this.userAge);
  }

  timeLeft(planets) { // (365 * 1.88)
    const lifeExpectancyOnPlanet = (this.lifeExpectancy / (this.planets[planets] * 365)) // avg life expectancy on mercury is 329.1666666666667 years
    this.userAge = (lifeExpectancyOnPlanet - this.userAge);
    console.log(this.userAge);
  }


}
export { User };
