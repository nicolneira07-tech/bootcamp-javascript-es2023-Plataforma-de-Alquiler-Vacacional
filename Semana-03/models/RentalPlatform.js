export class RentalPlatform {
  #items = [];
  #users = [];
  #transactions = [];

  static {
    this.VERSION = "1.0.0";
    this.MAX_ITEMS = 1000;
  }

  addItem(item) {
    if (this.#items.length >= RentalPlatform.MAX_ITEMS) {
      throw new Error("Límite alcanzado");
    }
    this.#items.push(item);
  }

  removeItem(id) {
    this.#items = this.#items.filter(i => i.id !== id);
  }

  findItem(id) {
    return this.#items.find(i => i.id === id);
  }

  searchByName(query) {
    return this.#items.filter(i =>
      i.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterByType(type) {
    return this.#items.filter(i => i.getType() === type);
  }

  addUser(user) {
    this.#users.push(user);
  }

  addTransaction(tx) {
    this.#transactions.push(tx);
  }

  getStats() {
    return {
      totalItems: this.#items.length,
      totalUsers: this.#users.length,
      totalBookings: this.#transactions.length
    };
  }
}