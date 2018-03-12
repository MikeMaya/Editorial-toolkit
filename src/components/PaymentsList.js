import React from 'react';

class PaymentsList extends React.Component{
    
    render() {
        return (
            <div>
                <button>Reporte Mensual</button>
                <button>Reporte Anual</button>
                <button>Reporte Global</button>
                <button>Resumen de columnistas</button>
                <button>Generar pagos</button>
            </div>
        );
    };
};

export default PaymentsList;