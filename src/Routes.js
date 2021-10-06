import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route  path="/login" component={LoginForm} />
            <Route  path="/signup" component={RegistrationForm} />
            </Switch>
        </BrowserRouter>
    )
}
