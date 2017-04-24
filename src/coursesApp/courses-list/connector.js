import CoursesList from './courses-list';

import { bindActionCreators } from 'redux';
import {fetchCourses, fetchCoursesByQuery} from '../Store/actions';
import { connect } from 'react-redux';


export default connect((state) => {
    const {courses} = state;
    return { courses};
},(dispatch) => ({
    fetchCourses : bindActionCreators(fetchCourses, dispatch),
    fetchCoursesByQuery : bindActionCreators(fetchCoursesByQuery, dispatch),
}))(CoursesList);