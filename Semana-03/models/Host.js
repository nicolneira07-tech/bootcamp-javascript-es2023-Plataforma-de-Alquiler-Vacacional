import { Person } from "./Person.js";

export class Host extends Person {
  #properties = [];

  addProperty(property) {
    this.#properties.push(property);
  }
}