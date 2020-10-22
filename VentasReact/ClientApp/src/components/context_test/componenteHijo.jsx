import React, { Fragment, useContext } from 'react'
import { InputText } from "primereact/inputtext"
import { ClienteContext } from "./componentePadre"

const ComponenteHijo = () => {

    const [nombre, setNombre] = useContext(ClienteContext)

    const handleChange = (e) => {
        // setNombre({
        //      ...nombre,
        //      [e.target.name]: e.target.value,
        // });

        setNombre(e.target.value);

    }


    return (
        <Fragment>
            <div>
                <p>Componente Hijo: {nombre}</p>
                <InputText
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}

                />
            </div>
        </Fragment>
    )
}

export default ComponenteHijo;