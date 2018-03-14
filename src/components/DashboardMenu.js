import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

const DashboardMenu = ({onChangeColumnists, onChangePayments, onChangeCalendar, startLogout}) => (
    <div className="bar-menu">
        <NavLink className="button button--menu" to="/columnists">Columnistas</NavLink>
        <NavLink className="button button--menu" to="/payments">Pagos</NavLink>
        <NavLink className="button button--menu" to="/columnists">Calendar</NavLink>
        <button className="button button--menu" onClick={startLogout}>Salir</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(DashboardMenu);