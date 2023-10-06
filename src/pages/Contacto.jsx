import React from "react";
import "./contacto.scss";

const Contacto = () => {
  return (
    <main className="contacto">
      <h2>CONTACTO</h2>
      <form action="#" method="POST" className="form__contacto">
        <legend>Dejanos tu consulta</legend>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            className="form__contacto__input"
            name="name"
            placeholder="Nombre"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="last name"></label>
          <input
            type="text"
            name="last name"
            placeholder="Apellido"
            className="form__contacto__input"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phono"></label>
          <input
            type="number"
            name="phono"
            className="form__contacto__input"
            placeholder="Numero de telefono"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="commit"></label>
          <input
            type="text"
            name="commit"
            className="form__contacto__input"
            placeholder="Escriba su consulta..."
            required
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-primary button">Enviar</button>
        </div>
      </form>
    </main>
  );
};

export default Contacto;
