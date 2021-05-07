import React from "react";
import Logo from "../../assets/logo.png";

import "./styles.css";
function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <img src={Logo} alt="Logo" id="logo" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Registro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
              Login
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
