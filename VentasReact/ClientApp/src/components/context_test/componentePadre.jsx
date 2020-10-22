import React, { Fragment, useState, createContext } from 'react';
import ComponenteHijo from './componenteHijo'


export const ClienteContext = createContext();

const ComponentePadre = () => {
    const [nombre, setNombre] = useState("")

    return (
        <Fragment>
            <div>
                <p>Componente Padre: {nombre}</p>

                <ClienteContext.Provider value={[nombre, setNombre]}>
                    <ComponenteHijo />
                </ClienteContext.Provider>
            </div>
        </Fragment>
    )
}

export default ComponentePadre;

