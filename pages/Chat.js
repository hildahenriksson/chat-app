import React from 'react'
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatBox}></View>
      <View style={styles.inputBox}>
        <TextInput
            style={styles.input}
            placeholder='Password'
            
        ></TextInput>
        <Pressable
            style={styles.button}
            
        >
            <Text>Send</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    chatBox: {
      width: '100%',
      height: 600,
      backgroundColor: 'lightblue'
    },
    inputBox: {
      width: '100%',
      height: 100,
      flexDirection: 'row'
    },
    input: {
      backgroundColor: 'pink',
      borderRadius: '20%',
      padding: 20,
      flex: 5
    },
    button: {
      backgroundColor: 'green',
      borderRadius: '20%',
      padding: 20,
      flex: 1
    }
});

export default Chat
