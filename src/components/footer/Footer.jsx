import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo_fondo_negro-removebg-preview.png'
import './Footer.css'

function Footer (){
    const columnas = [
        {
            id: 1,
            titulo: "Tienda",
            links: [
                { id: 1, nombre: "Todos los productos", url: "/" },
                { id: 2, nombre: "Ofertas", url: "/" },
                { id: 3, nombre: "Armar mi PC", url: "/" }
            ]
        },
        {
            id: 2,
            titulo: "Soporte",
            links: [
                { id: 1, nombre: "Centro de ayuda", url: "/" },
                { id: 2, nombre: "Garantías", url: "/" },
                { id: 3, nombre: "Envíos", url: "/" }
            ]
        },
        {
            id: 3,
            titulo: "Empresa",
            links: [
                { id: 1, nombre: "Nosotros", url: "/" },
                { id: 2, nombre: "Contacto", url: "/" },
                { id: 3, nombre: "Términos", url: "/" }
            ]
        }
    ]

    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-marca">
                    <div className='logo'>
                        <img src={logo} alt="logo" className='logo-img' />
                        <div>
                            <h2>DEREN<span>FULL</span></h2>
                            <p>GAMING</p>
                        </div>
                    </div>
                    <p className="footer-descripcion">
                        Componentes de PC verificados, precios claros y soporte real.
                        Armamos tu setup contigo, no solo te lo vendemos.
                    </p>
                </div>

                {columnas.map((columna) => (
                    <div className="footer-columna" key={columna.id}>
                        <h5>{columna.titulo}</h5>
                        <ul>
                            {columna.links.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.url}>{link.nombre}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <p>© 2026 DerenFull Gaming. Todos los derechos reservados.</p>
                <p>Hecho para gamers y makers</p>
            </div>
        </footer>
    )
}

export default Footer
