import React, { useContext } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const {handleLogout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text>Profile</Text>
        <Pressable
            style={styles.button}
            onPress={() => handleLogout()}
        >
            <Text>Log Out</Text>
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
});

export default Profile
