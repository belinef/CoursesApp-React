import React, {Component} from 'react';
import {Link} from 'react-router';

import {browserHistory} from 'react-router';

import './header-style.css';


export default class Header extends Component {

    logOff() {
        this.props.logOff();
        browserHistory.push('login');
    }

    loggedIn(logged) {
        if (!logged) {
            return null
        }
        return (
            <div className="user pull-right">
                <span className="user__name">{this.props.login.user}</span>
                <a className="user__logout btn btn-primary" onClick={() => this.logOff()}>
                    <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                    Log out
                </a>
            </div>
        )
    }

    render() {
        return (
            <header className="header">
                <Link to="/courses">
                    <img src={"/img/logo.png"}
                         width="50"
                         height="50"
                         className="header__logo"/>
                </Link>


                {this.loggedIn(this.props.login.logged)}

            </header>
        )
    }
}