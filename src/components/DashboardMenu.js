import React from 'react';


const DashboardMenu = ({onChangeColumnists, onChangePayments, onChangeCalendar}) => (
    <div className="bar-menu">
        <button className="button button--menu" onClick={onChangeColumnists} >Columnistas</button>
        <button className="button button--menu" onClick={onChangePayments} >Pagos</button>
        <button className="button button--menu" onClick={onChangeCalendar} >Calendario</button>
    </div>
);

export default DashboardMenu;