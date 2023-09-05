import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [accessToken, setAccessToken] = useState(null);
    const [userId, setUserId] = useState(null);

    

    const handleLogin = async (usernameInput, passwordInput) => {
        try {
            console.log(JSON.stringify({
                username: usernameInput,
                password: passwordInput
            }))
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
                await AsyncStorage.setItem('accessToken', data.data.accessToken)
                await AsyncStorage.setItem('userId', data.data._id)
                setAccessToken(data.data.accessToken)
                setUserId(data.data._id)
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
            await AsyncStorage.removeItem('userId')
            setAccessToken(null)
            setUserId(null)
        } catch(error) {
            console.log(error)
        }
    }

    const isLoggedIn = async () => {
        console.log(JSON.stringify({
            username: usernameInput,
            password: passwordInput
        }))
        try {
            const token = await AsyncStorage.getItem('accessToken')
            console.log('TOKEN:' + token)
            setAccessToken(token)
            const user = await AsyncStorage.getItem('userId')
            console.log('USER:' + user)
            setUserId(user)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])


    return (
        <AuthContext.Provider value={{accessToken, userId, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}


