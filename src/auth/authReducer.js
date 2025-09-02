

export const initialState = {
    isAuthenticated: false,
    user: null
}

export function authReducer(state, action){
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case 'LOGOUT':
            return initialState

        case 'UPDATE_USER':
            return{
                ...state,
                user:{...state.user, ...action.payload }
            }
        default:
            return state
    }
}