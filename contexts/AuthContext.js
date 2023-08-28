import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [accessToken, setAccessToken] = useState(true);

    

    const handleLogin = async (usernameInput, passwordInput) => {
        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/token',
            {   method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: usernameInput,
                    password: passwordInput
                })
            })
            const data = await response.json();

            if(data.status === 200) {
                console.log(data)
                await AsyncStorage.setItem('accessToken', data.data.accessToken)
                setAccessToken(data.data.accessToken)
            } else {
                console.log(data.message)
            }

        } catch(error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('accessToken')
            setAccessToken(null)
        } catch(error) {
            console.log(error)
        }
    }

    const isLoggedIn = async () => {
        try {
            const token = await AsyncStorage.getItem('accessToken')
            setAccessToken(token)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])


    return (
        <AuthContext.Provider value={{accessToken, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}


