import coursesAppRedusers from './reducers';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const currentCourse = () => ({
    date: new Date(),
    description: '',
    name: '',
    duration: 0,
    authors: []
});


const initStore = () => {
    const {login} = window.sessionStorage,
        loginValue = window.sessionStorage.login ? JSON.parse(login) : {user: '', logged: false, error: false};

    return {
        login: loginValue,
        currentCourse : currentCourse()
    }
};


const store = createStore(coursesAppRedusers,
    initStore(),
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;