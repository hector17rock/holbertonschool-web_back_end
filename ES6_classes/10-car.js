export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species();
  }
}
