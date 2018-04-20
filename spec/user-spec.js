import { User } from './../src/user.js';
// import { Earth } from './../src/earth.js';

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
})
