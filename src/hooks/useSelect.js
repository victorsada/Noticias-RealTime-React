import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => actualizarState(e.target.value)} //pasamos al state lo que seleccionemos
    >
      {opciones.map(x => (
        <option key={x.value} value={x.value}>
          {x.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
