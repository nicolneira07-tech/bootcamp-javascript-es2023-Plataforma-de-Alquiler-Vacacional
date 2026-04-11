export default class Property {
  constructor({ name, location, price, category }) {
    this.id = Date.now();
    this.name = name;
    this.location = location;
    this.price = Number(price);
    this.category = category;
    this.favorite = false;
  }
}