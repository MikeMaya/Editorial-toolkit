import React from 'react';
import DashboardMenu from './DashboardMenu';
import ColumnistsList from './ColumnistsList';
import Calendar from './Calendar';
import PaymentsList from './PaymentsList';

class DashBoardPage extends React.Component {
    state = {
        sec: "columnists"
    };
    onChangeColumnists = () =>{
        this.setState(() => ({sec: "columnists"}));
        console.log(this.state);
    };
    onChangeCalendar = () =>{
        this.setState(() => ({sec: "calendar"}));
        console.log(this.state);
    };
    onChangePayments = () =>{
        this.setState(() => ({sec: "payments"}));
        console.log(this.state);
    };
    render() {
        return (
            <div>
                <DashboardMenu 
                    onChangeColumnists={this.onChangeColumnists} 
                    onChangeCalendar={this.onChangeCalendar}
                    onChangePayments={this.onChangePayments} 
                />
                {this.state.sec === "columnists" && <ColumnistsList />}
                {this.state.sec === "calendar" && <Calendar />}
                {this.state.sec === "payments" && <PaymentsList />}
            </div>
        );
    }
};

export default DashBoardPage;