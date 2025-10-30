const fs = require('fs');

function leerproductos() {
    try {
        const productos = require('./Productos.json');
        return productos;
    } catch (error) {
        console.error('Error al leer productos:', error);
        return [];
    }
}

function guardarproducto(nuevoProducto) {
    try {
        const productos = require('./Productos.json');
        const productoNuevo = {
            Nombre: nuevoProducto.nombre.trim(), // Eliminar espacios al inicio y final
            Precio: parseFloat(nuevoProducto.precio)
        };
        
        // Limpiar la lista actual de productos eliminando duplicados
        const productosLimpios = [];
        const nombresVistos = new Set();
        
        productos.forEach(p => {
            const nombreNormalizado = p.Nombre.trim();
            if (!nombresVistos.has(nombreNormalizado.toLowerCase())) {
                nombresVistos.add(nombreNormalizado.toLowerCase());
                productosLimpios.push({
                    Nombre: nombreNormalizado,
                    Precio: p.Precio
                });
            }
        });
        
        // Buscar si el producto ya existe
        const indiceExistente = productosLimpios.findIndex(
            p => p.Nombre.toLowerCase() === productoNuevo.Nombre.toLowerCase()
        );
        
        if (indiceExistente !== -1) {
            // Si existe, actualizar el precio
            productosLimpios[indiceExistente].Precio = productoNuevo.Precio;
        } else {
            // Si no existe, agregar el nuevo producto
            productosLimpios.push(productoNuevo);
        }
        
        // Guardar la lista limpia y actualizada
        fs.writeFileSync('./Productos.json', JSON.stringify(productosLimpios, null, 2));
        return true;
    } catch (error) {
        console.error('Error al guardar producto:', error);
        return false;
    }
}

function guardarFactura(nombreArchivo, factura) {
    try {
        // Crear directorio de facturas si no existe
        const dirFacturas = './facturas';
        if (!fs.existsSync(dirFacturas)) {
            fs.mkdirSync(dirFacturas);
        }
        
        // Guardar la factura en el directorio
        const rutaFactura = `${dirFacturas}/${nombreArchivo}`;
        fs.writeFileSync(rutaFactura, JSON.stringify(factura, null, 2));
        return true;
    } catch (error) {
        console.error('Error al guardar factura:', error);
        return false;
    }
}

function leerFacturas() {
    try {
        const dirFacturas = './facturas';
        if (!fs.existsSync(dirFacturas)) {
            return [];
        }
        const archivos = fs.readdirSync(dirFacturas);
        return archivos;
    } catch (error) {
        console.error('Error al leer facturas:', error);
        return [];
    }
}

function leerFactura(nombreArchivo) {
    try {
        const rutaFactura = `./facturas/${nombreArchivo}`;
        const contenido = fs.readFileSync(rutaFactura, 'utf8');
        return JSON.parse(contenido);
    } catch (error) {
        console.error('Error al leer factura:', error);
        return null;
    }
}

function modificarFactura(nombreArchivo, factura) {
    try {
        const rutaFactura = `./facturas/${nombreArchivo}`;
        fs.writeFileSync(rutaFactura, JSON.stringify(factura, null, 2));
        return true;
    } catch (error) {
        console.error('Error al modificar factura:', error);
        return false;
    }
}

function borrarFactura(nombreArchivo) {
    try {
        const rutaFactura = `./facturas/${nombreArchivo}`;
        fs.unlinkSync(rutaFactura);
        return true;
    } catch (error) {
        console.error('Error al borrar factura:', error);
        return false;
    }
}

module.exports = {
    leerproductos,
    guardarproducto,
    guardarFactura,
    leerFacturas,
    leerFactura,
    modificarFactura,
    borrarFactura
};