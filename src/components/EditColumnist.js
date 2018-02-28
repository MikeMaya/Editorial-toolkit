import React from 'react';
import { connect } from 'react-redux';
import { startEditColumnist } from '../actions/columnists';
import ColumnistForm from './ColumnistForm';

export class EditColumnist extends React.Component {
    onSubmit = (columnist) => {
        this.props.startEditColumnist(this.props.columnist.nick, columnist);
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
        startEditColumnist: (nick, columnist) =>  dispatch(startEditColumnist(nick, columnist))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditColumnist);
