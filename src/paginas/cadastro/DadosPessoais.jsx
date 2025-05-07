import React from "react";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

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

const schema = Yup.object().shape({
    nome: Yup.string()
        .trim()
        .lowercase()
        .required("Campo obrigatório")
        .min(2, "Digite seu nome completo"),
    nascimento: Yup.date()
        .required("Campo obrigatório")
        .max(new Date(), "Digite uma data válida"),
    estado: Yup.string()
        .required("Campo obrigatório")
        .max(58, "Digite uma cidade válida"),
    cidade: Yup.string().required("Campo obrigatório"),
    telefone: Yup.string()
        .required("Campo obrigatório")
        .matches(/^\d{11}$/, "Número de telefone inválido"),
    email: Yup.string()
        .required("Campo obrigatório")
        .email("Digite um e-mail válido"),
    senha: Yup.string().required("Campo obrigatório"),
    confirmarSenha: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("senha"), null], "As senhas não conferem"),
    termos: Yup.boolean().oneOf([true], "Você deve aceitar os termos"),
});

const DadosPessoais = () => {
    return (
        <Formik
            initialValues={{
                nome: "",
                nascimento: "",
                estado: "",
                cidade: "",
                telefone: "",
                email: "",
                senha: "",
                confirmarSenha: "",
                termos: false,
            }}
            validationSchema={schema}
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
                        <Col>
                            <CampoTexto
                                name="nascimento"
                                titulo="Data de nascimento"
                                type="date"
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
                        <label>
                            <Field name="termos" type="checkbox" />
                            Aceito os termos e condições
                        </label>
                    </Row>
                    {formik.errors.termos && (
                        <div style={{ color: "red", marginTop: "4px" }}>
                            {formik.errors.termos}
                        </div>
                    )}
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
