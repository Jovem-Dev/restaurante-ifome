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
    const response = await api.delete(`/promocoes/${id}`);
}

class PromocaoDetalhe extends Component {
    

    state = {
        promocoes: []
    }
  

    async componentDidMount() {
        const response = await api.get(`/promocoes/${this.props.id}`)
        this.setState({ promocoes: response.data })
       
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
                                                <Col xs="8">
                                                    <address>
                                                        <strong>Informações:</strong><br />
                                                    {promocao.categoria}<br />
                                                    
                                                   
                                                </address>
                                                </Col>
                                               
                                            </Row>
                                            
                                          
                                            <div className="d-print-none">
                                                <div className="float-left">
                                                    <Link to="#" onClick={this.printInvoice} className="btn btn-success waves-effect waves-light mr-2"><i className="fa fa-print"></i></Link>
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