import React from 'react';
import { connect } from 'react-redux';
import { startEditColumnist, startRemoveColumnist } from '../actions/columnists';
import ColumnistForm from './ColumnistForm';

export class EditColumnist extends React.Component {
    onSubmit = (columnist) => {
        this.props.startEditColumnist(this.props.columnist.nick, columnist);
        this.props.history.push("/columnists");
    }
    onClick = () => {
        this.props.startRemoveColumnist(this.props.columnist.nick);
        this.props.history.push("/columnists");
    }
    render () {
        return (
            <div>
                <h1> Editar Columnista</h1>
                <ColumnistForm 
                    columnist = {this.props.columnist}
                    onSubmit = {this.onSubmit}
                />
                <button onClick= {this.onClick}>Remover Columnista</button>
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
