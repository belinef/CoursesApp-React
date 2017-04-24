import CourseDetails from './course-details';

import { bindActionCreators } from 'redux';
import {fetchCourseById} from '../Store/actions';
import { connect } from 'react-redux';


export default connect((state) => {
    const {currentCourse} = state;
    return { currentCourse };
},(dispatch) => ({
    fetchCourseById : bindActionCreators(fetchCourseById, dispatch)
}))(CourseDetails);