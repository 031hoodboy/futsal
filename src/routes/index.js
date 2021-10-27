import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NoMatchPage from '../pages/NoMatch';
import GlobalStyles from '../Style/GlobalStyle';

const RootRoute = () => {

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route path='/' component={LoginPage} exact />
                <Route path="/*" component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default RootRoute;
