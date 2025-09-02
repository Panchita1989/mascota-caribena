'use client'

import { createContext, useReducer, useContext } from 'react'
import { authReducer, initialState } from './authReducer'

//Create Context
const AuthContext = createContext()

//Provider component
export function AuthProvider({children}){
    const[state, dispatch] = useReducer(authReducer, initialState)

    //Actions
    const login = (userData) =>{
        dispatch({type: 'LOGIN', payload: userData})
    }
    const logout = () => {
        dispatch({type: 'LOGOUT'})
    }
    const updateUser = (updatedData) => {
        dispatch({type: 'UPDATE_USER', payload: updatedData})
    }

    return (
        <AuthContext.Provider value={{state, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
        
    )
}
// custom hook for easier usage
export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an Authprovider");
        
    }
    return context
}
