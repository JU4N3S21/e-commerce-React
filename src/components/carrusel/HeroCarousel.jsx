import './HeroCarousel.css'
import carrusel1 from '../../assets/carrusel/carrusel1.png'
import carrusel2 from '../../assets/carrusel/carrusel2.png'
import carrusel3 from '../../assets/carrusel/carrusel3.png'
import carrusel4 from '../../assets/carrusel/carrusel4.png'
import { useState, useEffect } from 'react'

function HeroCarousel (){
    const slides = [
        { id : 1, textoPequeno : "NUEVA GENERACIÓN", titulo : "POTENCIA SIN LIMITES PARA ", tituloDestacado : "GAMERS", descripcion: "Descubre las mejores PC Gamer y componentes con la última tecnología del mercado", textoBoton: "VER PRODUCTOS", imagen : carrusel1},
        { id : 2, textoPequeno : "RENDIMIENTO EXTREMO", titulo : "COMPONENTES", tituloDestacado : "DE ALTO NIVEL", descripcion: "Las mejores marcas, la mejor tecnología. Lleva tu pc al siguiente nivel", textoBoton: "VER COMPONENTES", imagen : carrusel2},
        { id : 3, textoPequeno : "INMERSIÓN TOTAL", titulo : "MONITORES", tituloDestacado : "GAMER", descripcion: "Imágenes más nitidas. Colores más vivos y la mejor experiencia en cada partida", textoBoton: "VER MONITORES", imagen : carrusel3},
        { id : 4, textoPequeno : "VENTAJA COMPETITIVA", titulo : "PERIFÉRICOS", tituloDestacado : "GAMER", descripcion: "Diseñados para darte precisión, comodidad y estilo en cada juego", textoBoton: "VER PERIFÉRICOS", imagen : carrusel4}
    ]

    const [indiceActual, setIndiceActual] = useState(0);

    const slideActual = slides[indiceActual];

    function siguiente(){
        setIndiceActual((indicePrevio /*variable temporal del indice que esta actualmente*/) => {
            return (indicePrevio + 1) % slides.length
        })
    }

    function anterior(){
        setIndiceActual((indicePrevio) => {
            return (
                indicePrevio === 0 //si indice previo es 0
                    ? slides.length - 1  //que el nuevo indice sea el largo de los indices (seria 4 )- 1 
                    : indicePrevio - 1 //si no es el primero  restale uno

                    /*
                    slides.length = 4 ... numero de indices

                    índices válidos:  ... enmueracion de indices
                    0, 1, 2, 3
                    */
            )
        })
    }

    const [pausado, setPausado] = useState(false);

    useEffect(() => {
        if (pausado) return; //si pausado es true no sigue la funcion osea no se ejecuta siguiente

        const intervalo = setInterval(() => {
            siguiente()
        }, 5000)

        return () => clearInterval(intervalo) // el return del useEffect se ejecuta cuando el componente sale de la pantalla o cuando se finaliza la funcion //la función de limpieza corre antes de cada re-ejecución del efecto, y también una última vez cuando el componente se desmonta
    }, [pausado]) //cada ves que cambie pausado se ejecuta
    return(
        <div className="hero-carousel" onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
            <button className='carousel-flecha-izquierda carousel-flecha' onClick={() => anterior()}>&lt;</button>
            <div className="banner-contenido">
                <p className='texto-pequeno'>{slideActual.textoPequeno}</p>
                <h1>{slideActual.titulo}<span className='span-titulo'>{slideActual.tituloDestacado}</span></h1>
                <p className='carousel-descripcion'>{slideActual.descripcion}</p>
                <button className='carousel-button'>{slideActual.textoBoton} <span className='span-button'>&gt;</span></button>
            </div>
            <div className='indicadores'>
                {slides.map((slide, index) => (
                    <button key={slide.id} className={`indicador ${index === indiceActual ? "activo" : ""}`}
                    onClick={() => {
                        setIndiceActual(index)
                    }}></button>
                ))}
            </div>
            <img src={slideActual.imagen} alt="" />
            <button className='carousel-flecha-derecha carousel-flecha' onClick={() => siguiente()}>&gt;</button>
        </div>
    )
}

export default HeroCarousel