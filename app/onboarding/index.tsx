import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen(): React.ReactElement {
  const handleGetStarted = () => {
    // Go directly to welcome page (not another onboarding screen)
    router.replace('/auth/welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Background Image Section */}
      <View style={styles.imageSection}>
        <ImageBackground 
          source={require('../../assets/images/onboarding1.png')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        
        {/* Wave cutout effect */}
        <View style={styles.waveContainer}>
          <View style={styles.wave} />
        </View>
      </View>

      {/* White bottom section */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Learning is fun</Text>
        <Text style={styles.subtitle}>let's explore together!</Text>
        
        <Text style={styles.description}>
          Dive into fun stories, play smart games, and learn with your AI friend all in one happy place for curious kids
        </Text>

        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
          <Text style={styles.arrow}> →</Text>
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
      { translateY: 25 }
    ],
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.heading,
    fontSize: 32,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 38,
  },
  subtitle: {
    ...Typography.heading,
    fontSize: 32,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 38,
  },
  description: {
    ...Typography.body,
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  getStartedButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    maxWidth: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  getStartedButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.white,
    fontSize: 18,
  },
  arrow: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});