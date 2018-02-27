import React from 'react';
import { connect } from 'react-redux';
import ColumnistForm from './ColumnistForm';
import { startAddColumnist } from '../actions/columnists';

export class AddColumnist extends React.Component {
    onSubmit = (columnist) => {
        this.props.startAddColumnist(columnist);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1>Agregar un Columnista</h1>
                <ColumnistForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddColumnist: (columnist) => dispatch(startAddColumnist(columnist))
});

export default connect(undefined, mapDispatchToProps)(AddColumnist);
