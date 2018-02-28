import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ColumnistItem from './ColumnistItem';

const ColumnistsList = (props) => (
    <div>
        <Link to="/addColumnist">Agregar Columnista</Link>
        {props.columnists.length === 0 ? (
            <span>Sin columnistas por el momento. Registralos ahora!</span>
        ) : (
            props.columnists.map((columnist) => 
                <ColumnistItem key={columnist.nick} {...columnist}/>
            )
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        columnists: state.columnists
    };
};

export default connect(mapStateToProps)(ColumnistsList);