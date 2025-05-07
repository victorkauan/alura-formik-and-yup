import React from "react";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";

const estadosBrasileiros = [
    { text: "Acre", value: "AC" },
    { text: "Alagoas", value: "AL" },
    { text: "Amapá", value: "AP" },
    { text: "Amazonas", value: "AM" },
    { text: "Bahia", value: "BA" },
    { text: "Ceará", value: "CE" },
    { text: "Distrito Federal", value: "DF" },
    { text: "Espírito Santo", value: "ES" },
    { text: "Goiás", value: "GO" },
    { text: "Maranhão", value: "MA" },
    { text: "Mato Grosso", value: "MT" },
    { text: "Mato Grosso do Sul", value: "MS" },
    { text: "Minas Gerais", value: "MG" },
    { text: "Pará", value: "PA" },
    { text: "Paraíba", value: "PB" },
    { text: "Paraná", value: "PR" },
    { text: "Pernambuco", value: "PE" },
    { text: "Piauí", value: "PI" },
    { text: "Rio de Janeiro", value: "RJ" },
    { text: "Rio Grande do Norte", value: "RN" },
    { text: "Rio Grande do Sul", value: "RS" },
    { text: "Rondônia", value: "RO" },
    { text: "Roraima", value: "RR" },
    { text: "Santa Catarina", value: "SC" },
    { text: "São Paulo", value: "SP" },
    { text: "Sergipe", value: "SE" },
    { text: "Tocantins", value: "TO" },
];
const DadosPessoais = () => {
    return (
        <Formik
            initialValues={{
                nome: "",
                estado: "",
                cidade: "",
                telefone: "",
                email: "",
                senha: "",
                confirmarSenha: "",
            }}
            validate={(values) => {
                const errors = {};

                if (!values.nome) {
                    errors.nome = "Campo obrigatório";
                }

                if (!values.estado) {
                    errors.estado = "Campo obrigatório";
                }

                if (!values.cidade) {
                    errors.cidade = "Campo obrigatório";
                }

                if (!values.telefone) {
                    errors.telefone = "Campo obrigatório";
                } else if (!/^\d{11}$/i.test(values.telefone)) {
                    errors.telefone = "Número de telefone inválido";
                }

                if (!values.email) {
                    errors.email = "Campo obrigatório";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                    )
                ) {
                    errors.email = "E-mail inválido";
                }

                if (!values.senha) {
                    errors.senha = "Campo obrigatório";
                }

                if (!values.confirmarSenha) {
                    errors.confirmarSenha = "Campo obrigatório";
                } else if (values.senha !== values.confirmarSenha) {
                    errors.confirmarSenha = "As senhas não conferem";
                }

                return errors;
            }}
            onSubmit={values => {
              console.log(values)
            }}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <div style={{ textAlign: "center" }}>
                        <Tipografia variante="h1" componente="h1">
                            Crie seu cadastro
                        </Tipografia>
                        <Tipografia variante="body" componente="body">
                            Crie seu perfil gratuitamente para começar a
                            trabalhar com os melhores freelancers. Em seguida,
                            você poderá dar mais detalhes sobre suas demandas e
                            sobre sua forma de trabalho.
                        </Tipografia>
                    </div>
                    <Row>
                        <Col>
                            <CampoTexto
                                name="nome"
                                titulo="Nome completo"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <ListaSupensa
                                name="estado"
                                titulo="Estado"
                                opcoes={estadosBrasileiros}
                            />
                        </Col>
                        <Col lg={8} md={8} sm={8}>
                            <CampoTexto
                                name="cidade"
                                titulo="Cidade"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                name="email"
                                titulo="E-mail"
                                type="email"
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                name="telefone"
                                titulo="Telefone"
                                type="tel"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                name="senha"
                                titulo="Senha"
                                type="password"
                            />
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <CampoTexto
                                name="confirmarSenha"
                                titulo="Confirme sua senha"
                                type="password"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <Link to="/cadastro/interesses">
                                <Botao variante="secundaria">Anterior</Botao>
                            </Link>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div style={{ textAlign: "right" }}>
                                {/* <Link to='/cadastro/concluido'> */}
                                <Botao>Próxima</Botao>
                                {/* </Link> */}
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

export default DadosPessoais;
