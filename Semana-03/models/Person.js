export class Person {
  #id;
  #name;
  #email;
  #registrationDate;

  constructor(name, email) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.email = email;
    this.#registrationDate = new Date();
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Email inválido");
    }
    this.#email = value;
  }
}