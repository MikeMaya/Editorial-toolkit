import React from 'react';

class PaymentsUpdate extends React.Component{
    state = {
        dataRoute: "http://elvortex.com/wp-json/wp/v2/posts"
    };
    getDataFromWP = () => {
        return fetch(this.state.dataRoute)
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