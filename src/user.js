class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.todaysDate = new Date().getFullYear();
    this.age = ((this.todaysDate - this.userAge) * 365); //users age in days
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

  // differenceInSeconds(planets) {
  //   this.userAge = ((this.todaysDate * this.planets[planets]) - this.userAge);
  // }
  //
  // planetsAge(planets) {
  //   this.userAge = (this.age / this.planets[planets]);
  //   console.log(this.userAge);
  // }

  // timeLeft(planet) { // (365 * 1.88)
  //   let planetLifeExpect = (this.lifeExpectancy / (planet * 365)); // ((28835 * 365) / ((365 * 1.88) * 365)) = ~42
  //   let timeLeft = (planetTime - this.age);
  //
  //   console.log(timeLeft);
  //   // (this.timeLeft >= this.userAge)
  //
  //   // this.userAge = this.timeLeft;
  //
  // }


}
export { User };
