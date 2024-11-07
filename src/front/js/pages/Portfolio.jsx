import React from "react";
import heroImage from "../../img/background.jpg"; // Asegúrate de que la imagen esté en esta ruta
import { Link } from "react-router-dom";

export const Portfolio = () => {
	return (
		<div className="card text-bg-dark text-center border-0">
			<img src={heroImage} className="card-img" alt="Imagen de fondo" style={{ height: "100vh", objectFit: "cover" }} />
			<div className="card-img-overlay d-flex flex-column justify-content-center">
				{/* <h1
					className="card-title display-4 font-weight-bold"
					style={{
						textShadow: "2px 2px 8px rgba(255, 255, 255, 5)", // Sombra de texto
					}}
				>
					Soy Cristian, diseñador gráfico especializado en branding y publicidad visual.
				</h1> */}
				<h1
					className="display-1 fw-light"
					style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)" }} // Sombra en el texto
				>
					Soy <span className="fst-italic" style={{ fontSize: "1.2em" }}>Cristian</span>
				</h1>
				<p className="card-text lead">
					Creatividad y profesionalismo en cada proyecto.
				</p>
				<div>
					<Link to="/portfolio">
						<button className="btn btn-lg font-weight-bold mt-3" style={{ backgroundColor: "#ff002b", color: "#fff" }}>
							Ver Portafolio
						</button>
					</Link>
				</div>

			</div>
		</div>
	);
};