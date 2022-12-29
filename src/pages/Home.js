import React from "react";
import Navigation from "../components/Navigation";
import Pokemons from "../components/Pokemons";

export default function Home(){

  function toggleZoomScreen() {
    document.body.style.zoom = "110%";
    document.body.style.backgroundColor = "rgb(166,231,242,255)";

  }
  toggleZoomScreen();



  return (
    <div className="home">
      <Navigation />
      <div className="banner"></div>
      <div className="footer"></div>
      <Pokemons />
    </div>
  );
};
