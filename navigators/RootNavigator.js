import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';



export default function RootNavigator() {
    const {accessToken} = useContext(AuthContext);
    return (
        <>
        {
            accessToken
                ? <AppNavigator />
                : <AuthNavigator />
        }
        </>
    );
  }
