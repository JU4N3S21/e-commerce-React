import img1 from "../assets/productos/1.png"
import img2 from "../assets/productos/2.png"
import img3 from "../assets/productos/3.png"
import img4 from "../assets/productos/4.png"
import img5 from "../assets/productos/5.png"
import img6 from "../assets/productos/6.png"
import img7 from "../assets/productos/7.png"
import img8 from "../assets/productos/8.png"

const productos = [
    {
        id: 1,
        nombre: "RTX 3060 Ti",
        precio: 4000000,
        descripcion : "8GB GDDR6 - 256-BIT",
        imagen: img1,
        categoria: "GPU"
    },
    {
        id: 2,
        nombre: "Ryzen 5 5600X",
        precio: 990000,
        descripcion : "6-core - 3.7ghz",
        imagen: img2,
        categoria: "CPU"
    },
    {
        id: 3,
        nombre: "Monitor 24 pulgadas",
        precio: 950000,
        descripcion : "IPS - FULL HD",
        imagen: img3,
        categoria: "MONITORES"
    },
    {
        id: 4,
        nombre: "AMD RADEON 6500 XT",
        precio: 1800000,
        descripcion : "4GB GDDR6 - 64-BIT",
        imagen: img4,
        categoria: "GPU"
    },

    {
        id: 5,
        nombre: "RTX 4080 SUPER",
        precio: 7200000,
        descripcion: "16GB GDDR6X - DLSS 3",
        imagen: img5,
        categoria: "GPU"
    },
    {
        id: 6,
        nombre: "Ryzen 7 9800X3D",
        precio: 2850000,
        descripcion: "8-Core - 16 Threads",
        imagen: img6,
        categoria: "CPU"
    },
    {
        id: 7,
        nombre: "Samsung Odyssey G8",
        precio: 4800000,
        descripcion: '34" OLED - 175Hz',
        imagen: img7,
        categoria: "MONITOR"
    },
    {
        id: 8,
        nombre: "Logitech G PRO X",
        precio: 690000,
        descripcion: "Mouse inalámbrico",
        imagen: img8,
        categoria: "PERIFÉRICO"
    }
]

export default productos