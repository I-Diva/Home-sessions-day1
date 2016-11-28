function User(firstname, lastname, ethnicity, gender, job, age) {
  'use strict';
  this.firstname = firstname || 'Tess';
  this.lastname = lastname || 'Bob';
  this.ethnicity = ethnicity;
  this.gender = gender || 'Female';
  this.job = job;
  this.age = age;
}

User.prototype.sayHi = function() {
  'use strict';
  return 'Hi';
};

User.prototype.toString = function() {
  'use strict';
  return this.firstname + ' ' + this.lastname + ', ' + this.gender +
    ', ' + this.ethnicity + ', ' + this.job;
};

User.prototype.isPetite = function() {
  'use strict';
  return this.firstname + ', ' + this.lastname + ' is petite';
};

User.prototype.isSeniorCitizen = function() {
  'use strict';
  return this.age > 50;
};


module.exports = {
  User: User
};
