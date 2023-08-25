import React from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='Username'
            
            onChangeText={newText => setInput(newText)}
        ></TextInput>
        <TextInput
            style={styles.input}
            placeholder='Password'
            
            onChangeText={newText => setInput(newText)}
        ></TextInput>
        <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
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
