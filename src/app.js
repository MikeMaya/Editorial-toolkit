import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startSetColumnists } from './actions/columnists';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ScriptLoader from './script';

const loader = new ScriptLoader;
loader.load_database();


const store = configureStore();

const jsx = (
    <MuiThemeProvider>
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    </MuiThemeProvider>

);

let hasRendered = false; 
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered= true;
    }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetColumnists()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});


