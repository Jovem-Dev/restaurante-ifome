import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import api from '../../services/api';
import PedidosPendenteDetalhe from './pedidos-pendente-detalhe';

var storageLogado = localStorage.getItem('usuarioLogado')
const EditPedido = (id) => {
    api.put(`api/put/pendente/${id}/${storageLogado}`).then((err, result) =>{
      console.log('Editado com sucesso')
      window.location.href="/dashboard"
      document.location.reload()
    })
};
const DeletePedido = (id)=>{
    api.delete(`api/delete/${id}/${storageLogado}`).then((err, result) =>{
        console.log('Editado com sucesso')
        window.location.href="/dashboard"
        document.location.reload()
    })
}
class CardInvoicePendente extends Component {

    render() {
        const name = this.props.data.pedido
        const id = this.props.data.id
        // const nameIcon = name.charAt(0);
        return (
            <React.Fragment>
                <Router>
                    <Col xl="4" sm="4">
                        <Card >
                            <CardBody>
                                <Row>
                                    <Col lg="4">
                                        <div className="text-lg-center">
                                            {
                                                this.props.data.url !== "Null"
                                                    ? <img src={this.props.data.url} className="avatar-sm mr-3 rounded-circle mb-4 float-left float-lg-none" alt="img" />
                                                    : <div className="avatar-sm mr-3 mx-lg-auto mb-4 float-left float-lg-none">
                                                        <span className={"avatar-title rounded-circle text-primary font-size-16"}>

                                                        </span>
                                                    </div>
                                            }

                                            <h5 className="mb-1 font-size-15 text-truncate">{this.props.data.pedido}</h5>
                                            <Link to="#" className="text-muted">Jovem Dev</Link>
                                        </div>
                                    </Col>

                                    <Col lg="6">
                                        <div>
                                            <Link to="/pedido-pendente-detalhe" className="d-block text-primary mb-2">Oferta #{this.props.data.id}</Link>

                                            <h5 className="text-truncate mb-4 mb-lg-5">{this.props.data.endereco}</h5>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item mr-3">
                                                    <h5 className="font-size-14" id="amountTooltip">
                                                        <i className="bx bx-money mr-1 text-primary"></i>
                                                                    $ {this.props.data.valor}
                                                        <UncontrolledTooltip placement="top" target="amountTooltip">
                                                            Preço
                                                    </UncontrolledTooltip>
                                                    </h5>
                                                </li>

                                            </ul>
                                        </div>
                                    </Col>
                                    <div className="float-left mt-2">
                                        <Link onClick={() => {EditPedido(id)}} to="#" className="btn btn-success w-md waves-effect waves-light">Aceitar</Link>
                                        <Link onClick={() => {DeletePedido(id)}} to="#" className="btn btn-danger w-md waves-effect waves-light ml-2">Recusar</Link>
                                    </div>
                                    <Route exact path="/pedido-pendente-detalhe" render={(props) => <PedidosPendenteDetalhe {...props} id={id} /> } />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Router>
            </React.Fragment>
        );
    }
}

export default CardInvoicePendente;