// components/CredlyBadge.js
import React, { useEffect } from 'react';

const CredlyBadge = () => {
    useEffect(() => {
        // Crear un elemento <script> y configurarlo para cargar el script externo
        const script = document.createElement('script');
        script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
        script.async = true;

        // Agregar el script al documento después de montar el componente
        document.body.appendChild(script);

        // Limpiar el script al desmontar el componente
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
            <div  
                data-iframe-width="100%"
                data-iframe-height="270"
                data-share-badge-id="58ba6d2d-2e1d-4a75-8f82-3b3d2dc44966"
                data-share-badge-host="https://www.credly.com">
            </div>
    );
};

export default CredlyBadge;

