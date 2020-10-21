import axios from "axios";

export class ClienteService {

    // baseUrl = "http://localhost:8080/api/clientes/";
    //baseUrl = "https://hg-rest-api.herokuapp.com/api/clientes/";
    baseUrl = "https://localhost:44313/api/cliente/";

    create(cliente) {
        return axios.post(this.baseUrl + "cliente/", cliente).then(res => res.data);
    }

    readAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(cliente) {
        return axios.put(this.baseUrl + "cliente/" + cliente._id, cliente).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "cliente/" + id).then(res => res.data);
    }
}