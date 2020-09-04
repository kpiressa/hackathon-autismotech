import React, { Component } from 'react';
import { Input } from 'antd';

import './styles.css';

const { Search } = Input;

export class CompanySearch extends Component {

    render() {
        return (
            <Search
            placeholder="Digite o nome da empresa"
            size="large"
            style={{ width: 400, borderRadius: 30, border: "2px solid #D1753D" }}
          />
        );
    }
}

export default CompanySearch;