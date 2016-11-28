var User = function User(firstname, lastname, weight) {
  'use strict'
  this.firstname = lastname || 'General';
  this.lastname = lastname || 'GM'
  this.weight = '0';
  this.sayHi = this.sayHi();
}
User.prototype.sayHi = function() {
  'use strict'
  return this.sayHi;
};

User.prototype.sendMail = function() {
  'use strict'
  return this.sendMail
};

User.prototype.isPetite = function() {
  'use strict'
  return this.firstname + " "
  this.lastname + " " + "is petite";
};

User.prototype.canDraw = function() {
  'use strict'
  if (this.name === "Olayemi" || this.name === "Awofadeju") {
    return this.name + " is an artist and a developer";
  } else {
    return "not " + this.name;
  }
  return this;
};

function femaleUser(firstname, lastname, weight) {
  User.call(this, firstname, lastname, weight);
}
femaleUser.prototype.sayHi = function() {
  console.log('Hi' + this.firstName);
};

var allUsers = [
  new femaleUser("Hello"),
  new femaleUser("I'm female"),
];


module.exports = {
  User: User
}
