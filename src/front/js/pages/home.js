import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardVehicles } from "../component/cardvehicles";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getVehicles()
	}, [])

	return (
		<>
		<div className="footer-view text-danger vehicles mt-2 mb-5 mt-4 justify-content-center bg-light">
			<div className="container">
			<div className="row Map Cards text-dark d-flex justify-content-center">
				{store.vehicles.map((vehicle) => {
					return (
						<CardVehicles vehicle={vehicle} key={vehicle.id} />
					)
					})
				}
				</div>
			</div>
		</div>
		</>
	);
};