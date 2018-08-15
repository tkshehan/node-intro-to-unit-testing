const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return "fizz" on multiples of 3');
  it('should return "buzz" on multiples of 5');
  it('should return "fizz buzz" on multiples of 15');
  it('should return the same number if not a multiple of 3 or 5');
  it('should throw an error if arg is not a number');
});