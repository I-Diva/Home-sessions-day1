'use strict';
var chai = require('chai');
var expect = chai.expect;
var User = require('./oop.js').User;

(function() {
  describe('User Class: Creates a user', function() {
    it('The user should be a type of `object`, and an instance of the `User` class', function() {
      var segun = new User('segun');
      expect(typeof segun).to.equal(typeof {});
      expect(segun instanceof User).to.be.ok;
    });

    it('The user should be called `Bob Tess` if no name is passed as a parameter', function() {
      var user = new User();
      expect(user.firstname).to.equal('Tess');
      expect(user.lastname).to.equal('Bob');
    });

    it('The user firstname and lastname should be a property of the user', function() {
      var sade = new User('Sade', 'Adu');
      expect(sade.firstname).to.equal('Sade');
      expect(sade.lastname).to.equal('Adu');
    });

    it('The user shoud be African', function() {
      var user = new User('Yemi', 'Awofadeju', 'African');
      expect(user.ethnicity).to.equal('African');
    });

    it('toString should return a string representation of the user', function() {
      var user = new User('Yusuf', 'Adeniyi', 'African', 'Male', 'Software Developer');
      expect(user.toString()).to.equal('Yusuf Adeniyi, Male, African, Software Developer');
    });

    it('should return true for senior citizens for people above 50', function() {
      var user = new User('Yusuf', 'Adeniyi', 'African', 'Male', 'Software Developer', 69);
      expect(user.isSeniorCitizen()).to.be.ok;
    });

    it('User should be able to say hi', function() {
      var user = new User();
      expect(user.sayHi()).to.equal('Hi');
    });
  });
})();
