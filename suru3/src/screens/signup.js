/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {themeColors} from '../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/signup.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Name" />

        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter Password"
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/icons/google.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/icons/apple.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/icons/facebook.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  backButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  logo: {
    width: 165,
    height: 110,
  },
  formContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputLabel: {
    color: 'gray',
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    color: 'gray',
    borderRadius: 20,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  signupButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
  orText: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    padding: 10,
    marginRight: 12,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#FFD700',
  },
});
