import React, { useState, useEffect, Fragment } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
// import ClienteService from "../../services/ClienteService";
import * as Constants from "../../Constants";
// import axios from 'axios'
import classNames from "classnames";
// import Contador from "./Contador"

const baseUrl = Constants.APIURL + '/cliente';

// Usando función "normal" y usando función "flecha" (ambas funcionan...)
// function ClienteListHooks() {
const ClienteListHooks = () => {

  const emptyCliente = {
    id: null,
    nombre: ""
  };

  // Variables de Estado
  const [clientes, setClientes] = useState([]);
  const [formModalVisible, setFormModalVisible] = useState(false);
  // const [selected, setSelected] = useState(emptyCliente);
  const [cliente, setCliente] = useState(emptyCliente);
  const [submitted, setSubmitted] = useState(false); // Flag para evitar loop en useEffect()

  useEffect(() => {
    peticionGet();

    console.log('useEffect');

  }, [submitted]);


  // Petición Get con manejo de errores
  const peticionGet = async () => {
    await fetch(baseUrl)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .then(function (result) {
        setClientes(result.data);
        // console.log(result);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  // Petición Get sin manejo de errores
  // const peticionGet = async () => {
  //   const response = await fetch(baseUrl);
  //   const json = await response.json();
  //   setClientes(json.data);
  // }

  function hideDialog() {
    setFormModalVisible(false);
    // setSubmitted(false);
  }

  function saveRecord() {
    // Preguntar si es un Post o un Put
    peticionPut();
    setFormModalVisible(false);
  }

  const peticionPut = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var myBody = JSON.stringify(cliente);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: myBody
      // redirect: 'follow'
    };

    // await fetch(baseUrl, requestOptions)
    //   .then(response => peticionGet())
    //   .catch(error => console.log('error', error));

    await fetch(baseUrl, requestOptions)
      .then(function (response) {
        if (response.ok) {

          //////////////////////////////
          // Refresca datos en pantalla
          //////////////////////////////
          // Opción 1 - Haciendo un nueva petición GET
          // peticionGet();

          // Opción 2 - Cambiando estado de submitted monitoreado por useEffect (lo que genera una petición GET)
          // setSubmitted(!submitted);

          // Opción 3 - Actualiza estado de clientes (sin petición GET)
          setClientes(clientes.map(item => (item.id === cliente.id ? cliente : item)))

        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });

  }



  const peticionPost = async () => {
    console.log({ cliente });
    console.log(JSON.stringify({ cliente }));

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ nombre: "qweq" }),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .then(function (result) {
        // setClientes(data.concat(result.data));
        console.log(result);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  };

  // Función handleChange versión PrimeReact Tutorial
  // function onInputChange(e, field) {
  //     const val = (e.target && e.target.value) || '';

  //     setSelected((prevState) => ({
  //         ...prevState,
  //         [field]: val

  //     }))
  // }

  // Función handleChange https://www.youtube.com/watch?edufilter=NULL&v=VxeCLbckBOE
  // function handleChange(e) {
  const handleChangeOld = (e) => {
    // Toma el name y value del elemento que generó el evento e
    const { name, value } = e.target;

    setCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  }

  // function handleChange MEJORADA
  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });

    // console.log(cliente);
  }

  const dialogFooter = (
    <Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveRecord}
      />
    </Fragment>
  );

  const formModal = (
    <Fragment>
      <Dialog
        visible={formModalVisible}
        style={{ width: "450px" }}
        header="Cliente Details"
        modal
        className="p-fluid"
        footer={dialogFooter}
        onHide={hideDialog}
      >
        <div className="p-field">
          <label htmlFor="nombre">Nombre</label>
          {/* <InputText id="nombre" value={selected.nombre} onChange={(e) => onInputChange(e, 'nombre')} /> */}

          <InputText
            id="nombre"
            name="nombre"
            value={cliente.nombre}
            onChange={handleChange}
            required
            autoFocus
          />

          {/* className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} /> */}

          {/* {this.state.submitted && !this.state.product.name && <small className="p-invalid">Name is required.</small>} */}
        </div>
      </Dialog>
    </Fragment>
  );


  // function cambioValor() {
  //   setClientes([{id: 555, nombre: 'Prueba'}])
  // }

  // Return Component
  return (
    <div>
      <h1> Hola </h1>

      {/* <Contador /> */}

      {/* <button className="btn btn-primary" onClick={cambioValor}>Cambiar</button> */}

      <p> Este es el componente ClienteList usando Hooks</p>
      <div className="card">
        <DataTable
          header="Clientes"
          className="p-datatable-sm p-datatable-gridlines p-datatable-striped"
          value={clientes}
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
          rows={2}
          rowsPerPageOptions={[2, 5, 10]}
        // paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
        >
          <Column field="id" header="Code"></Column>
          <Column field="nombre" header="Name"></Column>
          <Column body={actionBodyTemplate}></Column>
        </DataTable>
      </div>

      {formModal}
    </div>
  );

  function actionBodyTemplate(rowData) {
    return (
      <Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editCliente(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => console.log("Confirm Delete")}
        />
      </Fragment>
    );
  }

  function editCliente(rowData) {
    setCliente(rowData);
    // console.log(cliente);
    setFormModalVisible(true);
  }
};

export default ClienteListHooks;
