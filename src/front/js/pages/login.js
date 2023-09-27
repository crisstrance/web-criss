import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import bookswaplogo from "../../img/logo-final-project.png";
import "../../styles/forms.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
            <img src={bookswaplogo} alt="bookswap" height="100" />
            <div className="row justify-content-center">
                <div className="createaccountform col-md-6">
                    <form className="row g-3 text-start">
                        <div className="col-12">
                            <label className="form-label" for="autoSizingInputGroup">Username</label>
                            <div className="input-group">
                            <div className="input-group-text">@</div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Remember me
                            </label>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn loginbtn">Log in</button>
                            <div className="container">
                                <a href="/reset-password">Forfot your password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
		</div>
	);
};

export default Login; 