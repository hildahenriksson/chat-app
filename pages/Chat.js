import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native'

const Chat = () => {
  const {accessToken, userId} = useContext(AuthContext);

  const [allMessages, setAllMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  

  const deleteMessage = async (id) => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/'+id,
      {   method: 'DELETE',
          headers: {'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`},   
      })

      if(data.status === 200) {
          console.log('deleted' + id)
          
      } else {
          console.log(data.message)
      }

    } catch(error) {
        console.log(error)
    }
  }

  

  const getAllMessages = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/messages',
      {   method: 'GET',
          headers: {'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`},
          
      })
      const data = await response.json();

      if(data.status === 200) {
          
          setAllMessages(data.data)
          
      } else {
          console.log(data.message)
      }

    } catch(error) {
        console.log(error)
    }
  }

  const createMessage = async () => {
    try {
      const response = await fetch('https://chat-api-with-auth.up.railway.app/messages',
      {   method: 'POST',
          headers: {'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`},
          body: JSON.stringify({content: messageInput})
      })

      const data = await response.json();

      if(data.status === 201) {
          console.log('success')
          
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
        <FlatList data={allMessages} renderItem={({item}) => (
            <View style={styles.message}>
                <Pressable onLongPress={() => deleteMessage(item._id)} style={[styles.textfield,
                
                item.user?._id === userId ? styles.right : styles.left]
                }><Text>{item.content}</Text>
                
                </Pressable>

                

                <Text>{item.date}</Text>
                <Text>{item.user?._id}</Text>

            </View>
        )}/>
      </View>
      <View style={styles.inputBox}>
        <TextInput
            style={styles.input}
            placeholder='Write'
            onChangeText={newText => setMessageInput(newText)}
            
        ></TextInput>
        <Pressable
            style={styles.button}
            onPress={() => createMessage()}>
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
