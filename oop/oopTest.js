'use strict'
var chai = require('chai');
var expect = chai.expect;
var User = require('./oop.js').User;

(function() {
  'use strict';
  describe("User Class: Create a create, make it Nigerian", function() {

    it("The user should be a type of `object`, and an instance of the `User` class", function() {
      var segun = new User('segun'
);
      expect(typeof segun).to.equal(typeof {});
      //expect(honda instanceof Car).to.beTruthy();
    });

    it("The user should be called 'General' if no name is passed as a parameter", function() {
      var gm = new User();
      expect(gm.firstname).to.equal('General');
      expect(gm.lastname).to.equal('GM');
    });

    it("The user firstname and lastname should be a property of the car", function() {
      var sade = new User('Sade', 'Adu');
      expect(sade.firstname).to.equal('Sade');
      expect(sade.lastname).to.equal('Adu');
    });

    it("The user shoud be African except its a Yemi and Awofadeju", function() {
      var yemi = new User('Yemi', 'Awofadeju');
      expect(yemi.sendMail).to.equal('olayemi@mail.com');

      var tope = new User('Tope', 'Mobolade');
      expect(tope.weight).to.equal(70);
      tope.email('tope@mail.com');
      expect(tope.sendMail).to.equal('email not found');
      expect((function() {
        return new User('sola', 'Fosudo');
      }()).sayHi).to.equal('A nigerian says Hi');
    });

  });
})();
