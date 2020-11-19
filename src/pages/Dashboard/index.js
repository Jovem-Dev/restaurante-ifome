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
    const [countVendas, setCountVendas] = useState([])
    const [countVendasPendentes, setCountVendasPendentes] = useState([])
    const [countVendasEntregues, setCountVendasEntregues] = useState([])
    const [countVendasAndamento, setCountVendasAndamento] = useState([])
    const [countVendasMesAtual, setCountVendasMesAtual] = useState([])
    const [vendasMesAtual, setVendasMesAtual] = useState([])
    const [pedidosPendentes, setPedidosPendentes] = useState([])
    var storageLogado = localStorage.getItem('usuarioLogado')
    const url = `/api/get/todos/${storageLogado}`
   
    useEffect(() => {
        api.get(`/api/get/todos/${storageLogado}`).then((response) => {
            setCount(response.data)

        })
        api.get(`/api/pedidos/count/vendas/${storageLogado}`).then((response) => {
            setCountVendas(response.data)

        })
        api.get(`/api/pedidos/count/vendas/pendentes/grafico/${storageLogado}`).then((response) => {
            setCountVendasPendentes(response.data)

        })
        api.get(`/api/pedidos/count/vendas/entegues/grafico/${storageLogado}`).then((response) => {
            setCountVendasEntregues(response.data)

        })
        api.get(`/api/pedidos/count/vendas/andamento/grafico/${storageLogado}`).then((response) => {
            setCountVendasAndamento(response.data)

        })
        api.get(`/api/pedidos/vendas/mes/grafico/${mesAtual}/${storageLogado}`).then((response) => {
            setCountVendasMesAtual(response.data)

        })
        api.get(`/api/get/mesAtual/${mesAtual}/${storageLogado}`).then((response) => {
            setVendasMesAtual(response.data)

        })

        api.get(`/api/get/pendente/${storageLogado}`).then((response) => {
            setPedidosPendentes(response.data)

        })


    }, [])

    const valorPedidos = count.map(count => (count.valor))
    // usando o reduce para somar os objetos de dentro do array
    const total = valorPedidos.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamento = total
    const porcentagem = total / 100
    const comissao = porcentagem * 12
    const mediaMensal = faturamento / 12

    const valorPedidosMesAtual = vendasMesAtual.map(count => (count.valor))

    const totalMesAtual = valorPedidosMesAtual.reduce(function (total, numero) {
        return total + numero;
    }, 0);

    const faturamentoMesAtual = totalMesAtual


    const [statusRestaurante, setStatusRestaurante] = useState("Fechado")
    const [corStatusRestaurante, setCorStatusRestaurante] = useState("danger")
    const aberto = "Aberto"
    const fechado = "Fechado"
    const AbrirRestaurante = (nome) => {
        api.put(`api/put/statusRestaurante/${nome}/${aberto}`)
        setStatusRestaurante("Aberto")
        setCorStatusRestaurante("success")
        api.put(`api/put/statusRestauranteOferta/${nome}/${aberto}`)


    };
    const FecharRestaurante = (nome) => {
        api.put(`api/put/statusRestaurante/${nome}/${fechado}`)
        setStatusRestaurante("Fechado")
        setCorStatusRestaurante("danger")
        api.put(`api/put/statusRestauranteOferta/${nome}/${fechado}`)

    };

    const FecharNotificacao = (nome) => {
        api.put(`api/put/fecharNotificacao/${nome}/`)
    }

    return (

        <React.Fragment>

            <div className="page-content">
                <Container fluid>


                    {/* Render Breadcrumb */}
                    <Breadcrumbs title='Dashboard' />
                    {pedidosPendentes.notificacao = "sim" ? (
                        <Alert color="success" role="alert">
                            <i className="mdi mdi-check-all mr-2"></i>
                            Você tem um novo pedido pendente
                            <Button onClick={() => { FecharNotificacao(storageLogado) }} type="button" color="primary" size="sm" className="btn btn-success float-right close"> <span aria-hidden="true">&times;</span></Button>
                        </Alert>
                    ) : (
                            console.log('')
                        )}
                    <Row>

                        <Col xl="12">
                            <Row>
                                <Col md="4">

                                    <Button onClick={() => { AbrirRestaurante(storageLogado) }} type="button" color="primary" size="sm" className="btn-rounded btn-success waves-effect waves-light mb-4">
                                        Abrir Restaurante
                                    </Button>
                                    <Button onClick={() => { FecharRestaurante(storageLogado) }} type="button" color="primary" size="sm" className="btn-rounded btn-danger waves-effect waves-light mb-4 ml-2">
                                        Fechar Restaurante
                                    </Button>

                                </Col>
                                <Col md="4">
                                    <p className="text-muted font-weight-medium">Status do Restaurante: <span className="font-weight-bold">{statusRestaurante}</span></p>

                                </Col>
                                <Col md="4">
                                    <Button type="button" color="primary" size="sm" className={"btn waves-effect waves-light ml-2 w-25 btn-" + corStatusRestaurante}>

                                    </Button>
                                </Col>
                                {/* Reports Render */}
                                {/* {countPedidos.map(countPedido => (  */}
                                <Col md="4">

                                    {countVendas.map(count => (
                                        <Card className="mini-stats-wid">
                                            <CardBody>
                                                <Media>
                                                    <Media body>
                                                        <p className="text-muted font-weight-medium">Total de Vendas</p>
                                                        <h4 className="mb-0">{count.NumeroDePedidos}</h4>
                                                    </Media>
                                                    <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span className="avatar-title">
                                                            <i className="bx bx-copy-alt font-size-24"></i>
                                                        </span>
                                                    </div>
                                                </Media>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </Col>

                                {/* ))}  */}
                                <Col md="4" >
                                    <Card className="mini-stats-wid">
                                        <CardBody>
                                            <Media>
                                                <Media body>
                                                    <p className="text-muted font-weight-medium">Faturamento em Vendas</p>
                                                    <h4 className="mb-0">R${faturamento}</h4>
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
                                <Col md="4" >
                                    <Card className="mini-stats-wid">
                                        <CardBody>
                                            <Media>
                                                <Media body>
                                                    <p className="text-muted font-weight-medium">Comissão da Plataforma</p>
                                                    <h4 className="mb-0">R${comissao.toFixed(2)}</h4>
                                                </Media>
                                                <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                    <span className="avatar-title">
                                                        <i className={"bx bx-purchase-tag-alt font-size-24"}></i>
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
                                                    {countVendasEntregues.map(count => (
                                                        <div className="text-center">
                                                            <h5 className="mb-0 font-size-20">{count.NumeroDePedidosEntregues}</h5>
                                                            <p className="text-muted">Entregues</p>
                                                        </div>
                                                    ))}
                                                </Col>
                                                <Col sm={4}>
                                                    {countVendasPendentes.map(count => (
                                                        <div className="text-center">
                                                            <h5 className="mb-0 font-size-20">{count.NumeroDePedidosPendentes}</h5>
                                                            <p className="text-muted">Pendentes</p>
                                                        </div>
                                                    ))}
                                                </Col>
                                                <Col sm={4}>
                                                    {countVendasAndamento.map(count => (
                                                        <div className="text-center">
                                                            <h5 className="mb-0 font-size-20">{count.NumeroDePedidosAndamento}</h5>
                                                            <p className="text-muted">Andamento</p>
                                                        </div>
                                                    ))}
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
                                                <Col sm={4}>
                                                    <div className="text-center">
                                                        <h5 className="mb-0 font-size-20">R${faturamento}</h5>
                                                        <p className="text-muted">Ao todo</p>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="text-center">
                                                        <h5 className="mb-0 font-size-20">R${mediaMensal.toFixed(2)}</h5>
                                                        <p className="text-muted">Média Mensal</p>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="text-center">
                                                        <h5 className="mb-0 font-size-20">R${faturamentoMesAtual}</h5>
                                                        <p className="text-muted">Mês atual</p>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <LineChart />
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col lg="12">
                                    <LatestTranaction />
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