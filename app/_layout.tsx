import React, { useEffect, useState } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    'Fredoka-Regular': require('../assets/fonts/Fredoka_Expanded-Bold.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-Black.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}