import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ColumnistItem = ({id, nick, name, amount, noColumns}) => (
    <Link className="list-item" to={`editColumnist/${id}`}>
        <Card>
            <CardMedia
                overlay={<CardTitle title={nick} subtitle={name} />}
            >
                <img src="image/user.jpg" alt="" />
            </CardMedia>    
            <CardActions>
                <FlatButton label="Editar" />
                <FlatButton label="Remover" />
            </CardActions>
        </Card>
    </Link>


);

export default ColumnistItem;