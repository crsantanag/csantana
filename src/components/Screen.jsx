import { useEffect, useState } from 'react';
import './assets/styles.css'

const Screen = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Función para actualizar el ancho de la ventana
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        // Agregar un listener para el evento resize
        window.addEventListener('resize', handleResize);
    
        // Llamar a la función de manejo de redimensionamiento al cargar el componente
        handleResize();
    
        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [] )
};

export default Screen;