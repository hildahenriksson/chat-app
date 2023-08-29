import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native'

const Chat = () => {
  const {accessToken, userId} = useContext(AuthContext);

  console.log(userId)

  const [allMessages, setAllMessages] = useState([]);

  const getAllMessages = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/messages',
      {   method: 'GET',
          headers: {'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`},
          
      })
      const data = await response.json();

      if(data.status === 200) {
          console.log(data)
          setAllMessages(data)
          
      } else {
          console.log(data.message)
      }

    } catch(error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getAllMessages()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.chatBox}>
        <FlatList data={allMessages.data} renderItem={({item}) => (
            <View style={styles.message}>
                <View style={styles.textfield 
                // item.user._id === userId ? styles.right : styles.left]
                }><Text>{item.content}</Text></View>
                <Text>{item.date}</Text>
            </View>
        )}/>
      </View>
      <View style={styles.inputBox}>
        <TextInput
            style={styles.input}
            placeholder='Write'
            
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
    message: {
      backgroundColor: 'white',
    },
    textfield: {
      backgroundColor: 'lightgrey',
      padding: 10,
      borderRadius: '20%'
    },
    left: {
      alignSelf: 'flex-start',
    },
    right: {
      alignSelf: 'flex-end',
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
