import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const LogIn = ({navigation}) => {
    const {handleLogin, errorMessage} = useContext(AuthContext);

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    

  return (
    <View style={styles.container}>
        <View style={styles.contentBox}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputBox}>
                <Text>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Type your username'
                    
                    onChangeText={newText => setUsernameInput(newText)}
                ></TextInput>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Type your password'
                    
                    onChangeText={newText => setPasswordInput(newText)}
                ></TextInput>
            </View>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Pressable
                style={styles.logInButton}
                onPress={() => handleLogin(usernameInput, passwordInput)}
            >
                <Text>Log in</Text>
            </Pressable>
            
            
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text>New user? Register</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentBox: {
        backgroundColor: '#fff',
        padding: 50,
        borderRadius: '30%',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        width: 250,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 15,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 20,
    },
    errorMessage: {
        color: 'red',
    },
    logInButton: {
        backgroundColor: 'lightblue',
        borderRadius: '30%',
        padding: 20,
        width: 250,
        alignItems: 'center'
    }
});

export default LogIn
