import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Image
import logo from "../../assets/images/logoMenor.png";
import api from "../../services/api"

var storageLogado = localStorage.getItem('usuarioLogado')
const excluir = (id) => {
    api.delete(`/api/promocoes/delete/${id}/${storageLogado}` )
    window.location.href('./promocoes-list')
}

class PromocaoDetalhe extends Component {
    

    state = {
        promocoes: []
    }
  

    async componentDidMount() {
        const response = await api.get(`/api/promocoes/get/${this.props.id}/${storageLogado}`)
        this.setState({ promocoes: response.data })
        console.log(response.data)
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

        const { promocoes } = this.state;
        console.log(promocoes)
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    
                        <Row>
                            <Col lg="12">
                                {promocoes.map(promocao => (
                                    <Card>
                                        <CardBody>
                                            <div className="invoice-title">
                                                <h4 className="float-right font-size-16">ID # {promocao.id}</h4>
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
                                                    {promocao.nome}<br />
                                                    
                                                   
                                                </address>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <address>
                                                    <strong>Categoria:</strong><br />
                                                    {promocao.categoria}<br /><br />
                                                </address>
                                                </Col>
                                            </Row>
                                            
                                          
                                            <div className="d-print-none">
                                                <div className="float-left">
                                                    <Link to="#" onClick={this.printInvoice} className="btn btn-success waves-effect waves-light mr-2"><i className="fa fa-print"></i></Link>
                                                    <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Editar</Link>
                                                    <Link onClick={() => excluir(promocao.id)} className="btn btn-danger w-md waves-effect waves-light">Excluir</Link>
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

export default PromocaoDetalhe;