import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Eso no existe en este universo - <Link to="/">Ir al inicio</Link>
    </div> 
);

export default NotFoundPage;