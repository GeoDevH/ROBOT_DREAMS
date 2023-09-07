console.log ('hello world!');

class Vehicle {
  constructor(height, width, weight, color) {
      this.height = height;
      this.width = width;
      this.weight = weight;
      this.color = color;
  }

  getHeight() {
      return this.height;
  }

  getWidth() {
      return this.width;
  }

  getWeight() {
      return this.weight;
  }

  getColor() {
      return this.color;
  }
}

class Car extends Vehicle {
  constructor(height, width, weight, color, numberOfDoors, maxPassengers) {
      super(height, width, weight, color);
      this.numberOfDoors = numberOfDoors;
      this.maxPassengers = maxPassengers;
  }

  getNumberOfDoors() {
      return this.numberOfDoors;
  }

  getMaxPassengers() {
      return this.maxPassengers;
  }
}

class Bike extends Vehicle {
  constructor(height, width, weight, color, numberOfWheels) {
      super(height, width, weight, color);
      this.numberOfWheels = numberOfWheels;
  }

  getNumberOfWheels() {
      return this.numberOfWheels;
  }
}

const car = new Car(150, 200, 1500, "Red", 4, 5);
const bike = new Bike(100, 150, 20, "Black", 2);

console.log("Information about car:");
console.log("Height:", car.getHeight());
console.log("Width:", car.getWidth());
console.log("Weight:", car.getWeight());
console.log("Color:", car.getColor());
console.log("Number of doors:", car.getNumberOfDoors());
console.log("Max Passengers:", car.getMaxPassengers());

console.log("\nInformation about bike:");
console.log("Height:", bike.getHeight());
console.log("Width:", bike.getWidth());
console.log("Weight:", bike.getWeight());
console.log("Color:", bike.getColor());
console.log("Number of wheels:", bike.getNumberOfWheels());
