import Login from './view-login';

import { bindActionCreators } from 'redux';
import {fetchLogin} from '../Store/actions';
import { connect } from 'react-redux';


export default connect((state) => {
    const {login} = state;
    return {login};
},(dispatch) => ({
    fetchLogin : bindActionCreators(fetchLogin, dispatch)
}))(Login);