import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card invoice
import CardInvoice from "./card-invoice"

import api from "../../services/api"
var storageLogado = localStorage.getItem('usuarioLogado')

class ListarPromocoes extends Component {
    state = {
        promocoes: []
    }
     
    async componentDidMount(){

        const response = await api.get("/promocoes")
        this.setState({ promocoes: response.data })
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Promoções" breadcrumbItem="Promoções" />

                        <Row>
                            {
                                this.state.promocoes.map((invoice) =>
                                    <CardInvoice data={invoice} />
                                )
                            }
                        </Row>
                        <Row>
                            <Col xs="12">
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success"><i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Buscando por registros</Link>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default ListarPromocoes;