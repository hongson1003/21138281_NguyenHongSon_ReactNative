// Base class for Car
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // speed in km/h
    }
  
    // Method to increase speed and allow chaining
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this; // Enable chaining
    }
  
    // Method to decrease speed and allow chaining
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this; // Enable chaining
    }
  }
  
  // Electric Car class extending CarCl
  class EVCl extends CarCl {
    #charge; // Private field for battery charge
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge; // Initialize charge
    }
  
    // Method to charge the battery and allow chaining
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make} is now charged to ${this.#charge}%`);
      return this; // Enable chaining
    }
  
    // Override accelerate method to include battery charge logic and allow chaining
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
      return this; // Enable chaining
    }
  }
  
  // Test data
  const rivian = new EVCl('Rivian', 120, 23);
  
  // Testing method chaining
  rivian.accelerate()
        .accelerate()
        .brake()
        .chargeBattery(90)
        .accelerate();
  