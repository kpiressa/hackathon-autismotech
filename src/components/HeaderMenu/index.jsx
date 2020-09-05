import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css';

function goToAnchor(id) {
  var element = document.getElementById(id);

  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

export class HeaderMenu extends Component {

    render() {
        return (
            <Menu mode="horizontal">
            <Menu.Item key="sobre" onClick={ () => goToAnchor("quem-somos") }>
              Sobre
            </Menu.Item>
            <Menu.Item key="empresas-amigas" onClick={ () => goToAnchor("empresas-amigas") }>
              Empresas Amigas
            </Menu.Item>
            <Menu.Item key="pesquise-empresa" onClick={ () => goToAnchor("pesquise-empresa") }>
              Pesquise uma Empresa
            </Menu.Item>
            <Menu.Item key="mercado-trabalho" onClick={ () => goToAnchor("mercado-trabalho") }>
              Mercado de Trabalho
            </Menu.Item>
            <Menu.Item key="autistas">
              <Link to="/autistas">Autistas</Link>
            </Menu.Item>
            <Menu.Item key="empresas">
            <Link to="/empresas">Empresas</Link>
            </Menu.Item>         
          </Menu>
        );
    }
}

export default HeaderMenu;