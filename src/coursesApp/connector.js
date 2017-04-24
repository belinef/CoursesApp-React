import App from './app';
import { connect } from 'react-redux';


export default connect((state) => {
    const {login} = state;
    return {login};
})(App);