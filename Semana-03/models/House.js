import { Property } from "./Property.js";

export class House extends Property {
  #floors;

  constructor(name, location, price, capacity, floors) {
    super(name, location, price, capacity);
    this.#floors = floors;
  }

  get floors() {
    return this.#floors;
  }

  getInfo() {
    return `🏠 Casa: ${this.name} - ${this.location} - $${this.price}`;
  }
}