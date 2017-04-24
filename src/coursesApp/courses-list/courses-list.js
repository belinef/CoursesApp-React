import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import Course from './course-item';
import './view-courses-style.css';

export default class Courses extends Component {

    componentWillMount() {
        this.props.fetchCourses();
        this.setState({search: ''});
    }

    renderEmptyCourses(loaded) {
        return (
            <div className="course-list--empty">
                {
                    loaded ?
                        <div>
                            No courses to show
                        </div>
                        :
                        <div className="courses-loading">
                            <img src={"/img/loading-courses.gif"}
                                 height="150"/>
                        </div>
                }
            </div>
        )
    }

    searchCourses(e) {
        e.preventDefault();
        const {search} = this.state;

        this.props.fetchCoursesByQuery(search);
    }

    searchChange(search) {
        this.setState({search});
    }

    render() {
        const {coursesList, loaded} = this.props.courses,
             courses = coursesList.map(item => <Course course={item} key={item.id}/>)

        return (
            <div className="courses-list">
                <div className="manipulation">
                    <form className="manipulation-form">
                        <input type="text"
                               className="manipulation-form__search form-control"
                               placeholder="Enter name or date"
                        onChange={(e) => this.searchChange(e.target.value)}/>
                        <button className="manipulation-form__find btn btn-success"
                        onClick={(e) => this.searchCourses(e)}>
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            Find
                        </button>
                    </form>
                    <Link type="button"
                          to="/new"
                            className="manipulation__addCourse btn btn-warning">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        add course
                    </Link>
                </div>
                {coursesList.length ?
                    <ReactCSSTransitionGroup
                        transitionName="course-item-animated"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={2000}>
                        {courses}
                    </ReactCSSTransitionGroup>
                    : this.renderEmptyCourses(loaded)}
            </div>
        )
    }
}