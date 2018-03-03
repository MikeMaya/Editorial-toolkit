import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ColumnistItem from './ColumnistItem';

const ColumnistsList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Columnistas</div>
            <div className="show-for-desktop">Columnistas</div>
            <div className="show-for-desktop">Pagos - Columnas</div>
        </div>
        <div className="list-body">
            {console.log(props.columnists)}
            {props.columnists.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>Sin columnistas por el momento. Registralos ahora!</span>
                </div>
            ) : (
                props.columnists.map((columnist) => 
                    <ColumnistItem key={columnist.nick} {...columnist}/>
                )
            )}
        </div>
        <Link className="button" to="/addColumnist">Agregar Columnista</Link>
    </div>
);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        columnists: state.columnists
    };
};

export default connect(mapStateToProps)(ColumnistsList);