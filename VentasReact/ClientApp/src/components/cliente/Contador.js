import React, { Fragment, useState } from "react";

// Snippet "SS"
const Contador = () => {
    const [contador, setContador] = useState(0);

    const aumentar = () =>{
        setContador(contador + 1);
    }

    return (
        <Fragment>
            <h3>El contador está en {contador}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
};

export default Contador;
