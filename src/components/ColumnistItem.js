import React from 'react';
import { Link } from 'react-router-dom';

const ColumnistItem = ({nick, name, amount, noColumns}) => (
    <Link className="list-item" to={`editColumnist/${nick}`}>
        <h3 className="list-item__title"> {name} - {nick}</h3>
        <p>Pago: {amount / 100} - Columnas: {noColumns}</p>
    </Link>
);

export default ColumnistItem;