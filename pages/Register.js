import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const Register = (navigation) => {
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
        <TextInput
            style={styles.input}
            placeholder='Username'
            
            onChangeText={newText => setUsernameInput(newText)}
        ></TextInput>
        <TextInput
            style={styles.input}
            placeholder='Password'
            
            onChangeText={newText => setPasswordInput(newText)}
        ></TextInput>
        <Pressable
            style={styles.button}
            onPress={() => handleRegister()}
        >
            <Text>Register</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        backgroundColor: 'pink',
        width: 200,
        height: 40,
        borderRadius: '20%',
        padding: 20
    },

    button: {
        backgroundColor: 'lightblue',
        borderRadius: '20%',
        padding: 30,
    }
});

export default Register
