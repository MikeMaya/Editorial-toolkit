import React from 'react';
import { connect } from 'react-redux';
import { startEditColumnist, startRemoveColumnist } from '../actions/columnists';
import ColumnistForm from './ColumnistForm';

export class EditColumnist extends React.Component {
    onSubmit = (columnist) => {
        this.props.startEditColumnist(this.props.columnist.nick, columnist);
        this.props.history.push("/dashboard");
    }
    onClick = () => {
        this.props.startRemoveColumnist(this.props.columnist.nick);
        this.props.history.push("/dashboard");
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
    return {
        columnist: state.columnists.find((columnist) => columnist.nick === props.match.params.nick)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditColumnist: (nick, columnist) =>  dispatch(startEditColumnist(nick, columnist)),
        startRemoveColumnist: (nick) => dispatch(startRemoveColumnist(nick))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditColumnist);
