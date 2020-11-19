import React, { Component, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { Link } from "react-router-dom";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/favicon.png";
import api from '../../services/api';

function Register() {
  /// Logica de Registro de usuario
  const [url, setUrl] = useState(""); // escuta o que o usuario digita
  const [nome, setNome] = useState("");
  const [estrelas, setEstrelas] = useState("")
  const [categoria, setCategoria] = useState("")
  const [tempo, setTempo] = useState("")
  const [distancia, setDistancia] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [conSenha, setConSenha] = useState("")

  async function handleSubmit() {

    const data = {
      url: url,
      nome: nome,
      estrelas: estrelas,
      categoria: categoria,
      tempo: tempo,
      distancia: distancia,
      email: email,
      senha: senha
    }

    console.log(data)
    const response = await api.post(`/api/restaurantes/insert`, data).then(() => {
      alert("Usuario Cadastrado com sucesso")
    }).catch((e) => {
      console.log(e.Message)
    })
    const statusRestaurante = "Em Aprovação"
    api.put(`api/put/statusRestauranteOferta/${nome}/${statusRestaurante}`)
  }
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2"></i>
        </Link>
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
                        <h5 className="text-primary">Faça seu Registro gratuitamente</h5>
                        <p>Preencha o campo com seus dados</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link>
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                     
                    >
                     
                      <div className="form-group">
                        <AvField
                          name="url"
                          label="Url da foto"
                          className="form-control"
                          placeholder="Coloque a url da foto do seu restaurante"
                          type="text"
                          required
                          value={url}
                          onChange={e => setUrl(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <AvField
                          name="nome"
                          label="Nome"
                          type="text"
                          required
                          placeholder="Coloque o nome do restaurante"
                          value={nome}
                          onChange={e => setNome(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <AvField
                          name="estrelas"
                          label="Estrelas"
                          type="number"
                          required
                          placeholder="Digite a quantidade de estrelas"
                          value={estrelas}
                          onChange={e => setEstrelas(e.target.value)}
                        />
                      </div>
                   
                      <div className="form-group">
                        <AvField
                          name="categoria"
                          label="Categoria"
                          type="text"
                          required
                          placeholder="Digite a categoria do seu restaurante"
                          value={categoria}
                          onChange={e => setCategoria(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <AvField
                          name="tempo"
                          label="Tempo"
                          type="text"
                          required
                          placeholder="Digite o tempo de entrega minimo"
                          value={tempo}
                          onChange={e => setTempo(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <AvField
                          name="distancia"
                          label="Distancia"
                          type="text"
                          required
                          placeholder="Digite a distancia minima"
                          value={distancia}
                          onChange={e => setDistancia(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <AvField
                          name="email"
                          label="Email"
                          type="email"
                          required
                          placeholder="Digite o email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <AvField
                          name="senha"
                          label="Senha"
                          type="password"
                          required
                          placeholder="Digite a senha para acesso"
                          value={senha}
                          onChange={e => setSenha(e.target.value)}
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Resgistrar
                          </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Você esta sob proteção dos nossos{" "}
                          <Link to="#" className="text-primary">
                            Termos de uso
                            </Link>
                        </p>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Ja tem uma conta ?{" "}
                  <Link
                    to="/login"
                    className="font-weight-medium text-primary"
                  >
                    {" "}
                      Login
                    </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Feito por Gustavo noronha para{" "}
                  <i className="mdi mdi-heart text-danger"></i> Jovem Dev
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );

}

export default Register;
