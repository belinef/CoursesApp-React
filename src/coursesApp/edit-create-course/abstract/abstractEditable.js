import React from 'react';
import {AbstractCourse} from '../../abstract';
import {browserHistory} from 'react-router';
import {Swap} from '../../components';
import moment from 'moment';
import '../create-edit.styles.css';

export default class CourseEditable extends AbstractCourse {
    constructor(props) {
        super(props);

        this.authors = props.currentCourse.authors.map(item => item);
    }

    inputChange(type, value) {
        const {currentCourse} = this.props;

        currentCourse[type] = value;

        this.setState({currentCourse});
    }


    get humanDate() {
        return moment(this.props.currentCourse.date).format('YYYY-MM-DD');
    }

    dateChange(value) {
        if (value) {
            const {currentCourse} = this.props;
            currentCourse.date = Date.parse(value);
            this.setState({currentCourse});
        }
    }

    handleCancel() {
        browserHistory.goBack();
    }

    onSwapAuthors (authors) {
        this.authors = authors.map(item=> item);
    }

    authorsSearch(query) {
        this.props.fetchAuthorsByQuery(query);
    }

    onCreateAuthor(name) {
        this.props.addAuthor(name);
    }

    render() {
        const {name, description, duration, authors} = this.props.currentCourse;
        const {authors : aaa } = this.props;
        const {authors : avaliableAuthors, loaded} = aaa;
        return (
            <div className="course-edit">
                <div className="jumbotron">
                    <div className="container">
                        <form className="edit-form">
                            <div className="edit-form__field">
                                <div className="form-group">
                                    <span className="course-edit__label">
                                        Course Name:
                                    </span>
                                    <input type="text"
                                           className="course-edit__input form-control"
                                           placeholder="enter course name"
                                           value={name}
                                           onChange={(event) => this.inputChange('name', event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="edit-form__field">
                                <div className="form-group">
                                    <span className="course-edit__label course-edit--description">
                                        Course Description:
                                    </span>
                                    <textarea type="text"
                                              className="course-edit__input course-edit__input--description form-control"
                                              placeholder="enter course description"
                                              onChange={(event) => this.inputChange('description', event.target.value)}
                                              value={description}>
                                    </textarea>
                                </div>
                            </div>
                            <div className="edit-form__field">
                                <div className="form-group">
                                    <span className="course-edit__label">
                                        Course date start:
                                    </span>
                                    <input type="date"
                                           className="course-edit__input course-edit__input--date form-control"
                                           placeholder="enter course date start MM.DD.YYYY"
                                           value={this.humanDate}
                                           onChange={(e)=> this.dateChange(e.target.value)}/>
                                </div>
                            </div>
                            <div className="edit-form__field">
                                <div className="form-group">
                                    <span className="course-edit__label">
                                        Course duration:
                                    </span>
                                    <input type="text"
                                           className="course-edit__input course-edit__input--duration form-control"
                                           placeholder="duration"
                                           value={duration}
                                           onChange={(event)=> this.inputChange('duration', event.target.value)}/>
                                    <span className="course-edit__label">
                                            {this.prettyCourseDuration}
                                    </span>
                                </div>
                            </div>
                        </form>

                        <div className="authors-edit course-edit__authors">
                            <span className="authors__label course-edit__label">
                                Authors:
                            </span>
                            <Swap
                                ref="authors"
                                current={authors}
                                available={avaliableAuthors}
                                loaded={loaded}
                                onSearch={(e) => this.authorsSearch(e)}
                                onSwap={(e)=> this.onSwapAuthors(e)}
                                onCreate={(e) => this.onCreateAuthor(e)}/>
                        </div>

                        <div className="course-edit__controls clearfix">
                            <span className="course-edit__button btn btn-warning btn-lg pull-right" onClick={() => this.handleCancel()}>
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                Cancel
                            </span>
                            <span className="course-edit__button btn btn-success btn-lg pull-right"
                                  onClick={() => this.saveCourse()}>
                                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                                Save changes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}