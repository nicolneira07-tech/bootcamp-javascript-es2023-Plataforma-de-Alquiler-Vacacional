import { BaseItem } from "./BaseItem.js";

export class Property extends BaseItem {
  #price;
  #capacity;

  constructor(name, location, price, capacity) {
    super(name, location);
    this.#price = price;
    this.#capacity = capacity;
  }

  get price() {
    return this.#price;
  }

  get capacity() {
    return this.#capacity;
  }
}
