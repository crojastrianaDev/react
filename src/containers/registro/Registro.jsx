import React from "react";
import Imagen from "../../assets/registrar.png";
import "./styles.css";

function Registro() {
  return (
    <>
      <div className="container">
        <div className="center">
          <img src={Imagen} alt="John Doe" class="mr-3 mt-3 rounded-circle" />
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="last-name">Apellido</label>
              <input
                type="text"
                id="last-name"
                class="form-control"
                placeholder="Tu Apellido"
              />
            </div>
          </div>

          <div className="form-group">
            <label for="email">Correo Elctronico</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Correo"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="password">Contraseña</label>
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="password-c">Contraseña</label>
              <input
                type="password"
                id="password-c"
                class="form-control"
                placeholder="Confirmas contraseña"
              />
            </div>
          </div>
          <div className="btn ">
            <button className="btn-submit"> REGISTRARME</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Registro;
