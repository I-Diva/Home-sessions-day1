var User = require('./oop').User;

function Employee(joinDate, salary, dept) {
  'use strict';
  this.joinDate = joinDate;
  this.salary = salary;
  this.dept = dept;
}

Employee.prototype = new User();

Employee.prototype.annualSalary = function() {
  'use strict';
  return this.salary * 12;
};

Employee.prototype.toString = function() {
  'use strict';
  return this.toString + ' Salary: ' + this.annualSalary();
};


module.exports = {
  Employee: Employee
};
