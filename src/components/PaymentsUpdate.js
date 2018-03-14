import React from 'react';
import moment from 'moment';

class PaymentsUpdate extends React.Component{
    state = {
        dataRoute: "http://elvortex.com/wp-json/wp/v2/posts"
    };
    getDataFromWP = () => {
        const startMonth = moment().startOf("month").toISOString();
        const endMonth = moment().endOf("month").toISOString();
        const query=`?after=${startMonth}&amp;before=${endMonth}`;
        console.log(this.state.dataRoute+query);
        return fetch(this.state.dataRoute+query)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log (responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
    };
    render () {
        return (
            <div>  
                <h1>Actualizar pagos</h1>
                <button onClick={this.getDataFromWP}>Traer</button>
            </div>
        );
    };
};

export default PaymentsUpdate;