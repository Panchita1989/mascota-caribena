'use client'

import { createContext, useReducer, useContext, useEffect } from 'react'
import { authReducer, initialState } from './authReducer'
import { useSession } from 'next-auth/react'

//Create Context
const AuthContext = createContext()

//Provider component
export function AuthProvider({children}){
    const[state, dispatch] = useReducer(authReducer, initialState)
    const{ data:session, status } = useSession()

     // Synchronisiere NextAuth Session -> Reducer
     useEffect(()=>{
        if(status === 'loading') return
        if(session?.user){
            dispatch({type: 'LOGIN', payload: session.user})
        }else{
            dispatch({type: 'LOGOUT'})
        }
     },[session, status])

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
