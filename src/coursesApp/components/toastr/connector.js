import Toastr from './toastr';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export default connect((state) => {
    const {alert} = state;
    return { alert };
})(Toastr);