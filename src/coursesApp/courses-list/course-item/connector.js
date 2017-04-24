import Course from './course';
import { bindActionCreators } from 'redux';
import {removeCourse} from '../../Store/actions';
import { connect } from 'react-redux';


export default connect(null,(dispatch) => ({
    onDelete : bindActionCreators(removeCourse, dispatch)
}))(Course);