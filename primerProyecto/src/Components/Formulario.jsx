// src/components/Formulario.jsx
import { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado: ${JSON.stringify(formData)}`);
  };

  return (
   <form
  name="contacto"
  method="POST"
  data-netlify="true"
  className="p-3 border rounded"
>
  <input type="hidden" name="form-name" value="contacto" />
  <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input type="text" name="nombre" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" name="email" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Mensaje</label>
    <textarea name="mensaje" className="form-control" required></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>
  );
}

export default Formulario;
