import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const {handleLogout} = useContext(AuthContext);
  const [firstname, setFirstname] = useState('Hilda');
  const [lastname, setLastname] = useState('Henriksson');

  const editUsername = () => {
    
  }

  return (
    <View style={styles.container}>
        <View style={styles.nameBox}>
          <Text style={styles.username}>{firstname} {lastname}</Text>
          <Pressable
              style={styles.editButton}
              onPress={() => editUsername()}
          >
              <Text>R</Text>
          </Pressable>
        </View>
        
        <Pressable
            style={styles.logoutButton}
            onPress={() => handleLogout()}
        >
            <Text>Log Out</Text>
        </Pressable>


        <View style={styles.popUp}>
            <Text style={styles.popupHeading}>Edit username</Text>
            <Text>Firstname</Text>
            <TextInput
                style={styles.input}
                placeholder='Firstname'
                value={firstname}
                
                onChangeText={newText => setFirstname()}
            ></TextInput>
            <Text>Lastname</Text>
            <TextInput
                style={styles.input}
                placeholder='Lastname'
                value={lastname}
                
                onChangeText={newText => setLastname}
            ></TextInput>
            <Pressable
            style={styles.saveButton}
            onPress={() => handleUpdate()}
        >
            <Text>Save</Text>
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
      justifyContent: 'center',
    },
    nameBox: {
      flexDirection: 'row',
    },
    username: {
      fontSize: 30,
    },
    editButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: '30%',
    },
    logoutButton: {
      backgroundColor: 'lightblue',
      borderRadius: '30%',
      padding: 20,
      width: 250,
      alignItems: 'center'
    },

    popUp: {
      backgroundColor: 'lightgrey',
      width: 300,
      height: 350,
      position: 'fixed',
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      display: 'none',

    },
    popupHeading: {
      fontSize: 20,
      alignSelf: 'center',
      marginBottom: 30,
    },
    input: {
      width: '100%',
      height: 40,
      padding: 20,
      color: 'black',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginBottom: 20,
    },
    saveButton: {
      backgroundColor: 'lightgreen',
      borderRadius: '30%',
      padding: 20,
      width: 250,
      alignItems: 'center'
    }

});

export default Profile
