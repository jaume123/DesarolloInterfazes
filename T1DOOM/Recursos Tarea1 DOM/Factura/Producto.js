export default class Producto{
#Nombre
#Precio
#Descripcion
 Producto(nombre , precio ,descripcion){
    this.#Nombre = nombre;
    this.#Descripcion = descripcion;
    this.#Precio = precio;
 }

 getNombre = () => this.#Nombre;
 setNombre = (value) => this.#Nombre = value; 
}