import React, {Component} from 'react';
import {AbstractCourse} from '../../abstract'
import { Link } from 'react-router';
import './course-style.css';

export default class Course extends AbstractCourse {

    get PrettyDate() {
        return this.getPrettyDate('course');
    }

    get prettyCourseDuration() {
        return this.getPrettyCourseDuration('course');
    }

    render() {
        const {id, name, description} = this.props.course;
        return (
            <div className="course courses-list__item panel panel-info">
                <div className="course__heading panel-heading">
                    <h2 className="course__name panel-title">
                        <Link to={`/details/${id}`}>
                            {name}
                        </Link>
                    </h2>
                    <span className="course__duration">
                <span className="course__label">
                    Duration:
                </span>
                        {this.prettyCourseDuration}
            </span>
                    <span className="course__date">
                <span className="course__label">
                    Start :
                </span>
                        {this.PrettyDate}
            </span>
                </div>
                <div className="course__body panel-body">
                    <div className="course__description">
                        {description}
                    </div>
                    <div className="course-editing">
                        <Link to={`/edit/${id}`} className="course-editing__button btn btn-info">
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            Edit
                        </Link>
                        <button className="course-editing__button btn btn-danger" onClick={() => this.props.onDelete(id)}>
                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
