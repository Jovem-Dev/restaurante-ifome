import React, { Component } from 'react';
import { Container, Row, Col, Card, Alert, CardBody, Media, Button } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumb from '../../components/Common/Breadcrumb';

import avatar from '../../assets/images/users/avatar-1.jpg';
// actions
import { editProfile } from '../../store/actions';

const storageLogado = localStorage.getItem("usuarioLogado")
class UserProfile extends Component {

    constructor(props) {
        super(props);
        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.props.editProfile(values);
    }

    state = {
        restauranteLogado: []
    }
    ///api/restaurantes/get/:nom
    componentDidMount() {
        if (storageLogado) {
            fetch(`https://api.ifome.net/api/restaurantes/get/${storageLogado}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    this.setState({ restauranteLogado: data })
                })
        } else {

        }

    }

    render() {
        const { restauranteLogado } = this.state;

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumb title="Skote" breadcrumbItem="Profile" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    {restauranteLogado.map(restaurante => (
                                        <CardBody>
                                            <Media>
                                                <div className="mr-3">
                                                    <img src={restaurante.url} alt="" className="avatar-md rounded-circle img-thumbnail" />
                                                </div>
                                                <Media body className="align-self-center">
                                                    <div className="text-muted">
                                                        <h5>{restaurante.nome}</h5>
                                                        <p className="mb-1">{restaurante.categoria}</p>
                                                        <p className="mb-0">Id: #{restaurante.id}</p>
                                                    </div>
                                                </Media>
                                            </Media>
                                        </CardBody>
                                    ))}
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { error, success } = state.Profile;
    return { error, success };
}

export default withRouter(connect(mapStatetoProps, { editProfile })(UserProfile));

