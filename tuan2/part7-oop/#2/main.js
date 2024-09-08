// Task 1: Re-create Challenge #1 using an ES6 class
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // speed in km/h
    }
  
    // Task 2: Implement 'accelerate' method
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Task 2: Implement 'brake' method
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Task 2: Add a getter 'speedUS' to return speed in mi/h
    get speedUS() {
      return this.speed / 1.6; // converting km/h to mi/h
    }
  
    // Task 3: Add a setter 'speedUS' to set speed in mi/h and convert to km/h
    set speedUS(speed) {
      this.speed = speed * 1.6; // converting mi/h to km/h
    }
  }
  
  // Task 4: Create a new car and experiment with methods, getter, and setter
  const car1 = new CarCl('Ford', 120);
  
  // Testing accelerate and brake methods
  car1.accelerate(); // Ford is going at 130 km/h
  car1.brake();      // Ford is going at 125 km/h
  
  // Testing the getter 'speedUS'
  console.log(`Current speed in mi/h: ${car1.speedUS}`); // 125 km/h -> 78.125 mi/h
  
  // Testing the setter 'speedUS'
  car1.speedUS = 75; // 75 mi/h is set, which converts to 120 km/h
  console.log(`Current speed in km/h after setting speedUS: ${car1.speed}`); // 120 km/h
  