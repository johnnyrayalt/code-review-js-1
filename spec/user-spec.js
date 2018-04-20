import { User } from './../src/user.js';

describe('User', function() {
  let user;

  beforeEach(function() {
    let input = new Date('1991-02-13');
    let inputToString = input.toDateString()
    user = new User(inputToString);
    return user;
  })

  it('should create a new User instance with the users age stored in User.age', function() {
    expect(user.userAge).toEqual('Tue Feb 12 1991');
  })
})
