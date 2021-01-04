import React, { Component, Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Input, FormGroup, Label, Button } from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import api from '../../services/api';

var storageLogado = localStorage.getItem('usuarioLogado')
export default function CadastrarOfertas() {
    const [nome, setNome] = useState(""); // escuta o que o usuario digita
    const [preco, setPreco] = useState("");
    const [url, setUrl] = useState("");
    const [novoPreco, setNovoPreco] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [tempo, setTempo] = useState("");
    const restaurante = storageLogado // aqui vai entrar o restaurantes que esta logado
   
        async function handleSubmit(){
            const body = {
                nome: nome, 
                url: url,
                preço: preco, 
                novo_preco: novoPreco,
                restaurante: restaurante,
                ingredientes: ingredientes,
                tempo: tempo
            };
        
            const responsePedido = api.post("/ofertas", body).then(() =>{
                alert("Oferta Cadastrada com sucesso")
                window.location.reload()
                window.location.href="/dashboard"
            }).catch((e) =>{
                console.log(e.Message)
            });
        }  
        
        return (
            
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Ofertas" breadcrumbItem="Nova Oferta" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Cadastrar uma nova oferta</CardTitle>
                                        <form className="outer-repeater">
                                            <div data-repeater-list="outer-group" className="outer">
                                                <div data-repeater-item className="outer">
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="taskname" className="col-form-label col-lg-2">Nome da oferta</Label>
                                                        <Col lg="10">
                                                            <Input id="taskname" name="taskname" type="text" className="form-control" placeholder="Nome da Oferta"
                                                            value={nome}
                                                            onChange={e => setNome(e.target.value)} //pega o valor de dentro do campo e envia para a var 
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="preco" className="col-form-label col-lg-2">Preço</Label>
                                                        <Col lg="10">
                                                            <Input id="preco" name="preco" type="number" className="form-control" placeholder="Digite o Preço da oferta" 
                                                             value={preco}
                                                             onChange={e => setPreco(e.target.value)} //pega o valor de dentro do campo e envia para a var
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="novopreco" className="col-form-label col-lg-2">Novo Preço</Label>
                                                        <Col lg="10">
                                                            <Input id="novopreco" name="novopreco" type="number" className="form-control" placeholder="Digite o preço em promoção" 
                                                             value={novoPreco}
                                                             onChange={e => setNovoPreco(e.target.value)} //pega o valor de dentro do campo e envia para a var
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="ingredientes" className="col-form-label col-lg-2">Ingredientes</Label>
                                                        <Col lg="10">
                                                            <Input id="ingredientes" name="ingredientes" type="text" className="form-control" placeholder="Digite os Ingredientes" 
                                                             value={ingredientes}
                                                             onChange={e => setIngredientes(e.target.value)} //pega o valor de dentro do campo e envia para a var
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="tempo" className="col-form-label col-lg-2">Tempo</Label>
                                                        <Col lg="10">
                                                            <Input id="tempo" name="tempo" type="text" className="form-control" placeholder="Tempo de preparo do pedido" 
                                                             value={tempo}
                                                             onChange={e => setTempo(e.target.value)} //pega o valor de dentro do campo e envia para a var
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                   
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="urlimagem" className="col-form-label col-lg-2">Url da Imagem</Label>
                                                        <Col lg="10">
                                                            <Input id="urlimagem" name="urlimagem" type="text" className="form-control" placeholder="Digite a url da imagem " 
                                                             value={url}
                                                             onChange={e => setUrl(e.target.value)} //pega o valor de dentro do campo e envia para a var
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                   
                                                </div>
                                            </div>
                                        </form>
                                        <Row className="justify-content-end">
                                            <Col lg="10">
                                                <Button type="submit" color="primary" onClick={handleSubmit}>Salvar oferta</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }


