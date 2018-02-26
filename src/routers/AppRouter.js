import React from 'react';
import {Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DashBoardPage from '../components/DashBoardPage';
import LoginPage from '../components/LoginPage';
import ColumnistsList from '../components/ColumnistsList';
import PaymentsList from '../components/PaymentsList';
import Calendar from '../components/Calendar';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashBoardPage}/>
                <PrivateRoute path="/columnists" component={ColumnistsList}/>
                <PrivateRoute path="/payments" component={PaymentsList}/>
                <PrivateRoute path="/calendar" component={Calendar}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;