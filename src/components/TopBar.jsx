import './TopBar.css'
import camion from '../assets/iconos/camion.png'

function TopBar(){
    const topMenu = [
        { id: 1, nombre: "Ayuda", url: "/ayuda" },
        { id: 2, nombre: "Seguimiento pedido", url: "/seguimiento" },
        { id: 3, nombre: "Contacto", url: "/contacto" }
    ]

    return(
        <div className="top-bar">
            <div className="envio-free">
                <img src={camion} alt="Envio gratis" />
                <p>Envio gratis en pedidos superiores a <span>$200.000</span></p>
            </div>
            <ul>
                {topMenu.map((li) => (
                    <li key={li.id}>
                        <a href={li.url}>{li.nombre}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopBar