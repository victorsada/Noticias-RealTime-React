import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import useSelect from "./hooks/useSelect";
import ListadoNoticias from "./Components/ListadoNoticias";
function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=3a77ca39ad04439eaea1f097269d8d20
      `;
      const respuesta = await fetch(url);
      const noticia = await respuesta.json();
      guardarNoticias(noticia.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>
      <ListadoNoticias noticias={noticias} />
    </Fragment>
  );
}

export default App;
// API KEY 3a77ca39ad04439eaea1f097269d8d20
