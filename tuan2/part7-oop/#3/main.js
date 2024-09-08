// Base constructor function for a regular Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed; // speed in km/h
  }
  
  // Method to increase speed
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Method to decrease speed
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Constructor function for Electric Car that extends Car
  function EV(make, speed, charge) {
    // Call the parent constructor function
    Car.call(this, make, speed);
    this.charge = charge; // battery charge in percentage
  }
  
  // Inherit methods from Car
  EV.prototype = Object.create(Car.prototype);
  EV.prototype.constructor = EV;
  
  // Method to charge the battery
  EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };
  
  // Override the accelerate method to include battery charge logic
  EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // Test data
  const tesla = new EV('Tesla', 120, 23);
  
  // Testing methods
  tesla.accelerate(); // Tesla is going at 140 km/h, with a charge of 22%
  tesla.brake();      // Tesla is going at 135 km/h
  tesla.chargeBattery(90); // Set charge to 90%
  tesla.accelerate(); // Tesla is going at 155 km/h, with a charge of 89%
  