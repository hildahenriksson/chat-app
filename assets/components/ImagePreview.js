import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library'


const ImagePreview = ({picture, setPicture}) => {

    const savePicture = async () => {
        try {
          const asset = await MediaLibrary.createAssetAsync(picture.uri)
          
          const album = await MediaLibrary.getAlbumAsync('Expo');
    
          if (album == null) {
            await MediaLibrary.createAlbumAsync('Expo', asset, false)
          } else {
            await MediaLibrary.addAssetsToAlbumAsync(asset, album.id, false);
          }
    
          setPicture(null)
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <View  style={styles.container}>
            <Image source={{uri: picture.uri}} style={{flex: 1}}/>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.generalButton}>
                <FontAwesome name="trash-o" size={24} color="white" onPress={() => setPicture(null)}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.generalButton}>
                <Text style={styles.saveText} onPress={() => savePicture()}>Save</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center'
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 20,
    },
    saveText: {
      color: 'white'
    }
  
  });

export default ImagePreview
