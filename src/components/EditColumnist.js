import React from 'react';
import { connect } from 'react-redux';
import { startEditColumnist, startRemoveColumnist } from '../actions/columnists';
import ColumnistForm from './ColumnistForm';

export class EditColumnist extends React.Component {
    onSubmit = (columnist) => {
        this.props.startEditColumnist(this.props.columnist.id, columnist);
        this.props.history.push("/");
    }
    onClick = () => {
        this.props.startRemoveColumnist(this.props.columnist.id);
        this.props.history.push("/");
    }
    render () {
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-header__title"> Editar Columnista</h1>
                </div>
                <div className="content-container">
                    <ColumnistForm 
                        columnist = {this.props.columnist}
                        onSubmit = {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>Remover Columnista</button>
                </div>
                
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    console.log(state.columnists);
    return {
        columnist: state.columnists.find((columnist) => columnist.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditColumnist: (nick, columnist) =>  dispatch(startEditColumnist(nick, columnist)),
        startRemoveColumnist: (nick) => dispatch(startRemoveColumnist(nick))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditColumnist);
