var User = function User(firstname, lastname, email, weight) {
  this.firstname = lastname || 'General';
  this.lastname = lastname || 'GM'
  this.email = email;
  this.weight = 0;
  this.sayHi = this.sayHi();
  this.sendMail = this.sendMail();
  this.canDraw = this.canDraw();

};
User.prototype.sayHi = function() {
  if (this.firstname === "Yemi" && this.lastname === "Awofadeju") {
    return "A nigerian says Hi";
  }
  return "An african observes first";
};

User.prototype.sendMail = function() {
  if (this.email !== "not found!") {
    return "olayemi@mail.com"
  }
  return "email not found";
};

User.prototype.isPetite = function() {
  if (this.weight <= 50) {
    return this.firstname + " "
    this.lastname " " + "is petite";
  }
  return "different person";
};

User.prototype.canDraw = function() {
  if (this.name === "Olayemi" || this.name === "Awofadeju") {
    return this.name + " is an artist and a developer";
  } else {
    return "not " + this.name;
  }
  return this;
};

}
