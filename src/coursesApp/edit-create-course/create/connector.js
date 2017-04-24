import CreateCourse from './create-course';

import { bindActionCreators } from 'redux';
import {clearCurrentCourse, createCourse, fetchAuthorsByQuery, clearAuthors, addAuthor} from '../../Store/actions';
import { connect } from 'react-redux';


export default connect((state) => {
    const {currentCourse, authors} = state;
    return { currentCourse, authors};
},(dispatch) => ({
    clearCurrentCourse : bindActionCreators(clearCurrentCourse, dispatch),
    fetchAuthorsByQuery : bindActionCreators(fetchAuthorsByQuery, dispatch),
    addAuthor : bindActionCreators(addAuthor, dispatch),
    clearAuthors : bindActionCreators(clearAuthors, dispatch),
    createCourse : bindActionCreators(createCourse, dispatch),
}))(CreateCourse);