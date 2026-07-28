import './ProductCard.css'
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function ProductCard({producto}){
    const { carrito, setCarrito } = useContext(CarritoContext);

    return(
        <div className="tarjeta-producto">
            <div className='tarjeta-img-container'>
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <h3 className='tarjeta-categoria'>{producto.categoria}</h3>
            <h2>{producto.nombre}</h2>
            <h4>{producto.descripcion}</h4>
            <h2>${producto.precio.toLocaleString()}</h2>
            <button onClick={() => {
                const existe = carrito.find(p => p.id === producto.id)

                if (existe) {
                    setCarrito(prev => prev.map(p =>{
                        if (p.id === producto.id){
                            return {...p, cantidad: p.cantidad + 1} 
                        }
                        return p
                    }))
                }else{
                    setCarrito(prev => [...prev, {...producto, cantidad: 1}])
                }
                }}><span className='span-tarjeta-producto'>+</span>Agregar</button>
        </div>
    )
}

export default ProductCard