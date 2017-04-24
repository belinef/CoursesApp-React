import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import Error404 from './404';


import CoursesApp from './coursesApp';
import Login from './coursesApp/view-login';
import CoursesList from './coursesApp/courses-list';
import CourseDetails from './coursesApp/course-details';
import {EditCourse, CreateCourse} from './coursesApp/edit-create-course';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={CoursesApp}>
            <Route path="/login" component={Login}/>
            <Route path="/courses" component={CoursesList} />
            <Route path="/details/:id" component={CourseDetails} />
            <Route path="/edit/:id" component={EditCourse} />
            <Route path="/new" component={CreateCourse} />
        </Route>
        <Route path="*" component={Error404} />
    </Router>
    ),  document.getElementById('root')
);
