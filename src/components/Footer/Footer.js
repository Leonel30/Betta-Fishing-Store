import React from "react";
import { NavLink } from "react-router-dom";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">
          &copy; 2022 Betta Fishing Store, Inc
        </p>

        <NavLink to="/">
          <img
            src="https://res.cloudinary.com/ddi161cze/image/upload/v1643921508/Betta%20Fish%20Store/BETTA-LOGO_d3ymvz.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle"
            alt=" Betta-logo"
          />
        </NavLink>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              Contacto
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              Sobre Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              <BsInstagram />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              <BsFacebook />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              <BsWhatsapp />
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
