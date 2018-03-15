import React from 'react';
import {Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../components/LoginPage';
import AddColumnist from '../components/AddColumnist';
import EditColumnist from '../components/EditColumnist';
import ColumnistsPage from '../components/ColumnistsPage';
import PaymentsPage from '../components/PaymentsPage';
import CalendarPage from '../components/CalendarPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/columnists" component={ColumnistsPage}/>
                <PrivateRoute path="/payments" component={PaymentsPage}/>
                <PrivateRoute path="/calendar" component={CalendarPage}/>
                <PrivateRoute path="/addColumnist" component={AddColumnist}/>
                <PrivateRoute path="/editColumnist/:id" component={EditColumnist}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;