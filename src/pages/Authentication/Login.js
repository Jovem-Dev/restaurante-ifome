import React, { Component, useState, useContext} from 'react';

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { loginUser, apiError } from '../../store/actions';

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/favicon.png";
import api from '../../services/api';
import { LoginContext } from '../../context/loginContext';
import App from '../../App';

function Login() {
   
    
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    var usuarioLogado = nome
    localStorage.setItem('usuarioLogado', usuarioLogado);
    
   
    const loginFun = () => {
        api.post("/loginRestaurante", { nome: nome, senha: senha }).then((response) => {
            if (response.data.message) {
                console.log(response.data.message)
                window.location.href = "/login"
            } else {
               console.log(response.data)
               window.location.href = "/dashboard"
            }
        })
    }

    return (
   
        <React.Fragment>
            <Router>
            <div className="home-btn d-none d-sm-block">
                <Link to="/" className="text-dark"><i className="bx bx-home h2"></i></Link>
            </div>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-soft-primary">
                                    <Row>
                                        <Col className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Bem vindo ao Jovem Dev!</h5>
                                                <p>Preencha os campos para logar.</p>
                                            </div>
                                        </Col>
                                        <Col className="col-5 align-self-end">
                                            <img src={profile} alt="" className="img-fluid" />
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <div>
                                        <Link>
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src={logo} alt="" className="rounded-circle" height="34" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">

                                        <AvForm className="form-horizontal">

                                            
                                            <div className="form-group">
                                                <AvField name="name" label="Nome" value="Restaurante Noronha" className="form-control" placeholder="Insira o nome" type="text" required 
                                                onChange={ (e) => {
                                                    setNome(e.target.value)
                                                }}/>
                                            </div>

                                            <div className="form-group">
                                                <AvField name="password" label="Senha" value="123456" type="password" required placeholder="Insira a senha" 
                                                onChange={ (e) => {
                                                    setSenha(e.target.value)
                                                }}
                                                />
                                            </div>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                <label className="custom-control-label" htmlFor="customControlInline">Lembrar me</label>
                                            </div>

                                            <div className="mt-3">
                                                <button className="btn btn-primary btn-block waves-effect waves-light" type="submit" onClick={loginFun}>Logar</button>
                                            </div>
                                            
                                            <div className="mt-4 text-center">
                                                <Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Esqueceu a senha?</Link>
                                            </div>
                                        </AvForm>
                                    </div>
                                </CardBody>
                                <Route exact path="/app" render={ (props) => <App {...props} nome="Gustavo"/>}/>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>Ainda não tem uma conta ? <Link to="register" className="font-weight-medium text-primary"> Crie uma </Link> </p>
                                <p>© {new Date().getFullYear()} Gustavo Noronha. para<i className="mdi mdi-heart text-danger"></i> Jovem dev</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </Router>
        </React.Fragment>
      
    );

}


export default Login;

