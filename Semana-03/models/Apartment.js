import { Property } from "./Property.js";

export class Apartment extends Property {
  #floorNumber;

  constructor(name, location, price, capacity, floorNumber) {
    super(name, location, price, capacity);
    this.#floorNumber = floorNumber;
  }

  get floorNumber() {
    return this.#floorNumber;
  }

  getInfo() {
    return `🏢 Apartamento: ${this.name} - Piso ${this.#floorNumber}`;
  }
}