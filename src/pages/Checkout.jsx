import CheckoutForm from "../components/checkout/CheckoutForm.jsx";
import OrderSummary from "../components/checkout/OrderSummary.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import './Checkout.css'
import { useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Footer from "../components/footer/Footer.jsx";

function Checkout() {
    const { carrito, setMostrarCarrito } = useContext(CarritoContext);

    const [compraExitosa, setCompraExitosa] = useState(false);

    return (
        <div className="container">
            <Navbar />
            <div className="checkout-container">
                <Link to="/" className="boton-estilizado" onClick={() => {setMostrarCarrito(false)}}>Volver a la tienda</Link>

                <div className="form-orderSummary">
                    {compraExitosa ? (
                        <>
                            <h2>¡Compra realizada con éxito!</h2>
                            <p>Gracias por tu compra.</p>
                        </>
                    ) : (
                        <>
                            <CheckoutForm setCompraExitosa = {setCompraExitosa}/>
                            <OrderSummary />
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Checkout;