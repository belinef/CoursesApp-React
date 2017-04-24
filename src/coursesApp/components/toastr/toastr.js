import React, {Component} from 'react';
import * as ReactToastr  from 'react-toastr';


const {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

export default class Toastr extends Component {
    componentWillReceiveProps(props) {
        const {alert : {
            alert : alertCondition,
            message
        }} = props;
        if(alertCondition) {
            this.showAlert(message);
        }
    }

    showAlert(message = '') {
        this.refs.container.success(
            message,'',{
                timeOut: 2000,
                extendedTimeOut: 8000
            });
    }

    render() {
        return (
            <ToastContainer ref="container"
                            toastMessageFactory={ToastMessageFactory}
                            className="toast-bottom-right" />
        )
    }
}