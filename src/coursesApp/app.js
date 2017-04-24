import React, {Component} from 'react';
import {Header, Footer, Toastr} from './components';
import { browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './Store';
import './app-styles';

export default class CoursesApp extends Component {
    componentWillMount () {
        browserHistory.push('login');
    }

    render() {
        return (
            <Provider store={store}>
                <div className="CoursesApp">
                    <Toastr></Toastr>
                    <Header/>
                    {this.props.children}
                    <Footer />
                </div>
            </Provider>

        )
    }
}