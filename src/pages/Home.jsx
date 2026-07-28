import Navbar from "../components/Navbar.jsx"
import ProductCard from "../components/ProductCard.jsx"
import productos from "../data/productos.js"
import './Home.css'
import CartItem from "../components/CartItem.jsx"
import TopBar from "../components/TopBar.jsx"
import HeroCarousel from "../components/carrusel/HeroCarousel.jsx"
import ProductosDestacados from "../components/destacados/ProductosDestacados.jsx"
import Trust from "../components/trust/Trust.jsx"
import Footer from "../components/footer/Footer.jsx"

function Home (){
    return(
        <div className="container">
            <TopBar />

            <Navbar />

            <div className="container-carousel">
                <HeroCarousel />
            </div>

            <div className="container-trust">
                <Trust />
            </div>

            <ProductosDestacados />

            <Footer />
            
        </div>
    )
}

export default Home