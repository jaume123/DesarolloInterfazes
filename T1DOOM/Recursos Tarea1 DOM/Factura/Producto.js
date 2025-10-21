export default class Producto {
  #nombre
  #precio
  #descripcion

  constructor(nombre, precio, descripcion = '') {
    this.#nombre = nombre;
    this.#precio = Number(precio) || 0;
    this.#descripcion = descripcion;
  }

  getNombre() {
    return this.#nombre;
  }

  getPrecio() {
    return this.#precio;
  }

  getDescripcion() {
    return this.#descripcion;
  }

  setNombre(value) {
    this.#nombre = value;
  }

  setPrecio(value) {
    this.#precio = Number(value) || 0;
  }

  setDescripcion(value) {
    this.#descripcion = value;
  }
}