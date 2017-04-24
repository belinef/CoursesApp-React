import EditeCourse from './edit-course';

import { bindActionCreators } from 'redux';
import {fetchCourseById, updateCourse, fetchAuthorsByQuery , clearAuthors, addAuthor} from '../../Store/actions';
import { connect } from 'react-redux';


export default connect((state) => {
    const {currentCourse, authors} = state;
    return { currentCourse, authors };
},(dispatch) => ({
    fetchCourseById : bindActionCreators(fetchCourseById, dispatch),
    fetchAuthorsByQuery : bindActionCreators(fetchAuthorsByQuery, dispatch),
    addAuthor : bindActionCreators(addAuthor, dispatch),
    clearAuthors : bindActionCreators(clearAuthors, dispatch),
    updateCourse : bindActionCreators(updateCourse, dispatch)
}))(EditeCourse);