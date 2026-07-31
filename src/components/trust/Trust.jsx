import camion2 from '../../assets/iconos/camion2.png'
import escudo from '../../assets/iconos/escudo.png'
import tarjeta from '../../assets/iconos/tarjeta.png'
import reloj from '../../assets/iconos/reloj.png'
import './Trust.css'

function Trust (){
    const trusts = [
        {id : 1 , nombre: "Envio en 24-48h" , descripcion: "A todo el país" , img: camion2},
        {id : 2 , nombre: "Garantía oficial" , descripcion: "Hasta 24 meses" , img: escudo},
        {id : 3 , nombre: "Pago seguro" , descripcion: "Tarjeta, PSE o contraentrega" , img: tarjeta},
        {id : 4 , nombre: "Soporte técnico" , descripcion: "Antes y después de tu compra" , img: reloj}
    ]

    return(
        <div className="trusts">
            {trusts.map((trust) => (
                <div key={trust.id} className='trust'>
                    <img src={trust.img} alt={trust.nombre} />
                    <h4>{trust.nombre}</h4>
                    <p>{trust.descripcion}</p>
                </div>
            ))}
        </div>
    )
}

export default Trust