import { Person } from "./Person.js";

export class Guest extends Person {
  #reservations = [];

  addReservation(reservation) {
    this.#reservations.push(reservation);
  }
}