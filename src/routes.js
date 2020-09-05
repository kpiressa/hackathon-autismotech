import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Empresas from './pages/Empresas';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/autistas" component={Home} />
                <Route path="/empresas" component={Empresas} />
            </Switch>
        </BrowserRouter>
    )
}