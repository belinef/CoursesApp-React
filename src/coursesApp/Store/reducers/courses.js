const courses = (state = {
    coursesList : [],
    loaded: true
}, {type, payload}) => {
    switch (type) {
        case 'RECEIVE_COURSES':
            const {coursesList} = payload;
            return Object.assign({},{coursesList, loaded: true});
        case 'PENDING_COURSES':
            return Object.assign({},{coursesList: [], loaded: false});
        case 'REMOVE_COURSE' :
            let courses = state.coursesList.filter(course => course.id != payload.id);
            return Object.assign({},{coursesList : courses, loaded: true});
        default:
            return state
    }
};

export default courses