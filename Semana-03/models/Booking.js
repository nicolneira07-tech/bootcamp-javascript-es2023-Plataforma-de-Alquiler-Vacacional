export class Booking {
  constructor(user, property) {
    this.id = crypto.randomUUID();
    this.user = user;
    this.property = property;
    this.date = new Date();
    this.status = "pending";
  }

  confirm() {
    this.status = "confirmed";
  }

  cancel() {
    this.status = "cancelled";
  }
}