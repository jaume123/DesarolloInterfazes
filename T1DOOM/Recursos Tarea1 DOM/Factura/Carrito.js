export default class Carrito{
    constructor(){
        this.productos = [];
       
    }
    agregarProducto(producto){
        this.productos.push(producto);
    
    }
    obtenerTotal(){
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    getProductos(){
        return this.productos;
    }   
    
}