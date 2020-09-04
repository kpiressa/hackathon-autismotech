import React from 'react';
import { Layout, Button, Typography } from 'antd';

import './styles.css';

import HeaderBackground from '../../assets/home.jpg';
import AuteraLogo from '../../assets/autera-logo-vertical.png';
import AuteraSymbol from '../../assets/buterfly.png';

import HeaderMenu from '../../components/HeaderMenu';
import Ranking from '../../components/Ranking';
import CompanySearch from '../../components/CompanySearch';
import ContentSlide from '../../components/ContentSlide';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const isDetail = false;

var divLogoStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${AuteraLogo})`,
    width: "154px",
    height: "64px",

    margin: "0px 0px 0px 0",
    float: "left",
  };

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
    backgroundColor: "#5ebed6",
    //backgroundImage: `linear-gradient(#5ebed6, #D1753D), url(${HeaderBackground})`,
    backgroundImage: `url(${HeaderBackground})`,
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  };

  var homeResume = {
    width: "100%",
    textAlign: "justify",
    backgroundColor: "#fefdfc",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    //justifyContent: "center",
  };  

  var siderStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    backgroundPosition: "center",
    backgroundImage: `url(${AuteraSymbol})`,
  };  

export default function Home() {

    return (
        <Layout className="layout">
        <Header className="header-menu">
          <div style={ divLogoStyle } />
          <HeaderMenu />
        </Header>
        {/*<Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Ranking />
          </div>
    </Content>*/}
        <Content style={ sectionStyle }>
            <div>
                <Title className="header-text">Autistas trabalhando pela<br/>inclusão de autistas no mercado<br/>de trabalho</Title>
                <p/>
                <Title level={4} className="header-text">Participe avaliando uma empresa</Title>
                <Button type="primary" size="large" className="header-button">Avalie uma empresa</Button>
            </div>
        </Content>
        <Layout>
            <Sider style={ siderStyle } className="content-side content-side-symbol">
                {/*<img alt="logo" src={ AuteraSymbol } />*/}
            </Sider>
            <Content style={ homeResume }>
            <div>
                <Title level={2} className="header-text">Quem somos?</Title>
                <p/>
                <Title level={4} className="header-text">Uma plataforma educativa para autistas e empresas,<br/>que auxilia na adaptação e inclusão dos autistas no<br/>mercado de trabalho.</Title>
                <p/><br/><br/>
                <Title level={2} className="header-text">O que oferecemos?</Title>
                <p/>
                <Title level={4} className="header-text">Um espaço para o autista avaliar empresas e<br/>procurar por empresas amigas dos autistas.</Title>
            </div>
            {/*<div>
                <Title level={2} className="header-text">Quem somos?</Title>
                <p/>
                <Title level={5} className="header-text">Uma plataforma educativa para autistas e empresas,<br/>que auxilia na adaptação e inclusão dos autistas no<br/>mercado de trabalho.</Title>
                <p/><br/><br/>
                <Title level={2} className="header-text">O que oferecemos?</Title>
                <p/>
                <Title level={5} className="header-text">Um espaço para o autista avaliar empresas e<br/>procurar por empresas amigas dos autistas.</Title>
            </div>*/}
            </Content>
        </Layout>
        <Layout>
            <Sider className="content-side"></Sider>
            <Content className="content-standard content-title">
                <Title level={2} className="header-text">Empresas Amigas dos Autistas</Title>
                {isDetail
                ? "Detail"
                : <Ranking />
                }
                <p/>
                <Button type="primary" size="large" className="header-button">Avalie uma empresa</Button>
            </Content>
            <Sider className="content-side"></Sider>
        </Layout>
        <Layout>
            <Content style={ homeResume }>
            <div style={{ marginLeft: 200, marginRight: 150 }}>
                <Title level={2} className="header-text">Pensando em trabalhar naquela empresa?</Title>
                <p/>
                <Title level={4} className="header-text">Confira aqui quais adaptações ela oferece hoje:</Title>
                <CompanySearch />
            </div>
            <div style={{ marginTop: 70, marginBottom: 100 }}>
                <Title level={5} className="header-text">Autistas possuem vários pontos fortes: cumprimos regras,<br/>
                adoramos ambientes organizados, temos uma boa<br/>
                memória para detalhes, nossa linha de raciocínio é<br/>
                diferente e quando temos a oportunidade de trabalhar<br/>
                com algo que gostamos nós nos aprofundamos em<br/>
                detalhes!</Title>
                <p/>
                <Title level={5} className="header-text">Algumas adaptações no ambiente de trabalho não só nos<br/>
                auxiliam no dia a dia, como potencializam as nossas<br/>
                qualidades.</Title>
                <p/>
                <Title level={5} className="header-text">Oferecemos uma pesquisa por empresas e apresentamos<br/>
                quais critérios elas cumprem, para que tanto empresas<br/>
                quanto autistas possam oferecer o seu melhor!</Title>
            </div>
            </Content>
        </Layout>
        <Layout>
            <Content className="content-standard content-title">
                <Title level={2} className="header-text">Trabalhe Conosco</Title>
                <center><ContentSlide /></center>
                <Title level={5} className="header-text">Entrevistas podem causar ansiedade e desconforto, veja aqui algumas dicas que preparamos<br/>
                para te auxiliar nesse processo.</Title>
                <p/><br/>
                <Button type="primary" size="large" className="header-button">Veja nossas dicas</Button>
                <p/><br/><br/>
            </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Autera ©2020 Criado por Grupo4</Footer>
      </Layout>
    );
}