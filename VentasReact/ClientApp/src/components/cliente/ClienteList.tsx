import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
// import ClienteService from '../../services/ClienteService';
import * as Constants from '../../Constants'

interface ICliente {
    id: number,
    nombre: string
}

interface IProps { }

interface IState {
    error: boolean,
    isLoaded: boolean,
    clientes: ICliente[];
}

const baseUrl = Constants.APIURL + '/cliente'

export class ClienteList extends Component<IProps, IState> {
    // static displayName = ClienteList.name;

    constructor(props: IProps) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            clientes: []
        };
    }


    // componentDidMount() {
    //     let _this = this;

    //     fetch(baseUrl)
    //         .then(function (response) {
    //             if (response.ok) {
    //                 response.json();
    //                 _this.setState({
    //                     isLoaded: true,
    //                     clientes: result.data
    //                 });

    //             } else {
    //                 console.log('Respuesta de red OK pero respuesta HTTP no OK');
    //             }
    //         })

    //         .catch(function (error) {
    //             console.log('Hubo un problema con la petición Fetch:' + error.message);
    //         });
    // }

    componentDidMount() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        clientes: result.data
                    });

                    console.log(this.state.clientes);
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    // peticionGet = async () => {
    //     let _this = this;
    //     await fetch(baseUrl, {
    //         method: 'GET',
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     }).then(function (response) {

    //         console.log(response.json);

    //         return response.json();

    //     }).then(function (data: ICliente[]) {

    //         console.log(data);

    //         _this.setState({ data });

    //     })
    // }

    render() {
        // const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        // const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

        return (
            <div>
                <h1> Hola </h1>
                <p> Este es el componente ClienteList 1</p>
                <div className="card">
                    <DataTable
                        header="Clientes"
                        className="p-datatable-sm p-datatable-gridlines p-datatable-striped"
                        value={this.state.clientes}
                        paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}" rows={2} rowsPerPageOptions={[2, 5, 10]}
                    // paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                    >

                        <Column field="id" header="Code"></Column>
                        <Column field="nombre" header="Name"></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}


