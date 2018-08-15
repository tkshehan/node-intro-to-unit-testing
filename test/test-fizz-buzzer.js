const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return "fizz-buzz" on multiples of 15', function() {
    const multiplesOfFifteen = [
      15,
      -15,
      3000000,
      -150000
    ];
    multiplesOfFifteen.forEach(function(input) {
      const output = fizzBuzzer(input);
      expect(output).to.equal('fizz-buzz');
    })
  });

  it('should return "fizz" on multiples of 3', function() {
    const multiplesOfThree = [
      -3,
      3,
      6,
      -18,
      30000003
    ];
    multiplesOfThree.forEach(function(input) {
      const output = fizzBuzzer(input);
      expect(output).to.equal('fizz');
    });
  });

  it('should return "buzz" on multiples of 5', function() {
    const multplesOfFive = [
      5,
      10,
      -5,
      -10,
      -1000000,
    ];
    multplesOfFive.forEach(function(input) {
      const output = fizzBuzzer(input);
      expect(output).to.equal('buzz');
    })
  });

  it('should return the same number if not a multiple of 3 or 5', function() {
    const nonMultipleInputs = [
      1,
      2,
      -2,
      7,
      991,
      -997
    ];
    nonMultipleInputs.forEach(function(input) {
      const output = fizzBuzzer(input);
      expect(output).to.equal(input);
    });
  });

  it('should throw an error if arg is not a number', function() {
    const badInputs = [
      true,
      false,
      '3',
      {an: 'object'},
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});