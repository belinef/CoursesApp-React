import React, {Component} from 'react';
import { AbstractCourse } from '../abstract';
import {Link} from 'react-router';
import './course-details.styles.css';


export default class CourseDetails extends AbstractCourse {

    componentWillMount() {
        const {id} = this.props.params;
        this.props.fetchCourseById(id);
    }

    get PrettyDate() {
        return this.getPrettyDate('currentCourse');
    }

    get prettyCourseDuration() {
        return this.getPrettyCourseDuration('currentCourse');
    }

    render() {
        const {name, description, authors, id} = this.props.currentCourse;
        return (
            <div className="course-details">
                <div className="jumbotron">
                    <div className="container">
                        <h1>
                            <span className="course-details__label">Course: </span>
                            {name}
                        </h1>
                        <p>
                            <span className="course-details__label">About course: </span>
                            {description}
                        </p>
                        <p>
                            <span className="course-details__label">Date start: </span>
                            {this.PrettyDate}
                        </p>
                        <p>
                            <span className="course-details__label">Duration: </span>
                            {this.prettyCourseDuration}
                        </p>
                        <div className="authors course-details__authors">
                <span className="authors__label course-details__label">
                    Authors:
                </span>
                            <ul className="authors__list list-group">
                                {authors.map((author, index) => <li className="list-group-item" key={index}>{author}</li>)}
                            </ul>
                        </div>
                        <p>
                <Link to={`/edit/${id}`}
                    className="course-details__edit btn btn-warning btn-lg pull-right">
                    <span className="glyphicon glyphicon-pencil"></span>
                    Edit
                </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}