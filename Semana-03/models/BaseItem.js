// Clase base abstracta
export class BaseItem {
  #id;
  #name;
  #active;
  #location;
  #dateCreated;

  constructor(name, location) {
    if (this.constructor === BaseItem) {
      throw new Error("No se puede instanciar una clase abstracta");
    }

    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#location = location;
    this.#active = true;
    this.#dateCreated = new Date();
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get isActive() {
    return this.#active;
  }

  get location() {
    return this.#location;
  }

  get dateCreated() {
    return this.#dateCreated;
  }

  set location(value) {
    if (!value || value.length < 3) {
      throw new Error("Ubicación inválida");
    }
    this.#location = value;
  }

  activate() {
    this.#active = true;
  }

  deactivate() {
    this.#active = false;
  }

  getType() {
    return this.constructor.name;
  }

  getInfo() {
    throw new Error("Debe implementar getInfo()");
  }
}