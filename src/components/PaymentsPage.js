import React from 'react';
import PaymentsReport from './PaymentsReport';
import PaymentsPay from './PaymentsPay';
import PaymentsUpdate from './PaymentsUpdate';

class PaymentsPage extends React.Component{
    state= {
        sec: "report"
    };
    onChangeReport = () => {
        this.setState(() => ({sec: "report"}));
    };
    onChangeUpdate = () => {
        this.setState(() => ({sec: "update"}));
    };
    onChangePay = () => {
        this.setState(() => ({sec: "pay"}));
    };
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.onChangeReport}>Ver reporte</button>
                    <button onClick={this.onChangeUpdate}>Generar pagos</button>
                    <button onClick={this.onChangePay}>Pagar</button>
                </div>
                <div>
                    {this.state.sec === "report" && <PaymentsReport/>}
                    {this.state.sec === "update" && <PaymentsUpdate/>}
                    {this.state.sec === "pay" && <PaymentsPay/>}
                </div>
            </div>
        );
    };
};

export default PaymentsPage;