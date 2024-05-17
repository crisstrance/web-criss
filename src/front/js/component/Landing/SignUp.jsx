import React, { useState, useContext } from "react";
import "../../../styles/Landing-styles/signUp.css";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("La contraseña no coincide");
      return;
    }
    actions.signUp({ email, password });
    setPassword("");
    setEmail("");
    setConfirmPassword("");
    handleClose();
    navigate("/user_form");
  };

  return (
    <div>
      <div>
        <button className="button-sign-up" onClick={handleShow}>
          Sign Up
        </button>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleClose}></span>
              <p className="modal-p">Sing Up</p>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    className="input-field"
                    required
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Contraseña"
                    className="input-field"
                    required
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="confirmPassword" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    placeholder="Confirmar Contraseña"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <button className="button-input submit" type="submit">
                    Enviar
                  </button>
                </div>
                <div>
                  <button
                    className="button-input close-button"
                    onClick={handleClose}
                  >
                    Cerrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};