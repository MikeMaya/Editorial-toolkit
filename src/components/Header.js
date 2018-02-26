import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Editoral El Vortex</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
            <div> 
                <NavLink to="/columnists">Columnistas</NavLink>
                <NavLink to="/payments">Pagos</NavLink>
                <NavLink to="/calendar">Calendario</NavLink>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);