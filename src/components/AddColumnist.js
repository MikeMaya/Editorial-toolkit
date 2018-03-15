import React from 'react';
import { connect } from 'react-redux';
import ColumnistForm from './ColumnistForm';
import { startAddColumnist } from '../actions/columnists';
import { startGetData } from '../actions/users';


export class AddColumnist extends React.Component {
    
    state = { ready: false }
    
    constructor(props) {
        super(props);
        this.props.startGetData().then(() => {
            this.setState(() => ({ready:true})) 
        });
    };
    
    onSubmit = (columnist) => {
        console.log(columnist);
        this.props.startAddColumnist(columnist);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-header__title">Agregar un Columnista</h1>
                </div>
                <div className="content-container" >                
                    {this.state.ready && <ColumnistForm onSubmit={this.onSubmit} columnistsData={this.props.users}/>}        
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddColumnist: (columnist) => dispatch(startAddColumnist(columnist)),
    startGetData: () => dispatch(startGetData())
});

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(AddColumnist);
