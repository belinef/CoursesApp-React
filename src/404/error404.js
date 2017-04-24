import React, {Component} from 'react';
import './error404.css';
import {Link} from 'react-router';


class Error404 extends Component {
    render() {
        return (
            <div className="error-404">
                <h1> Page not Found</h1>
                <Link to="/"> Home page </Link>
            </div>
        );
    }
}

export default Error404;
