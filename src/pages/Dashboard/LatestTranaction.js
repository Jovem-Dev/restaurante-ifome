import React, { Component } from "react";

import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../services/api"

var storageLogado = localStorage.getItem('usuarioLogado')
const EditPedido = (id) => {
    api.put(`api/put/pendente/${id}/${storageLogado}`).then((err, result) => {
        console.log('Editado com sucesso')
        window.location.href = "/dashboard"
        document.location.reload(true)
    })
};
const DeletePedido = (id) => {
    api.delete(`api/delete/${id}/${storageLogado}`).then((err, result) => {
        console.log('Editado com sucesso')
        window.location.href = "/dashboard"
        document.location.reload(true)
    })
}

class LatestTranaction extends Component {
    state = {
        pedidos: []
    }

    async componentDidMount() {
        const response = await api.get(`/pedidos/pendenteRestaurante/${storageLogado}`)
        this.setState({ pedidos: response.data })
    }


    render() {

        const { pedidos } = this.state;
        console.log(pedidos)
        return (

            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Pedidos Pendentes
                        </CardTitle>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>

                                        <th>ID</th>
                                        <th>Pedido</th>
                                        <th>Data</th>
                                        <th>Valor</th>
                                        <th>Status do Pedido</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pedidos.map(pedido => (
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={pedido.id} />
                                                    <label className="custom-control-label" htmlFor={pedido.id}>&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><Link to="#" className="text-body font-weight-bold"> {pedido.pedido} </Link> </td>
                                            <td>{pedido.data}</td>
                                            <td>
                                                {pedido.valor}
                                            </td>

                                            <td>
                                                <Badge className={"font-size-12 badge-soft-" + pedido.status_cor} color={pedido.status_cor} pill>{pedido.status}</Badge>
                                            </td>
                                            <td>
                                                <Button onClick={() => { EditPedido(pedido.id) }} type="button" color="primary" size="sm" className="btn-rounded btn-success waves-effect waves-light">
                                                    Aceitar
                                                    </Button>
                                                <Button onClick={() => { DeletePedido(pedido.id) }} type="danger" color="primary" size="sm" className="btn-rounded btn-danger waves-effect waves-light ml-2" >
                                                    Recusar
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                       
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default LatestTranaction;
