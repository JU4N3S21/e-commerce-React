import './Navbar.css'
import CartItem from "../components/CartItem.jsx"
import { Link } from 'react-router-dom'
import { useRef, useEffect, useContext } from 'react'
import { CarritoContext } from "../context/CarritoContext";
import Busqueda from './busqueda/Busqueda.jsx';
import logo from './src/assets/logo/logo_fondo_negro-removebg-preview.png'
import carritoImg from './src/assets/carrito.png'


function Navbar(){    
    const {
        carrito,
        setCarrito,
        mostrarCarrito,
        setMostrarCarrito,
        aumentarCantidad,
        restarCantidad,
        vaciarCarrito
    } = useContext(CarritoContext);

    const direcciones = [
        { id: 1, nombre: "Inicio", url: "/" },
        { id: 2, nombre: "Productos", url: "/productos" }
    ]

    const total = carrito.reduce(
        (acumulador, producto) => acumulador + (producto.precio * producto.cantidad),
        0
    )

    const totalCantidad = carrito.reduce(
        (acumulador, producto) => acumulador + producto.cantidad,
        0
    )

    const carritoRef = useRef(null);

    function handleClickFuera(event) {
        if (
            carritoRef.current &&
            !carritoRef.current.contains(event.target)
        ) {
            setMostrarCarrito(false);
        }
    }

    ///cada vez que haya un clic, ejecuta handleClickFuera
    useEffect(() => {
        document.addEventListener("mousedown", handleClickFuera);

        ///es la limpieza. Cuando Navbar deje de existir, React elimina el “escuchador” del documento (para que no este activo si el carrito no esta)
        return () => {
            document.removeEventListener("mousedown", handleClickFuera);
        };
    }, []);

    return(
        <div className="menu">
            <div className='logo'>
                <img src= {logo} alt="logo" className='logo-img' />
                <div>
                    <h2>DEREN<span>FULL</span></h2>
                    <p>GAMING</p>
                </div>
            </div>

            <ul>
                {direcciones.map((li) => (
                    <li key={li.id}>
                        <a href={li.url}>{li.nombre}</a>
                    </li>
                ))}
            </ul>
            

            <div className='container-carrito' ref={carritoRef} >
                <img src={carritoImg} alt="Carrito" className='carrito' onClick={() => {setMostrarCarrito(prev => !prev)}}/>
                <p className='texto-carrito' onClick={() => {setMostrarCarrito(prev => !prev)}}>Carrito</p>
                <p className='numero-carrito' onClick={() => {setMostrarCarrito(prev => !prev)}}>{totalCantidad}</p>
                <p className='precio-carrito' onClick={() => {setMostrarCarrito(prev => !prev)}}>${total.toLocaleString()}</p>

                {mostrarCarrito &&(
                    <div className="container-carritoMini">
                        {carrito.length === 0 ? (
                            <div className='carritoVacio'>
                                <h2>Carrito Vacio 🛒</h2>
                            </div>
                        ) : (
                            <>
                                <div className='carrito-arriba'>
                                    <h2>Tu carrito</h2>
                                    <h3>{totalCantidad} productos</h3>
                                </div>
                                {carrito.map((productoMini) => (
                                    <CartItem productoMini={productoMini} key={productoMini.id} />
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
                                    <div className='carrito-abajo-link'>
                                        <Link to="/checkout" onClick={() => setMostrarCarrito(prev => !prev)}>Ir a pagar</Link>
                                    </div>
                                    <button onClick={() => {
                                        vaciarCarrito()
                                    }}>Vaciar carrito</button>
                                </div>
                            </>
                        )}
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar