import React, { JSX } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabLayout from './app/(tabs)/_layout';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabLayout />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}