import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import OfertaDetalhe from './oferta-detalhe';
import ReactDOM from 'react-dom'

class CardInvoice extends Component {
    
    render() {
        const name = this.props.data.nome
        const id = this.props.data.id
        // const nameIcon = name.charAt(0);
        return (
            <React.Fragment >
                <Router>
                <Col xl="6" sm="6">
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

                                        <h5 className="mb-1 font-size-15 text-truncate">{this.props.data.nome}</h5>
                                        <Link to="#" className="text-muted">Jovem Dev</Link>
                                    </div>
                                </Col>

                                <Col lg="6">
                                    <div>
                                        <Link to="/oferta-detalhe" className="d-block text-primary mb-2">Oferta #{this.props.data.id}</Link>
                                        
                                        <h5 className="text-truncate mb-4 mb-lg-5">{this.props.data.ingredientes}</h5>
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item mr-3">
                                                <h5 className="font-size-14" id="amountTooltip">
                                                    <i className="bx bx-money mr-1 text-primary"></i>
                                                                    $ {this.props.data.preço}
                                                    <UncontrolledTooltip placement="top" target="amountTooltip">
                                                        Preço
                                                    </UncontrolledTooltip>
                                                </h5>
                                            </li>
                                            <li className="list-inline-item mr-3">
                                                <h5 className="font-size-14" id="amountTooltip">
                                                    <i className="bx bx-money mr-1 text-primary"></i>
                                                                    $ {this.props.data.novo_preco}
                                                    <UncontrolledTooltip placement="top" target="amountTooltip">
                                                        Novo Preço
                                                    </UncontrolledTooltip>
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Route exact path="/oferta-detalhe" render={ (props) => <OfertaDetalhe {...props} id={id} />}/>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                </Router>
            </React.Fragment>
            
        );
        
    }
  
}


export default CardInvoice;