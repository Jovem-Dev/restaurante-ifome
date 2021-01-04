import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Image
import logo from "../../assets/images/logoMenor.png";
import api from "../../services/api"

var storageLogado = localStorage.getItem('usuarioLogado')
async function excluir(id){
    const response = await api.delete(`/ofertas/${id}`)
    window.location.href('./ofertas-list')
}
class OfertaDetalhe extends Component {

    state = {
        ofertas: []
    }
  
   
    async componentDidMount() {
        const response = await api.get(`/ofertas/${this.props.id}`)
        this.setState({ ofertas: response.data })
    }
    constructor() {
        super();
        this.printInvoice.bind(this);
    }

    //Print the Invoice
    printInvoice() {
        window.print();
    }

    render() {

        const { ofertas } = this.state;
        console.log(ofertas)
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    
                        <Row>
                            <Col lg="12">
                                {ofertas.map(oferta => (
                                    <Card>
                                        <CardBody>
                                            <div className="invoice-title">
                                                <h4 className="float-right font-size-16">ID # {oferta.id}</h4>
                                                <div className="mb-4">

                                                    <img src={logo} alt="logo" height="20" />
                                                Jovem Dev
                                            </div>
                                            </div>
                                            <hr />
                                            <Row>
                                                <Col xs="6">
                                                    <address>
                                                        <strong>Informações:</strong><br />
                                                    {oferta.nome}<br />
                                                    {oferta.ingredientes}<br />
                                                   
                                                </address>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <address>
                                                    <strong>Preparo:</strong><br />
                                                    {oferta.tempo}<br />
                                                </address>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="12" className="mt-3">
                                                    <address>
                                                        <strong>Preço:</strong><br />
                                                        R${oferta.preço} <br />
                                                        <strong>Promoção:</strong><br />
                                                        R${oferta.novo_preco}
                                                </address>
                                                </Col>
                                               
                                            </Row>
                                          
                                            <div className="d-print-none">
                                                <div className="float-left">
                                                    <Link to="#" onClick={this.printInvoice} className="btn btn-success waves-effect waves-light mr-2"><i className="fa fa-print"></i></Link>
                                                    <Link onClick={() => excluir(ofertas.id)} className="btn btn-danger w-md waves-effect waves-light">Excluir</Link>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                ))}
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default OfertaDetalhe;