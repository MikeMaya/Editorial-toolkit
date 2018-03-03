import React from 'react';
import { connect } from 'react-redux';
import ColumnistForm from './ColumnistForm';
import { startAddColumnist } from '../actions/columnists';

export class AddColumnist extends React.Component {
    onSubmit = (columnist) => {
        this.props.startAddColumnist(columnist);
        this.props.history.push("/dashboard");
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-header__title">Agregar un Columnista</h1>
                </div>
                <div className="content-container" >
                    <ColumnistForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddColumnist: (columnist) => dispatch(startAddColumnist(columnist))
});

export default connect(undefined, mapDispatchToProps)(AddColumnist);
