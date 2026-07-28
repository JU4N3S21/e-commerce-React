import './CartItem.css'
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function CartItem({productoMini}) {
    const { setCarrito, aumentarCantidad, restarCantidad } = useContext(CarritoContext);

    let subTotal = productoMini.cantidad * productoMini.precio
    return(
        <div className='tarjeta-carritoMini'>
            <div className='contenido-tarjeta-carritoMini'>
                <img src={productoMini.imagen} alt={productoMini.nombre} />
                <h2 className='carritoMini-nombre'>{productoMini.nombre}</h2>
                <h2 className='carritoMini-precio'>${productoMini.precio.toLocaleString()}</h2>
                <div className='botonesMasMenos'>
                    <button className='button-cantidad' onClick={() => {
                        restarCantidad(productoMini.id)
                    }}>-</button>
                    <h2 className='cantidad'>{productoMini.cantidad}</h2>
                    <button className='button-cantidad' onClick={() => {
                        aumentarCantidad(productoMini.id)
                    }}>+</button>
                </div>
                <h2 className='carritoMini-subtotal'>${subTotal.toLocaleString()}</h2>
            </div>
            <div className='container-button-eliminar'>
                <button className='button-eliminar' onClick={() => {
                    setCarrito(prev => prev.filter(producto => producto.id !== productoMini.id)) /*producto es una variable temporal para hacer la comparacion del id*/
                    /*           /|\                /|\                 /|\      
                    Toma el carrito actual           |                   |      
                    ↓                                |                   |       
                    Recórrelo producto por producto  |                   |  
                    ↓                                                    |          
                    Quédate solo con los que NO tienen el mismo id       |
                    ↓
                    Guarda el nuevo array
                    */
                }}>x</button>
            </div>
        </div>
        
    )
}

export default CartItem