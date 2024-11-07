import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimatedButton = () => {
    const [scale, setScale] = useState(1); // Estado para controlar el tamaño

    // Efecto para cambiar el tamaño de manera suave y continua
    useEffect(() => {
        const interval = setInterval(() => {
            setScale((prev) => (prev === 1 ? 1.05 : 1)); // Alterna el tamaño entre 1 y 1.05 para crear el latido
        }, 1000); // Intervalo de tiempo en milisegundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Link to="/portfolio">
                <button
                    className="btn btn-lg font-weight-bold mt-3"
                    style={{
                        backgroundColor: "#00a29e",
                        color: "#fff",
                        transform: `scale(${scale})`, // Aplica la escala
                        transition: 'transform 4s ease-in-out', // Hace que la transición sea suave
                    }}
                >
                    Ver Portfolio
                </button>
            </Link>
        </div>
    );
}

export default AnimatedButton;
