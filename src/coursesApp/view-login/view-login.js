import React, {Component} from 'react';
import { fetchLogin } from '../Store/actions';
import { browserHistory } from 'react-router';
import store from '../Store';
import './view-login-style.css';


export default class LoginView extends Component {

    componentWillMount() {
        const form = {
            loginIsValid : true,
            valid : false,
            userName : {
                valid : true,
                value : '',
                initial: false
            },
            userPassword : {
                valid : true,
                value : '',
                initial: false
            }
        };
        this.setState({form});
    }

    componentDidMount() {
        if(this.props.login.logged) {
            browserHistory.push('/courses');
        }
    }

    componentWillUpdate(props) {
        if(props.login.logged) {
            browserHistory.push('/courses');
        }
    }

    submitForm (event) {
        event.preventDefault();
        this.props.fetchLogin({
            user : this.userNameInput.value,
            password : this.userPasswordInput.value
        });
    }

    validateInput (name) {
        const {form} = this.state ;

        if (!form[name].initial) {
            form[name].initial = true;
        }

        this[`${name}Input`].value ? form[name].valid = true : form[name].valid = false;

        this.validateForm(form);
    }

    validateForm(form) {
        form.valid = form.userName.initial &&
            form.userPassword.initial &&
            form.userName.valid &&
            form.userPassword.valid;

        this.setState({form});
    }

    render() {
        return (
            <div className="login">
                <div className="panel panel-default col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                    <div className="panel-body">
                        {!this.props.login.error ?
                            null :
                            (<div className="alert alert-warning" role="alert">Wrong login or password</div>)
                        }
                        <h2 className="login__header">Sign In</h2>
                        <form action="" className="sign-in login__form" onSubmit={() => this.submitForm()}>
                            <div className={this.state.form.userName.valid ? 'sign-in__field form-group' : 'sign-in__field form-group has-error'}>
                                <label className="sign-in__label" htmlFor="sign-in_user"> User Name :</label>
                                <input type="text"
                                       className="form-control sign-in__input"
                                       id="sign-in_user"
                                       onBlur={() => this.validateInput('userName')}
                                       ref={(input) => this.userNameInput = input}
                                       pattern="^[a-zA-Z\.]+$"
                                       autoFocus="" />
                    <span className={this.state.form.userName.valid ? 'sign-in__wrong hidden' : 'sign-in__wrong'}>
                        * please enter
                    </span>
                            </div>
                            <div className={this.state.form.userPassword.valid ? 'sign-in__field form-group' : 'sign-in__field form-group has-error'}>
                                <label className="sign-in__label" htmlFor="sign-in_password"> Password :</label>
                                <input type="password"
                                       className="form-control sign-in__input"
                                       id="sign-in_password"
                                       onChange={() => this.validateInput('userPassword')}
                                       onBlur={() => this.validateInput('userPassword')}
                                       pattern="/^[a-zA-Z0-9]+$/"
                                       ref={input => this.userPasswordInput = input}/>
                    <span className={this.state.form.userPassword.valid ? 'sign-in__wrong hidden' : 'sign-in__wrong'}>
                        * please enter
                    </span>
                            </div>
                            <button className="sign-in__button btn btn-success"
                                    type="submit"
                                    onClick={(event) => this.submitForm(event)}
                                    disabled={ !this.state.form.valid }
                                    > Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}