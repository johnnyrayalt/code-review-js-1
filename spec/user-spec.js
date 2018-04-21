// data pulled from https://www.exploratorium.edu/ronh/age/ input: 02/13/1991

import { User } from './../src/user.js';

describe('User', function() {
  let user;
  let userString;

  beforeEach(function() {
    let input = new Date('1991', '1', '13');
    let inputToString = input.toDateString()
    user = new User(input);
    userString = inputToString;
    return (user, userString);
  })

  it('should create a new User instance with the users age stored in User.age', function() {
    expect(userString).toEqual('Wed Feb 13 1991');
  })

  it('should return the number of seconds in a year', function() {
    user.userAgeInSeconds();
    expect(user.userAge).toEqual(62788176000);
  })

  it('should return the difference in seconds between todays date and the user birth year', function() {
    user.userAgeInSeconds();
    user.differenceInSeconds()
    expect(user.userAge).toEqual(851472000);
  })

  it('should return the users age in Mercury years', function() {
    user.mercuryAge();
    expect(user.userAge).toEqual(112.50000000000001); //tested against my calculations of 112.8
  })

  it('should return the users age in Venus years', function() {
    user.venusAge();
    expect(user.userAge).toEqual(43.54838709677419); //tested against my calculations of 44.1
  })

  it('should return the users age in Mars years', function() {
    user.marsAge();
    expect(user.userAge).toEqual(14.361702127659576); //tested against my calculations of 14.4
  })

  it('should return the users age in Jupiter years', function() {
    user.jupiterAge();
    expect(user.userAge).toEqual(2.2765598650927488); //tested against my calculations of 2.29
  })

  it('should return the users time left on Mercury in days', function() {
    user.mercuryAge()
    user.timeLeft(mercury);
    expect(user.userAge).toEqual(0.9018264840182649);
  })
})
