import fetch from 'isomorphic-fetch';
import {course} from '../../models';

const basicUrl = '/api/';

const login = ({user = '', logged = false, error = false} = {}) => {
    window.sessionStorage.setItem('login', JSON.stringify({user, logged}));
    return {
        type: 'LOG_IN',
        payload : {
            user,
            logged,
            error
        }
    }
};

export const logOff = () => dispatch => {
    return dispatch(login());
};

export const fetchLogin = (body) => dispatch => {
    return fetch(`${basicUrl}login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => dispatch(login(json)));
};

const receiveCourses = ({coursesList}) => {
    return {
        type: 'RECEIVE_COURSES',
        payload: {coursesList}
    }
};

const pendingCourses = () => {
    return {
        type: 'PENDING_COURSES'
    }
};

export const fetchCoursesByQuery = search => dispatch => {
    dispatch(pendingCourses());
    return fetch(`${basicUrl}courses?search=${search}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCourses(json)))
};

export const fetchCourses = () => dispatch => {
    dispatch(pendingCourses());
    return fetch(`${basicUrl}courses`)
        .then(response => response.json())
        .then(json => dispatch(receiveCourses(json)))
};

const removeCourseAction = ({deleted, id}) => {
    return {
        type : 'REMOVE_COURSE',
        payload : {
            deleted,
            id
        }
    }
};

export const removeCourse = id => dispatch => {
    return fetch(`${basicUrl}courses/${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => dispatch(removeCourseAction(json)))
};

const receiveCourseById = ({course}) => {
    return {
        type: 'SINGLE_COURSE',
        payload: {course}
    }
};

export const fetchCourseById = id => dispatch => {
    return fetch(`${basicUrl}courses/${id}`, { params : {id}})
        .then(response => response.json())
        .then(json => dispatch(receiveCourseById(json)))
};

const alertAction = (alert, message) => {
    return {
        type: 'ALERT',
        payload: {
            alert,
            message
        }
    }
};

const createEmptyCourse = () => {
    return {
        type : 'SINGLE_COURSE',
        payload : {
            course : course()
        }
    }
}

export const clearCurrentCourse = () => dispatch => {
    return dispatch(createEmptyCourse());
};


export const updateCourse = course => dispatch => {
    dispatch(alertAction(false,''));
    return fetch(`${basicUrl}courses/${course.id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(course)
    })
        .then(response => response.json())
        .then(json => dispatch(alertAction(true,'Course successfully updated')))
};

export const createCourse = course => dispatch => {
    dispatch(alertAction(false,''));
    return fetch(`${basicUrl}courses`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(course)
    })
        .then(response => response.json())
        .then(json => {
            dispatch(alertAction(true,'Course successfully created'));
            return json;
        })
};

const receiveAuthors = ({authors}) => {
    return {
        type: 'FIND_AUTHORS',
        payload: {authors}
    }
};

const createAuthor = ({name}) => {
    return {
        type: 'ADD_NEW_AUTHOR',
        payload: {name}
    }
};

const pendingAuthors = () => {
    return {
        type: 'PENDING_AUTHORS'
    }
};

export const clearAuthors = () => dispatch => {
    return dispatch({
        type: 'CLEAR_AUTHORS'
    })
};

export const fetchAuthorsByQuery = search => dispatch => {
    dispatch(pendingAuthors());
    return fetch(`${basicUrl}authors?search=${search}`)
        .then(response => response.json())
        .then(json => dispatch(receiveAuthors(json)))
};

export const addAuthor = name => dispatch => {
    return fetch(`${basicUrl}authors`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({name})
    })
        .then(response => response.json())
        .then(json => dispatch(createAuthor(json)))
};
