import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/signup' component={SignupContainer} />
            <AuthRoute exact path='/login' component={LoginContainer} />
            <ProtectedRoute path='/dashboard' component={DashboardContainer} />
        </Switch>
    </div>
);

export default App;