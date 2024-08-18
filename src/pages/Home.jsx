import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> GRUPO 1 PIZZERIA </h1>
        <p> PIZZA PARA TODOS LOS GUSTOS</p>
        <Link to="/menu">
          <button> ORDENA AHORA </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
