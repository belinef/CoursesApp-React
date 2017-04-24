const alert = (state = {}, {type, payload}) => {
    switch (type) {
        case 'ALERT':
            return Object.assign({},payload);
        default:
            return state
    }
};

export default alert