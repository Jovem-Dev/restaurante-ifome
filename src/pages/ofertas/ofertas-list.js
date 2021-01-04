import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card invoice
import CardInvoice from "./card-invoice"

import api from "../../services/api"
var storageLogado = localStorage.getItem('usuarioLogado')
class ListarOfertas extends Component {
    state = {
        ofertas: []
    }
     
    async componentDidMount(){
        const response = await api.get("/ofertas")
        this.setState({ ofertas: response.data })
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Ofertas" breadcrumbItem="Ofertas" />

                        <Row>
                            {
                                this.state.ofertas.map((invoice) =>
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

export default ListarOfertas;