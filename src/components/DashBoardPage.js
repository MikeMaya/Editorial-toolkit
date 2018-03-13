import React from 'react';
import DashboardMenu from './DashboardMenu';
import ColumnistsList from './ColumnistsList';
import Calendar from './Calendar';
import PaymentsPage from './PaymentsPage';

class DashBoardPage extends React.Component {
    state = {
        sec: "columnists"
    };
    onChangeColumnists = () =>{
        this.setState(() => ({sec: "columnists"}));
    };
    onChangeCalendar = () =>{
        this.setState(() => ({sec: "calendar"}));
    };
    onChangePayments = () =>{
        this.setState(() => ({sec: "payments"}));
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
                {this.state.sec === "payments" && <PaymentsPage />}
            </div>
        );
    }
};

export default DashBoardPage;