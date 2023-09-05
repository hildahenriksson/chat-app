import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { AuthContext } from '../contexts/AuthContext';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = () => {
  const {handleLogout, deleteUser} = useContext(AuthContext);
  const [firstname, setFirstname] = useState('Hilda');
  const [lastname, setLastname] = useState('Henriksson');
  const [popupVisible, setPopupVisible] = useState(false);


  const toggleVisibility = () => {
    setPopupVisible(current => !current);
  };

  useEffect(() => {
    
  }, [toggleVisibility])

  return (
    <View style={styles.container}>
        <View style={styles.nameBox}>
          <Text style={styles.username}>{firstname} {lastname}</Text>
          <Pressable
              style={styles.editButton}
              onPress={() => toggleVisibility()}
          >
              <FontAwesome5 name="pencil-alt" size={24} color="black" />
          </Pressable>
        </View>
        
        <Pressable
            style={styles.logoutButton}
            onPress={() => handleLogout()}
        >
            <Text>Log Out</Text>
        </Pressable>
        <Pressable
            style={styles.logoutButton}
            onPress={() => deleteUser()}
        >
            <Text>Delete user</Text>
        </Pressable>


        <View style={[styles.popUp, popupVisible ? styles.visible : null]}>
            <Text style={styles.popupHeading}>Edit username</Text>
            <Text>Firstname</Text>
            <TextInput
                style={styles.input}
                placeholder='Firstname'
                value={firstname}
                
                onChangeText={newText => setFirstname(newText)}
            ></TextInput>
            <Text>Lastname</Text>
            <TextInput
                style={styles.input}
                placeholder='Lastname'
                value={lastname}
                
                onChangeText={newText => setLastname(newText)}
            ></TextInput>
            <Pressable
            style={styles.saveButton}
            onPress={() => toggleVisibility()}
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
      gap: 10,
    },
    username: {
      fontSize: 30,
    },
    logoutButton: {
      backgroundColor: 'lightblue',
      borderRadius: '30%',
      padding: 20,
      width: 250,
      alignItems: 'center'
    },

    popUp: {
      backgroundColor: '#fafafa',
      width: 300,
      height: 350,
      position: 'absolute',
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      display: 'none',
    },
    visible: {
      display: 'block',
    },
    popupHeading: {
      fontSize: 20,
      alignSelf: 'center',
      marginBottom: 30,
    },
    input: {
      width: '100%',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      padding: 15,
      backgroundColor: 'white',
      color: 'black',
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
