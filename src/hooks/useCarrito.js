import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function useCarrito() {
    const contexto = useContext(CarritoContext);

    if (!contexto) {
        throw new Error(
            "useCarrito debe usarse dentro de CarritoContext.Provider"
        );
    }

    return contexto;
}

export default useCarrito;