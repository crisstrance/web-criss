import React from "react";
import background from "../../img/background.jpg"; // Asegúrate de que la imagen esté en esta ruta
import PortfolioBtn from "../component/PortfolioBtn.jsx";

export const Home = () => {
	return (
		<div className="card text-bg-dark text-center border-0">
			<img
				src={background}
				className="card-img"
				alt="Imagen de fondo"
				style={{
					height: "100vh",
					objectFit: "cover",
					opacity: 0.2,
				}}
			/>
			<div className="card-img-overlay d-flex flex-column justify-content-center">
				<h1
					className="lh-1 fw-light text-center w-100"
					style={{
						textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
						fontFamily: "'Ysabeau SC'", // Cambia la tipografía aquí
					}}
				>
					<span
						className="fw-bold"
						style={{
							fontSize: "4.2em",
							color: "#ff002b",
						}}
					>
						CRIARA
					</span>
					<br />
					<span
						className="fw-light"
						style={{
							fontSize: "1.8em",
						}}
					>
						s  t  u  d  i  o
					</span>
				</h1>
				<p
					className="mt-2 card-text lead"
					style={{
						textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
						fontSize: "0.8em",
					}}
				>
					Creatividad y profesionalismo en cada proyecto.
				</p>
				<PortfolioBtn />
			</div>
		</div>
	);
};
