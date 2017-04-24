const login = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            const {user, logged, error} = action.payload;
            return Object.assign({}, state, {user, logged, error});
        default:
            return state
    }
};

export default login