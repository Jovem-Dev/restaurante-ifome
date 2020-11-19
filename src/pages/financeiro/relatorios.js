import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, NavItem, NavLink, Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import ReactApexChart from 'react-apexcharts';

import { MDBDataTable } from "mdbreact";
import "../Crypto/datatables.scss";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import api from '../../services/api';

var storageLogado = localStorage.getItem('usuarioLogado')
var dataLib = new Date();
var dia = dataLib.getDate();         
var mesAtual = dataLib.getMonth();
class CryptoWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countFaturamento: [],
            countOfertas: [],
            countVendas: [],
            countVendasMesAtual: [],
            series: [{ type: "area", name: "BTC", data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47] }, { type: "area", name: "ETH", data: [28, 41, 52, 42, 13, 18, 29, 18, 36, 51, 55, 35] }, { type: "line", name: "LTC", data: [45, 52, 38, 24, 33, 65, 45, 75, 54, 18, 28, 10] }],
            options: { chart: { toolbar: { show: !1 } }, dataLabels: { enabled: !1 }, stroke: { curve: "smooth", width: 2, dashArray: [0, 0, 3] }, fill: { type: "solid", opacity: [.15, .05, 1] }, xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }, colors: ["#f1b44c", "#3452e1", "#50a5f1"] },
            isMenu: false,
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleMenu() {
        this.setState(prevState => ({
            isMenu: !prevState.isMenu
        }));
    }


    async componentDidMount() {
        const response = await api.get(`/api/get/todos/${storageLogado}`)
        this.setState({ countFaturamento: response.data })

        const responseOfertas = await api.get(`/api/ofertas/count/vendas${storageLogado}`)
        this.setState({ countOfertas: responseOfertas.data })

        const responseVendas = await api.get(`/api/pedidos/count/vendas${storageLogado}`)
        this.setState({ countVendas: responseVendas.data })

        const responseVendasMesAtual = await api.get(`/api/get/mesAtual/${mesAtual}/${storageLogado}`)
        this.setState({ countVendasMesAtual: responseVendasMesAtual.data })

    
    }


    render() {
        const { countFaturamento } = this.state;
        const { countOfertas } = this.state;
        const { countVendas } = this.state;
        const { countVendasMesAtual } = this.state;

        const valorPedidos = countFaturamento.map(count => (count.valor))
        // usando o reduce para somar os objetos de dentro do array
        const total = valorPedidos.reduce(function (total, numero) {
            return total + numero;
        }, 0);

        const faturamento = total
        const porcentagem = total / 100
        const comissao = porcentagem * 12


        const valorPedidosMesAtual = countVendasMesAtual.map(count => (count.valor))

        const totalMesAtual = valorPedidosMesAtual.reduce(function (total, numero) {
            return total + numero;
        }, 0);

        const faturamentoMesAtual = totalMesAtual
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Relatório" breadcrumbItem="Carteira" />

                        <Row>
                            <Col xl="12">
                                <Card>

                                    <CardBody className="border-top">

                                        <Row>

                                            <Col sm="6">

                                                <div>
                                                    <p className="text-muted mb-2">Total de faturamento</p>
                                                    <h5>R$ {faturamento}</h5>
                                                </div>
                                            </Col>
                                            <Col sm="6">

                                                <div className="text-sm-right mt-4 mt-sm-0">
                                                    <p className="text-muted mb-2">Faturamento desse mês</p>
                                                    <h5>+ R$ {faturamentoMesAtual}  <span className="badge badge-success ml-1 align-bottom">+ 1.3 %</span></h5>

                                                </div>

                                            </Col>


                                        </Row>
                                    </CardBody>

                                    <CardBody className="border-top">
                                        <p className="text-muted mb-4">Totais</p>
                                        <div className="text-center">
                                            <Row>
                                                <Col sm="4">
                                                    {countOfertas.map(count => (
                                                        <div>
                                                            <div className="font-size-24 text-primary mb-2">
                                                                <i className="bx bx-send"></i>
                                                            </div>
                                                            <p className="text-muted mb-2">Ofertas</p>
                                                            <h5> {count.NumeroDeOfertas}</h5>
                                                        </div>
                                                    ))}
                                                </Col>
                                                <Col sm="4">
                                                    {countVendas.map(count => (
                                                        <div className="mt-4 mt-sm-0">
                                                            <div className="font-size-24 text-primary mb-2">
                                                                <i className="bx bx-import"></i>
                                                            </div>

                                                            <p className="text-muted mb-2">Vendas</p>
                                                            <h5>  {count.NumeroDePedidos}</h5>

                                                        </div>
                                                    ))}
                                                </Col>
                                                <Col sm="4">
                                                    <div className="mt-4 mt-sm-0">
                                                        <div className="font-size-24 text-primary mb-2">
                                                            <i className="bx bx-wallet"></i>
                                                        </div>

                                                        <p className="text-muted mb-2">Comissão para a plataforma</p>
                                                        <h5>R${comissao.toFixed(2)}</h5>

                                                    </div>

                                                </Col>

                                            </Row>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default CryptoWallet;