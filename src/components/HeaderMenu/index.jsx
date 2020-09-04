import React, { Component } from 'react';
import { Menu } from 'antd';

import './styles.css';

const { SubMenu } = Menu;

export class HeaderMenu extends Component {

    render() {
        return (
            <Menu mode="horizontal">
            <Menu.Item key="sobre">
              Sobre
            </Menu.Item>
            <Menu.Item key="empresas-amigas">
              Empresas Amigas
            </Menu.Item>
            <Menu.Item key="pesquise-empresa">
              Pesquise uma Empresa
            </Menu.Item>        
            <SubMenu title="Autistas">
              <Menu.ItemGroup title="Conheça mais">
                <Menu.Item key="setting:1">Videoaulas</Menu.Item>
                <Menu.Item key="setting:2">Acessoria</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Mercado de trabalho">
                <Menu.Item key="setting:3">Trabalhe com a gente</Menu.Item>
              </Menu.ItemGroup>              
            </SubMenu>
            <SubMenu title="Empresas">
              <Menu.ItemGroup title="">
                <Menu.Item key="setting:1">Videoaulas</Menu.Item>
                <Menu.Item key="setting:2">Acessoria</Menu.Item>
                <Menu.Item key="setting:3">Trabalhe com a gente</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>           
          </Menu>
        );
    }
}

export default HeaderMenu;