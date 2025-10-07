import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#2e7d32"}}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">Naturaleza Viva</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="menu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#proyectos">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#recursos">Recursos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
