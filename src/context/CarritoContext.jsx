import { createContext } from "react";

export const CarritoContext = createContext();

/*Aqui viven toddos estos estados: (se enviaron desde app que es donde viven y se pueden "recibir" desde cualquier otro componente hijo)
        carrito,
        setCarrito,
        mostrarCarrito,
        setMostrarCarrito,
        aumentarCantidad,
        restarCantidad,
        vaciarCarrito
 */