
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Lading from './pages/lading'
import OrphagesMap from './pages/orphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Lading} />
                <Route path="/app" component={OrphagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes