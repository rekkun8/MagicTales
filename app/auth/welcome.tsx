import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen(): React.ReactElement {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background Image Section with Wave Cutout */}
      <View style={styles.imageSection}>
        <LinearGradient colors={['#64B5F6', '#2196F3']} style={styles.gradient}>
          <ImageBackground 
            source={require('../../assets/images/onboarding2.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </LinearGradient>
        
        {/* Wave cutout effect */}
        <View style={styles.waveContainer}>
          <View style={styles.wave} />
        </View>
      </View>
      
      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome!</Text>
        
        <TouchableOpacity 
          style={styles.logInButton} 
          onPress={() => router.push('/auth/signin')}
        >
          <Text style={styles.logInButtonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => router.push('/auth/signup')}
        >
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageSection: {
    height: height * 0.62,
    width: '100%',
    position: 'relative',
  },
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  waveContainer: {
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    height: 50,
    overflow: 'hidden',
  },
  wave: {
    height: 100,
    backgroundColor: Colors.white,
    borderRadius: width / 2,
    transform: [
      { scaleX: 2.5 },
      { translateY: 50 }
    ],
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.heading,
    fontSize: 48,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 25,
  },
  logInButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logInButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.white,
    fontSize: 18,
  },
  orText: {
    ...Typography.body,
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  signUpButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.primary,
    fontSize: 18,
  },
});