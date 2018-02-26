import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Editorial El Vortex</h1>
            <p>Creado por Mike Maya</p>
            <button className="button" onClick={startLogin}>Administrador</button>
            <button className="button" onClick={startLogin}>Invitado</button>
        </div>
    </div> 
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);