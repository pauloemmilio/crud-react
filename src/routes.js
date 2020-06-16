import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Listagem from './pages/Listagem';
import Formulario from './pages/Formulario';

export default function Routes () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Listagem} />
                <Route path="/novo" component={Formulario} />
            </Switch>
        </BrowserRouter>
    )
}