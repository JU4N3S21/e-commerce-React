import { useState, useContext } from "react";
import './CheckoutForm.css'
import { CarritoContext } from "../../context/CarritoContext";
import tarjeta2 from '../../assets/iconos/tarjeta2.png'
import banco from '../../assets/iconos/banco.png'
import efectivo from '../../assets/iconos/efectivo.png'


function CheckoutForm({setCompraExitosa}) {
    const { vaciarCarrito } = useContext(CarritoContext);

    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        metodoPago: ""
    });

    function handleChange(event) {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    }

    function validarFormulario(){
        if (formulario.nombre.trim() === ""){
            alert("Debes escribir tu nombre")
            return false;
        }

        if (!formulario.correo.trim().includes("@")) {
            alert("Debes ingresar un correo válido");
            return false;
        }
        
        if (formulario.telefono.trim().length < 10) {
            alert("Debes ingresar un teléfono válido");
            return false;
        }

        if (formulario.direccion.trim() === "") {
            alert("Debes escribir una dirección")
            return false;
        }

        if (formulario.ciudad.trim() === "") {
            alert("Debes escribir tu ciudad")
            return false;
        }

        if (formulario.metodoPago === "") {
            alert("Selecciona un método de pago");
            return false;
        }
        return true;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!validarFormulario()){
            return
        }
        
        console.log("Formulario enviado");

        vaciarCarrito(false);

        setCompraExitosa(true);
    }

    

    return (
        <div className="container-form">
                <h3>Datos de envío</h3>
                <p>Completa tu información para continuar con el pedido</p>

                <form id="checkout-form" onSubmit={handleSubmit}>
                    <p>Nombre completo</p>
                    <input
                        type="text"
                        name="nombre"
                        value={formulario.nombre}/*(el input es un espejo del estado)*/
                        placeholder="Nombre"
                        onChange={handleChange}
                    />
                    <p>Correo electrónico</p>
                    <input
                        type="text"
                        name="correo"
                        value={formulario.correo}
                        placeholder="Correo"
                        onChange={handleChange}
                    />
                    <p>Teléfono</p>
                    <input
                        type="tel"
                        name="telefono"
                        value={formulario.telefono}
                        placeholder="Telefono"
                        onChange={handleChange}
                    />
                    <p>Dirección</p>
                    <input
                        type="text"
                        name="direccion"
                        value={formulario.direccion}
                        placeholder="Direccion"
                        onChange={handleChange}
                    />
                    <p>Ciudad</p>
                    <input
                        type="text"
                        name="ciudad"
                        value={formulario.ciudad}
                        placeholder="Ciudad"
                        onChange={handleChange}
                    />
                    <p>Método de pago</p>
                    <div className="metodos-pago">
                        <input
                            type="radio"
                            id="tarjeta"
                            name="metodoPago"
                            value="tarjeta"
                            checked={formulario.metodoPago === "tarjeta"}
                            onChange={handleChange}
                            hidden
                        />

                        <label htmlFor="tarjeta" className="metodo">
                            <img src={tarjeta2} alt="Tarjeta" />
                            <span>Tarjeta</span>
                        </label>

                        <input
                            type="radio"
                            id="pse"
                            name="metodoPago"
                            value="pse"
                            checked={formulario.metodoPago === "pse"}
                            onChange={handleChange}
                            hidden
                        />

                        <label htmlFor="pse" className="metodo">
                            <img src={banco} alt="PSE" />
                            <span>PSE</span>
                        </label>

                        <input
                            type="radio"
                            id="contraentrega"
                            name="metodoPago"
                            value="contraentrega"
                            checked={formulario.metodoPago === "contraentrega"}
                            onChange={handleChange}
                            hidden
                        />

                        <label htmlFor="contraentrega" className="metodo">
                            <img src={efectivo} alt="Efectivo" />
                            <span>Contraentrega</span>
                        </label>

                    </div>

                </form>
            
        </div>
    );
}

export default CheckoutForm;