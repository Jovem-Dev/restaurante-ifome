import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import PromocaoDetalhe from './promocao-detalhe';

class CardInvoice extends Component {
    
    render() {
        const name = this.props.data.nome
        const id = this.props.data.id
        // const nameIcon = name.charAt(0);
        return (
            <React.Fragment>
                <Router>
                <Col xl="6" sm="6">
                    <Card>
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

                                        <Link to="#" className="text-muted">Jovem Dev</Link>
                                    </div>
                                </Col>

                                <Col lg="8">
                                    <div>
                                        <Link to="/promocao-detalhe" className="d-block text-primary mb-2">Oferta #{this.props.data.id}</Link>
                                        <h5 className="text-truncate mb-4 mb-lg-5">{this.props.data.categoria}</h5>
                                        <ul className="list-inline mb-0">
                                           
                                        </ul>
                                    </div>
                                </Col>
                                <Route exact path="/promocao-detalhe" render={ (props) => <PromocaoDetalhe {...props} id={id} />}/>
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