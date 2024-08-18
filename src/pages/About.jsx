import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> SOBRE NOSOSTROS</h1>
        <p>
         En nuestra pizzeria nos apasiona crear experiencias  únicas para nuestros clientes. Desde 1995, hemos estado sirviendo las pizzas más deliciosas y auténticas de la ciudad, utilizando solo los ingredientes más frescos y de la más alta calidad. Nuestro equipo de chefs expertos combina recetas tradicionales con un toque moderno para ofrecer una variedad de sabores que satisfacen todos los paladares. Nos enorgullece ser parte de esta comunidad y nos esforzamos por brindar un servicio excepcional en un ambiente acogedor y familiar. ¡Ven y disfruta de una experiencia gastronómica inolvidable con nosotros!
        </p>
      </div>
    </div>
  );
}

export default About;
