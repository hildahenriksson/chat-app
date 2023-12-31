import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native'

const Chat = () => {
  const {accessToken, userId} = useContext(AuthContext);

  const [allMessages, setAllMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  

  const deleteMessage = async (id) => {
    try {
      console.log(id);
      const response = await fetch('https://chat-api-with-auth.up.railway.app/messages/'+id,
      {   method: 'DELETE',
          headers: {'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`},   
      })

      const data = await response.json();
      console.log(data);

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
      console.log(data)

      if(data.status === 201) {
          console.log('success')
          setMessageInput('')
          
      } else {
          console.log(data.message)
      }

    } catch(error) {
        console.log(error)
    }
  }

  const formateDate = (date) => {
    const newDate = date.slice(0,10);
    const newTime = date.slice(11,16)


    return newDate + ' ' + newTime
  }

  useEffect(() => {
    getAllMessages()
  }, [createMessage, deleteMessage])

  return (
    <View style={styles.container} >
      <View style={styles.chatBox}>
        <FlatList data={allMessages} renderItem={({item}) => (
            <View style={[styles.message, item.user?._id === userId ? styles.right : styles.left]}>
                <View style={styles.messageInfo}>
                  <Text>{item.user?.username}</Text><Text>{formateDate(item.date)}</Text>
                </View>
                <Pressable onLongPress={() => deleteMessage(item._id)} style={[styles.textfield,
                
                item.user?._id === userId ? styles.rightContent : styles.leftContent]
                }><Text>{item.content}</Text>
                
                </Pressable>

            </View>
        )}/>
      </View>
      <View style={styles.inputBox}>
        <TextInput
            style={styles.input}
            placeholder='Write your message'
            value={messageInput}
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
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      flexDirection: 'column'
    },
    chatBox: {
      width: '100%',
      padding: 10,
      backgroundColor: '#e0e0e0',
      flex: 15
    },
    message: {
      marginVertical: 10,
    },
    messageInfo: {
      flexDirection: 'row',
      marginHorizontal: 10,
      gap: 10
    },
    textfield: {
      padding: 10,
      borderRadius: '20%',
    },
    left: {
      alignSelf: 'flex-start',
    },
    right: {
      alignSelf: 'flex-end',
    },
    leftContent: {
      backgroundColor: '#fff',
      alignSelf: 'flex-start'
    },
    rightContent: {
      backgroundColor: 'lightblue',
      alignSelf: 'flex-end'
    },
    inputBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      flex: 1,
      padding: 10,
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: '30%',
      alignItems: 'center',
    },
    input: {
      flex: 5
    },
    button: {
      backgroundColor: '#dcedc9',
      height: '90%',
      borderRadius: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }
});

export default Chat
