import { Property } from "./Property.js";

export class Cabin extends Property {
  #hasFireplace;

  constructor(name, location, price, capacity, hasFireplace) {
    super(name, location, price, capacity);
    this.#hasFireplace = hasFireplace;
  }

  get hasFireplace() {
    return this.#hasFireplace;
  }

  getInfo() {
    return `🌲 Cabaña: ${this.name} - Chimenea: ${this.#hasFireplace}`;
  }
}
