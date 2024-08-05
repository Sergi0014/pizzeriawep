import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contacto </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre Completo</label>
          <input name="name" placeholder="Ingrese su nombres..." type="text" />
          <label htmlFor="email"> Su Email</label>
          <input name="email" placeholder="Ingrese su email..." type="email" />
          <label htmlFor="message">Un mensaje</label>
          <textarea
            rows="6"
            placeholder="Ingrese su mensage..."
            name="message"
            required
          ></textarea>
          <button type="submit"> ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
