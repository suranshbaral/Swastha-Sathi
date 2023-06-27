/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const FirstPage = ({navigation}) => {
  const handleLogin = () => {
    // Handle login logic
    navigation.navigate('Login'); // Replace 'Login' with your login screen component
  };

  const handleSignup = () => {
    // Handle signup logic
    navigation.navigate('Signup'); // Replace 'Signup' with your signup screen component
  };

  const handleDirectEntry = () => {
    // Handle direct entry logic
    navigation.navigate('Home'); // Replace 'Home' with your home screen component
  };

  return (
    <View style={styles.firstPage}>
      <Image
        style={styles.ellipseImage}
        source={require('../assets/ellipse-2.png')}
      />
      <Image
        style={styles.rectangleImage}
        source={require('../assets/rectangle-6.png')}
      />
      <Text style={[styles.startNowText, styles.textCenter]}>Start Now</Text>
      <Text style={[styles.swasthaSathiText, styles.textCenter]}>
        Swastha Sathi
      </Text>
      <Text style={[styles.weAreWithText, styles.textCenter]}>
        We are with you!!
      </Text>
      <Image style={styles.iconImage} source={require('../assets/123-1.png')} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDirectEntry}>
        <Text style={styles.buttonText}>Enter Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  firstPage: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipseImage: {
    width: 495,
    height: 475,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  rectangleImage: {
    width: 266,
    height: 55,
    borderRadius: 25,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -133}, {translateY: -27.5}],
  },
  startNowText: {
    fontSize: 20,
    marginTop: 160,
  },
  swasthaSathiText: {
    fontSize: 36,
    marginBottom: 48,
  },
  weAreWithText: {
    fontSize: 24,
    marginBottom: 67,
  },
  iconImage: {
    width: 163,
    height: 170,
    borderRadius: 16,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -81.5}, {translateY: -85}],
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default FirstPage;
