import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function AppIndex(): React.ReactElement {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate checking auth state or onboarding status
    const initializeApp = async () => {
      try {
        // Add a small delay to ensure everything is mounted
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Your logic to check authentication/onboarding
        const hasSeenOnboarding = false; // Replace with actual logic
        const isAuthenticated = false;   // Replace with actual logic

        if (!hasSeenOnboarding) {
          router.replace('/onboarding');
        } else if (!isAuthenticated) {
          router.replace('/auth/welcome');
        } else {
          router.replace('/(tabs)');
        }
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback navigation
        router.replace('/onboarding');
      } finally {
        setIsReady(true);
      }
    };

    initializeApp();
  }, []);

  // Show loading screen while determining navigation
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading Magic Tales...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});