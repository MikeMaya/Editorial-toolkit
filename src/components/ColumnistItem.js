import React from 'react';
import { Link } from 'react-router-dom';

const ColumnistItem = ({nick, name, amount, noColumns}) => (
    <Link to={`editColumnist/${nick}`}>
        <h1> {name} - {nick}</h1>
        <p>Pago: {amount / 100} - Columnas: {noColumns}</p>
    </Link>
);

export default ColumnistItem;