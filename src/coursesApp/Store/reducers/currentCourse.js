const singleCourse = (state = {}, {type, payload}) => {
    switch (type) {
        case 'SINGLE_COURSE':
            const {course} = payload;
            return Object.assign({},course);
        default:
            return state
    }
};

export default singleCourse