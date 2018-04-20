import { User } from './../src/user.js';

describe('User', function() {
  let input;
  let user;

  beforeEach(function() {
    input = 27;
    user = new User(input);
    return user;
  })

  it('should create a new User instance with the users age stored in User.age', function() {
    expect(user.userAge).toEqual(27);
  })
})
