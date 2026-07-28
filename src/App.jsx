import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Checkout from "./pages/Checkout";
import { useState, useEffect } from "react";
import { CarritoContext } from "./context/CarritoContext";
import './App.css'

function App() {
    const [carrito, setCarrito] = useState([])
    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    const [cargado, setCargado] = useState(false)

    /*useEffect(() => {
        console.log(carrito)
    }, [carrito])*/

    //Cargar carrito cuando cargue la página
    useEffect(() => {
        console.log("se ejecutó")
        const datosLocalStorage = localStorage.getItem("carrito")
        if (datosLocalStorage){
            setCarrito(JSON.parse(datosLocalStorage))
        }
        setCargado(true)
    }, [])

    //Guardar carrito el localStoage cuando cambie carrito
    useEffect(() => {
        if (cargado === true){
            console.log("Guardando:", carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
        
    }, [carrito])

    function aumentarCantidad(id) {
        setCarrito(prev => prev.map(p => {
            if (p.id === id){
                return {...p, cantidad: p.cantidad + 1}
            }
            return p
        }))
    }

    function restarCantidad(id) {
        
        const producto = carrito.find(p => p.id === id); //Para escoger el producto al que se le esta haciendo click y no vaya a tomar otro

        if (producto.cantidad === 1){
            setCarrito(prev => prev.filter(p => p.id !== id)); //si el producto tiene como cantidad 1 y se hace click en restar se elimina el producto
        }else{
            setCarrito(prev => prev.map(p => {
                if (p.id === id){
                    return {...p, cantidad: p.cantidad - 1}
                }
                return p
            }))
        }
    }

    function vaciarCarrito(pedirConfirmacion = true){
        if (pedirConfirmacion){
            const respuesta = confirm("¿Estás seguro de que quieres vaciar el carrito?");
            if (!respuesta){
                return
            }
        }
        
        setCarrito([])
    }

    return(
        <div className="app">
            <CarritoContext.Provider value={{
                carrito,
                setCarrito,
                mostrarCarrito,
                setMostrarCarrito,
                aumentarCantidad,
                restarCantidad,
                vaciarCarrito
            }}>
                <Routes>
                    <Route path= "/" element= {<Home />} />
                    <Route path= "/checkout" element= {<Checkout />} />
                </Routes>
            </CarritoContext.Provider>
        </div>
    )
}

export default App
