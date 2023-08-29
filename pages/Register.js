import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const Register = ({navigation: {goBack}}) => {
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('https://chat-api-with-auth.up.railway.app/auth/register',
            {   method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: usernameInput,
                    password: passwordInput
                })
            })
            const data = await response.json();

            if(data.status === 200) {
                console.log('register ok')
                // Go back to log in
            } else {
                console.log(data.message)
            }
            
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <View style={styles.container}>
        
        <View style={styles.contentBox}>

            
            <Text style={styles.heading}>Register</Text>
            <View style={styles.inputBox}>
                <Text>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Choose your username'
                    
                    onChangeText={newText => setUsernameInput(newText)}
                ></TextInput>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Choose your password'
                    
                    onChangeText={newText => setPasswordInput(newText)}
                ></TextInput>
            </View>
            <Pressable
                style={styles.registerButton}
                onPress={() => handleRegister()}
            >
                <Text>Register</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => goBack()}
            >
                <Text>Back to Login</Text>
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
          fontSize: '30',
          fontWeight: 'bold'
      },
      inputBox: {
          
      },
      input: {
          width: 250,
          height: 40,
          padding: 20,
          color: 'black',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginBottom: 20,
      },
      registerButton: {
          backgroundColor: 'lightblue',
          borderRadius: '30%',
          padding: 20,
          width: 250,
          alignItems: 'center'
      }
});

export default Register
