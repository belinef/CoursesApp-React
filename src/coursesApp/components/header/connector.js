import Header from './header';

import { bindActionCreators } from 'redux';
import {logOff} from '../../Store/actions';
import { connect } from 'react-redux';


export default connect((state) => {
    const {login} = state;
    return {login};
},(dispatch) => ({
    logOff : bindActionCreators(logOff, dispatch)
}))(Header);