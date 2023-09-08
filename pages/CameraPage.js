import React, { useState, useEffect, useRef } from 'react'
import { Camera, CameraType, FlashMode } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import ImagePreview from '../assets/components/ImagePreview';

const CameraPage = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);

  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);

  const cameraRef = useRef(null);

  const [picture, setPicture] = useState(null);

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const toggleFlash = () => {
    setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync()
        console.log(picture);
        setPicture(picture)
      } catch (error) {
        console.log(error);
      }
    }
  }

  

  useEffect(() => {
    (async () => {
      const CameraPermissions = await Camera.requestCameraPermissionsAsync();
      console.log(CameraPermissions);
      setHasCameraPermission(CameraPermissions.status == 'granted')
      const MediaPermissions = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermission(MediaPermissions.status == 'granted')
      console.log(MediaPermissions);
    })();
  });

  if (hasCameraPermission === null || hasMediaPermission === null) {
    return (<View><Text>Waiting for permissions....</Text></View>);
  }
  if (hasCameraPermission === false || hasMediaPermission === false) {
    return (<View><Text>Permissions denied....</Text></View>);
  }


  if (picture !== null) {
    return (
      <ImagePreview picture={picture} setPicture={setPicture}/>
    )
  
  } else {
   return (
    <View style={styles.container}>
      <Camera style={styles.cameraContainer} type={type} flashMode={flash} ref={cameraRef}>
        <View style={styles.buttonsTop}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="refresh" size={24} color="white" onPress={() => toggleCameraType()}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name={flash == FlashMode.on ? 'flash' : 'flash-off'} size={24} color="white" onPress={() => toggleFlash()}/>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsBottom}>
          <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
            <Entypo name="camera" size={30} color="white" />
          </TouchableOpacity>
        </View>

      </Camera>
        
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  cameraContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  buttonsTop: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  buttonsBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 50,
    height: 50,
    marginRight: 5,
  },
  cameraButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
    width: 80,
    height: 80,
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

export default CameraPage
