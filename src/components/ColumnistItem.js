import React from 'react';

const ColumnistItem = ({nick, name, amount, noColumns}) => (
    <div>
        <h1> {name} - {nick}</h1>
        <p>Pago: {amount} - Columnas: {noColumns}</p>
    </div>
);

export default ColumnistItem;