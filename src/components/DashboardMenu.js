import React from 'react';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

const DashboardMenu = ({onChangeColumnists, onChangePayments, onChangeCalendar, startLogout}) => (
    <div className="bar-menu">
        <button className="button button--menu" onClick={onChangeColumnists} >Columnistas</button>
        <button className="button button--menu" onClick={onChangePayments} >Pagos</button>
        <button className="button button--menu" onClick={onChangeCalendar} >Calendario</button>
        <button className="button button--menu" onClick={startLogout}>Salir</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(DashboardMenu);