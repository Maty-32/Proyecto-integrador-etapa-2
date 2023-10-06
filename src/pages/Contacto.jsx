import React from "react";
import "./contacto.scss";

const Contacto = () => {
  return (
    <main className="contacto">
      <h2>Contactemonos</h2>
      <h3>¿Alguna pregunta o comentario? ¡Solo escríbenos un mensaje!</h3>
      <div className="contenedor-contacto">
        <div className="contenedor-contacto__redes">
          <h3>Seguinos en nuestras redes sociales</h3>
          <div className="contenedor-contacto-1">
            <div className="contenedor-contacto__redes__conteiner">
              <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank">
                <h3>Whatsapp</h3>
                <img
                  className="contenedor-contacto__redes__conteiner-logos"
                  src=" ../img/footer/whatsapp-logo.png"
                  alt=""
                />
                <h6>3543-606194</h6>
              </a>
            </div>
            <div className="contenedor-contacto__redes__conteiner">
              <a href="https://www.instagram.com/demianstore_/" target="_blank">
                <h3>Instagram</h3>
                <img
                  className="contenedor-contacto__redes__conteiner-logos"
                  src=" ../img/footer/instagram-logo.png"
                  alt=""
                />
                <h6>@demianstore_</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="divisor"></div>
        <form action="#" method="POST" className="form__contacto">
          <legend>Dejanos tu consulta</legend>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form__contacto__input"
              name="name"
              placeholder=" Nombre"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="last name"></label>
            <input
              type="text"
              name="last name"
              placeholder=" Apellido"
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
              placeholder=" Numero de telefono"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="commit"></label>
            <input
              type="text"
              name="commit"
              className="form__contacto-commit"
              placeholder=" Escriba su consulta..."
              required
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contacto;
