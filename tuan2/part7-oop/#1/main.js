// Task 1: Constructor function to implement a 'Car'
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Task 2: Implement the 'accelerate' method
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Task 3: Implement the 'brake' method
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Task 4: Create 2 'Car' objects and experiment with 'accelerate' and 'brake'
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  // Testing car1
  car1.accelerate(); // BMW is going at 130 km/h
  car1.accelerate(); // BMW is going at 140 km/h
  car1.brake();      // BMW is going at 135 km/h
  car1.brake();      // BMW is going at 130 km/h
  
  // Testing car2
  car2.accelerate(); // Mercedes is going at 105 km/h
  car2.brake();      // Mercedes is going at 100 km/h
  car2.accelerate(); // Mercedes is going at 110 km/h
  car2.brake();      // Mercedes is going at 105 km/h
  