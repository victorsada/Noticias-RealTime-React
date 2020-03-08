import React from "react";
import styles from "./Formulario.module.css";
import useState from "../hooks/useSelect";
import useSelect from "../hooks/useSelect";
import { getDefaultNormalizer } from "@testing-library/react";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "sports", label: "Deportes" },
    { value: "science", label: "Ciencia" },
    { value: "technology", label: "Tecnología" }
  ];

  const [categoria, SelectNoticia] = useSelect("general", OPCIONES);

  const buscarNoticia = e => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticia}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticia />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
