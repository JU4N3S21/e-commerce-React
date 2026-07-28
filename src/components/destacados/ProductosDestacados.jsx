import ProductCard from "../../components/ProductCard.jsx"
import productos from "../../data/productos.js"
import './ProductosDestacados.css'

function ProductosDestacados (){
    return(
        <div className="destacados-container">
            <div className="contenido-destacados">
                <div className="destacados-titulos">
                    <h3 className="h3-catalogo">// CATÁLOGO</h3>
                    <h2 className="subtitulo">Componentes destacados</h2>
                    <p>Selección de las piezas más buscadas de este mes</p>
                </div>
                
                <div className="productos-container">
                    {productos.map((producto) => (
                        <ProductCard producto={producto} key={producto.id} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default ProductosDestacados