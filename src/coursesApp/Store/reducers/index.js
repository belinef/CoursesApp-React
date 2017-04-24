import { combineReducers } from 'redux'
import login from './login'
import courses from './courses'
import currentCourse from './currentCourse'
import alert from './alert'
import authors from './authors'

const coursesApp = combineReducers({
    login,
    courses,
    currentCourse,
    alert,
    authors
});

export default coursesApp