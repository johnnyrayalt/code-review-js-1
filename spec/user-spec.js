// data pulled from https://www.exploratorium.edu/ronh/age/ input: 02/13/1991

import { User } from './../src/user.js';

describe('User', function() {
  let user;
  let userString;

  beforeEach(function() {
    let input = new Date('1991', '1', '13');
    user = new User(input);
    userString = input.toDateString()
    return (user, userString);
  })

//TEST 1
  it('should create a new User instance with the users age stored in User.age', function() {
    expect(userString).toEqual('Wed Feb 13 1991');
  })

//TEST 2
  it('should return the number of seconds in a year', function() {
    user.userAgeInSeconds('earth');
    expect(user.userAge).toEqual(62788176000);
  })

//TEST 3
  it('should return the difference in seconds between todays date and the user birth year', function() {
    user.userAgeInSeconds('earth');
    user.differenceInSeconds('earth');
    expect(user.userAge).toEqual(851472000);
  })

//TEST 4
  it('should return the users age in Mercury years', function() {
    user.planetsAge('mercury');
    expect(user.userAge).toEqual(112.5); //tested against my calculations of 112.8
  })

//TEST 5
  it('should return the users age in Venus years', function() {
    user.planetsAge('venus');
    expect(user.userAge).toEqual(43.54838709677419); //tested against my calculations of 44.1
  })

//TEST 6
  it('should return the users age in Mars years', function() {
    user.planetsAge('mars');
    expect(user.userAge).toEqual(14.361702127659575); //tested against my calculations of 14.4
  })

//TEST 7
  it('should return the users age in Jupiter years', function() {
    user.planetsAge('jupiter');
    expect(user.userAge).toEqual(2.2765598650927488); //tested against my calculations of 2.29
  })

//TEST 8
  it('should return the users time left on Mercury in years', function() {
    user.planetsAge('mercury');
    user.timeLeft('mercury');
    expect(user.userAge).toEqual(216.66666666666669);
  })

//TEST 9
  it('should return the users time left on Venus in years', function() {
    user.planetsAge('venus');
    user.timeLeft('venus');
    expect(user.userAge).toEqual(83.87096774193549);
  })

//TEST 10
  it('should return the users time left on Mars in years', function() {
    user.planetsAge('mars');
    user.timeLeft('mars');
    expect(user.userAge).toEqual(27.659574468085104);
  })

//TEST 11
  it('should return the users time left on Jupiter in years', function() {
    user.planetsAge('jupiter');
    user.timeLeft('jupiter');
    expect(user.userAge).toEqual(4.384485666104553);
  })

//TEST 12
  it('should return the users time left on Jupiter in years', function() {
    user.planetsAge('jupiter');
    user.timeLeft('jupiter');
    expect(user.timeLeft).toEqual(user.userAge);
  })
})
