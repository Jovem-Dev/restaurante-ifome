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
export default function CadastrarPromocoes() {
    const [nome, setNome] = useState(""); // escuta o que o usuario digita
    const [categoria, setCategoria] = useState("");
    const [url, setUrl] = useState("");
    const restaurante = storageLogado // aqui vai entrar o restaurantes que esta logado
   
    async function handleSubmit(){

        const body = {
            nome: nome, 
            categoria: categoria, 
            restaurante: restaurante,
            url: url
        };
    
          
        const response = await api.post(`promocoes`, body).then(() =>{
          alert("Promoção Cadastrada com sucesso")
          window.location.reload()
          window.location.href="#"
        }).catch((e) =>{
          console.log(e.Message)
        })
    }
        
        return (
            
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Promoções" breadcrumbItem="Nova Promoção" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Cadastrar uma nova Promoção</CardTitle>
                                        <form className="outer-repeater">
                                            <div data-repeater-list="outer-group" className="outer">
                                                <div data-repeater-item className="outer">
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="taskname" className="col-form-label col-lg-2">Nome da oferta</Label>
                                                        <Col lg="10">
                                                            <Input id="taskname" name="taskname" type="text" className="form-control" placeholder="Nome da Promoção"
                                                            value={nome}
                                                            onChange={e => setNome(e.target.value)} //pega o valor de dentro do campo e envia para a var 
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="categoria" className="col-form-label col-lg-2">Categoria</Label>
                                                        <Col lg="10">
                                                            <Input id="categoria" name="categoria" type="text" className="form-control" placeholder="Digite a categoria da Promoção" 
                                                             value={categoria}
                                                             onChange={e => setCategoria(e.target.value)} //pega o valor de dentro do campo e envia para a var
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="url" className="col-form-label col-lg-2">Imagem da Promoção</Label>
                                                        <Col lg="10">
                                                            <Input id="url" name="url" type="text" className="form-control" placeholder="Digite a url da imagem" 
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
                                                <Button type="submit" color="primary" onClick={handleSubmit}>Salvar Promoção</Button>
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


