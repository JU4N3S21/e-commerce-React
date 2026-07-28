import CartItemCheckout from "./CarItemCheckout.jsx";
import './orderSummary.css'
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

function OrderSummary() {
    const { carrito, setCarrito, aumentarCantidad, restarCantidad } = useContext(CarritoContext);

    const total = carrito.reduce(
        (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
        0
    );
    return (
        <div className="orderSummary">
            <div className="contenido-orderSummary">
                <h2 className="titulo-orderSummary">Resumen del pedido</h2>
                {carrito.map((productoMini) => (
                    <CartItemCheckout productoMini={productoMini} key={productoMini.id}/>
                ))}
                <div className='carrito-abajo'>
                    <div className='carrito-abajo-subtotal'>
                        <h4>Subtotal</h4><h4>${total.toLocaleString()}</h4>
                    </div>
                    <div className='carrito-abajo-envio'>
                        <h4>Envio</h4><h4>{total >= 200000 ? "Gratis" : `$${(18000).toLocaleString()}`}</h4>
                    </div>
                    <div className='carrito-abajo-total'>
                        <h3>Total</h3><h3>${total.toLocaleString()}</h3>
                    </div>
                </div>
            </div>
            <div className="button-orderSummary">
                <button type="submit" form="checkout-form">
                    Finalizar compra
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;