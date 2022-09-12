import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };

  const handleClick = () => {
    localStorage.clear();
    actions.resetStoreSelectors();
  };
  return (
    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <span
            onClick={handleClick}
            className="logo mb-0 display-6 text-white "
          >
            LUXURY ESTATE
          </span>
        </Link>

        {store.token ? (
          <div className="d-flex">
            <Link to={`/user/${localStorage.getItem("id")}`}>
              <img
                src={process.env.DEFAULT_PROFILE_PIC}
                className="img-fluid"
                style={{
                  height: "50px",
                  top: "3rem",
                  border: "solid 5px gray",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <ul className="dropdown ps-0">
              <a
                className="nav-link dropdown-toggle text-decoration-none"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        ) : (
          <div className="ms-auto">
            <Link to="/login">
              <a href="#" className="btn btn-success">
                Login
              </a>
            </Link>
            <Link to="/signup">
              <a href="#" className="btn btn-outline-success">
                Signup
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
