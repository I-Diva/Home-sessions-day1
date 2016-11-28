'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('./getPrimes.js');

describe('Return prime numbers generated from 0 to n in an array`', function() {

  it('should return [2] for n = 2', function() {

    expect(myApp.getPrimes(2)).to.eql([2]);

  });
  it('should return [2, 3, 5, 7] for n = 10', function() {

    expect(myApp.getPrimes(10)).to.eql([2, 3, 5, 7]);

  });
})
