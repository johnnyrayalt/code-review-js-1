class User {
  constructor(userAge) {
    this.userAge = userAge.getFullYear();
    this.earth = (365 * 24 * 3600);
    this.todaysDate = new Date();
    this.mercuryYear = (365 * .24); // 87.6
    this.venusYear = (365 * .62); // 226.3
    this.marsYear = (365 * 1.88); // 686.19~
    this.jupiterYear = (365 * 11.86); // 4328.9
    this.lifeExectancy = (79 * 365); //avg life expectancy in the US // 28835
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

  venusAge() {
    this.userAge = (((this.todaysDate.getFullYear() - this.userAge) * 365) / this.venusYear);
  }

  marsAge() {
    this.userAge = (((this.todaysDate.getFullYear() - this.userAge) * 365) / this.marsYear);
  }

  jupiterAge() {
    this.userAge = (((this.todaysDate.getFullYear() - this.userAge) * 365) / this.jupiterYear);
  }

// TODO: solve x
  timeLeft(x) {

    const planet = {
      'mercury': this.mercuryYear,
      "venus": "venusYear",
      'mars': "marsYear",
      "jupiter": "jupiterYear"
    }

    this.userAge = (this.lifeExectancy / ((function(x) {
        x = `${planet}`
        return x;
      }) * 365)
    );
  }



}

export { User };
