const authors = (state = {
    authors : [],
    loaded: true
}, {type, payload}) => {
    switch (type) {
        case 'FIND_AUTHORS':
            const {authors} = payload;
            return Object.assign({},{authors, loaded: true});
        case 'PENDING_AUTHORS':
            return Object.assign({},{authors: [],loaded: false});
        case 'ADD_NEW_AUTHOR' :
            const {name} = payload;
            return Object.assign({},{
                authors: [...state.authors,name],
                loaded: true});
        case 'CLEAR_AUTHORS' :
            return Object.assign({},{authors: [],loaded: true});
        default:
            return state
    }
};

export default authors