(function() {
  'use strict';
  describe("User Class: Create a create, make it Nigerian", function() {

    it("The user should be a type of `object`, and an instance of the `User` class", function() {
      var segun = new User('segun');
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

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var man = new Car('MAN', 'Truck', 'trailer');
      expect(man.numOfWheels).to.equal(8);
      expect(man.isSaloon).to.equal(false);

      var koenigsegg = new Car('Koenigsegg', 'Agera R');
      expect(koenigsegg.numOfWheels).to.equal(4);
      //expect(koenigsegg.isSaloon).to.beTruthy();
    });

    it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var man = new Car('MAN', 'Truck', 'trailer');
      expect(man.speed).to.equal('0 km/h');
      man.drive(7);
      expect(man.speed).to.equal('77 km/h');
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man = new Car('MAN', 'Truck', 'trailer');
      var drivingMan = man.drive(7);
      //expect(drivingMan instanceof Car).to.beTruthy();
      expect(typeof drivingMan.drive).to.equal(typeof(function() {}));
      expect(man.speed).to.equal(drivingMan.speed);
    });

  });
})();
