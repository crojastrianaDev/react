import React from "react";
import Imagen from "../../assets/login.png";
import "./styles.css";

function Login() {
  return (
    <>
      <div className="container">
        <div className="center">
          <img src={Imagen} alt="John Doe" class="mr-3 mt-3 rounded-circle" />
        </div>
        <form>
          <div className="form-group">
            <label for="email">Usuario</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Username"
            />
          </div>
          <div className="from-group">
            <label for="pass">Usuario</label>
            <input
              placeholder="Username"
              class="form-control"
              type="password"
              id="pass"
            />
          </div>

          <div className="btn ">
            <button className="btn-submit"> Ingresar</button>
          </div>
          <div className="center">
            <a href="#"> Olvide mi contraseña</a>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
