const GithubReducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_FIRST':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        case 'SET_ALERT':
            return {
                ...state,
                alert: [action.msg, action.msg]
            }
        default:
            return {
                ...state
            }
    }
}


export default GithubReducer