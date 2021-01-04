import React, { Component, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, UncontrolledAlert, Modal, ModalHeader, ModalBody, ModalFooter, Media, Table, Alert } from "reactstrap";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import TopCities from "./TopCities";
import LatestTranaction from "./LatestTranaction";
import LineChart from "../AllCharts/chartist/linechart";
import PieChart from "../AllCharts/chartist/piechart";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//i18n
import { withNamespaces } from 'react-i18next';
import api from "../../services/api"
import Header from "../../components/VerticalLayout/Header";
import Sidebar from "../../components/VerticalLayout/Sidebar";
import { LoginContext } from '../../context/loginContext';
import { Switch } from "react-router-dom";

import fetch from 'node-fetch';

function Dashboard() {
    var dataLib = new Date();
    var dia = dataLib.getDate();
    var mesAtual = dataLib.getMonth();

    const [count, setCount] = useState([])
    const [countVendasPendentes, setCountVendasPendentes] = useState([])
    const [countVendasAndamento, setCountVendasAndamento] = useState([])
    const [pedidosPendentes, setPedidosPendentes] = useState([])
    const [pedidosEntregues, setPedidosEntregues] = useState([])
    var storageLogado = localStorage.getItem('usuarioLogado')
   
    useEffect(() => {
             
        async function loadCount(){
            const response = await api.get(`/pedidos/countEntregues/${storageLogado}`, )
            setCount(response.data)
        }
        loadCount();
        async function loadCountPendentes(){
            const response = await api.get(`/pedidos/countPendentes/${storageLogado}`)
            setCountVendasPendentes(response.data)
        }
        loadCountPendentes();
        async function loadCountAndamento(){
            const response = await api.get(`/pedidos/countAndamento/${storageLogado}`)
            setCountVendasAndamento(response.data)
        }
        loadCountAndamento();
    
        async function loadPendentes(){
            const response = await api.get(`/pedidos/pendenteRestaurante/${storageLogado}`)
            setPedidosPendentes(response.data)
        }
        loadPendentes();

        async function loadEntregues(){
            const response = await api.get(`/pedidos/entregueRestaurante/${storageLogado}`)
            setPedidosEntregues(response.data)
        }
        loadEntregues();

        
    
    }, [])

    var pedidosValor = pedidosEntregues.map(count => (count.valor))
    var total = 0;
    for ( var i = 0; i < pedidosValor.length; i++ ){
       total += pedidosValor[i];
    }
    const faturamento = total
    const mediaMensal = faturamento / 12; 

    const [statusRestaurante, setStatusRestaurante] = useState("Fechado")
    const [corStatusRestaurante, setCorStatusRestaurante] = useState("danger")
   

    return (

        <React.Fragment>

            <div className="page-content">
                <Container fluid>


                    {/* Render Breadcrumb */}
                    <Breadcrumbs title='Dashboard' />
                    {pedidosPendentes != '' ? (
                        <Alert color="success" role="alert">
                            <i className="mdi mdi-check-all mr-2"></i>
                            Você tem um novo pedido pendente
                        </Alert>
                    ) : (
                            console.log('')
                        )}
                    <Row>

                        <Col xl="12">
                            <Row>
                               
                                {/* Reports Render */}
                                {/* {countPedidos.map(countPedido => (  */}
                                <Col md="6">

                                  
                                        <Card className="mini-stats-wid">
                                            <CardBody>
                                                <Media>
                                                    <Media body>
                                                        <p className="text-muted font-weight-medium">Total de Vendas</p>
                                                        <h4 className="mb-0">{count}</h4>
                                                    </Media>
                                                    <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span className="avatar-title">
                                                            <i className="bx bx-copy-alt font-size-24"></i>
                                                        </span>
                                                    </div>
                                                </Media>
                                            </CardBody>
                                        </Card>
                                  
                                </Col>

                                {/* ))}  */}
                                <Col md="6" >
                                    <Card className="mini-stats-wid">
                                        <CardBody>
                                            <Media>
                                                <Media body>
                                                    <p className="text-muted font-weight-medium">Faturamento em Vendas</p>
                                                    <h4 className="mb-0">R$ {faturamento}</h4>
                                                </Media>
                                                <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                    <span className="avatar-title">
                                                        <i className={"bx bx-archive-in font-size-24"}></i>
                                                    </span>
                                                </div>
                                            </Media>
                                        </CardBody>
                                    </Card>
                                </Col>
                               

                                <Col xl="4">
                                    <Card>
                                        <CardBody>
                                            <CardTitle className="mb-4">Gerencia de Pedidos</CardTitle>
                                            <Row className="justify-content-center">

                                                <Col sm={4}>
                                                   
                                                        <div className="text-center">
                                                            <h5 className="mb-0 font-size-20">{count}</h5>
                                                            <p className="text-muted">Entregues</p>
                                                        </div>
                                                  
                                                </Col>
                                                <Col sm={4}>
                                                    
                                                        <div className="text-center">
                                                            <h5 className="mb-0 font-size-20">{countVendasPendentes}</h5>
                                                            <p className="text-muted">Pendentes</p>
                                                        </div>
                                                 
                                                </Col>
                                                <Col sm={4}>
                                              
                                                        <div className="text-center">
                                                            <h5 className="mb-0 font-size-20">{countVendasAndamento}</h5>
                                                            <p className="text-muted">Andamento</p>
                                                        </div>
                                                 
                                                </Col>
                                            </Row>
                                            <PieChart />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xl="8">
                                    <Card>
                                        <CardBody>
                                            <CardTitle className="mb-4">Faturamento</CardTitle>
                                            <Row className="justify-content-center">
                                                <Col sm={6}>
                                                    <div className="text-center">
                                                        <h5 className="mb-0 font-size-20">R$ {faturamento}</h5>
                                                        <p className="text-muted">Ao todo</p>
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className="text-center">
                                                        <h5 className="mb-0 font-size-20">R$ {mediaMensal.toFixed(2)}</h5>
                                                        <p className="text-muted">Média Mensal</p>
                                                    </div>
                                                </Col>
                                               
                                            </Row>

                                            <LineChart />
                                        </CardBody>
                                    </Card>
                                </Col>

                                
                            </Row>


                        </Col>
                    </Row>


                </Container>
            </div>

        </React.Fragment>
    );
}


export default Dashboard;