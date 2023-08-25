import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

const LogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Log in</Text>
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
            onPress={() => navigation.navigate('')}
        >
            <Text>Log in</Text>
        </Pressable>
        <Text>New user?</Text>
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

export default LogIn
