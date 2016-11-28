'use strict';
var chai = require('chai');
var expect = chai.expect;
var Employee = require('./employee').Employee;
var User = require('./oop').User;

(function() {
  describe('Employee Class: Creates a user', function() {
    it('The employee should be a type of `object`, and an instance of the `Employee` class', function() {
      var segun = new Employee('segun');
      expect(typeof segun).to.equal(typeof {});
      expect(segun instanceof Employee).to.be.ok;
    });

    it('Employee should be an instance of User', function() {
      var employee = new Employee();
      expect(employee instanceof User).to.be.ok;
    });

    it('Employee should inherit user properties', function() {
      var employee = new Employee();
      expect(employee.firstname).to.equal('Tess');
      expect(employee.lastname).to.equal('Bob');
    });

    it('should calculate the annual employee salary', function() {
      var employee = new Employee(new Date(), 12000, 'Technology');
      expect(employee.annualSalary()).to.equal(12000 * 12);
    });
  });
})();
