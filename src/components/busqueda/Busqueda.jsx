import productos from "../../data/productos"
import lupa from "../../assets/iconos/lupa.png";
import './Busqueda.css'


function Busqueda(){
    const categorias = [...new Set(
        productos.map((producto) => producto.categoria)
    )]

    return(
        <div className="busqueda-container">
            <select name="busqueda" >
                <option value="">Todas las Categorías</option>
                {categorias.map((categoria) => (
                    <option value={categoria} key={categoria}>{categoria.toUpperCase()}</option>
                ))}
            </select>
            <input type="text" name="" id="" placeholder="Buscar productos..." />
            <button type="submit">
                <img src={lupa} alt="buscar" />
            </button>
        </div>
    )
}

export default Busqueda