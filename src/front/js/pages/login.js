import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>login</h1>
		</div>
	);
};
