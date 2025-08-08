import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

export default function VerifyCodeScreen(): React.ReactElement {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCodes = [...codes];
    newCodes[index] = text;
    setCodes(newCodes);

    // Auto focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = codes.join('');
    if (verificationCode.length === 6) {
      router.replace('/auth/profile-setup');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#2D3748" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Look for the secret code in your email.{'\n'}
          <Text style={styles.emailText}>example@gmail.com</Text>
        </Text>

        {/* Code Inputs */}
        <View style={styles.codeContainer}>
          {codes.map((code, index) => (
            <TextInput
              key={index}
              ref={(ref) => {inputRefs.current[index] = ref}}
              style={styles.codeInput}
              value={code}
              onChangeText={(text) => handleCodeChange(text, index)}
              maxLength={1}
              keyboardType="number-pad"
              textAlign="center"
            />
          ))}
        </View>

        {/* Didn't receive OTP */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive OTP?</Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Resend code</Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    ...Typography.heading,
    fontSize: 32,
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    ...Typography.body,
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 50,
    lineHeight: 24,
  },
  emailText: {
    color: '#609902',
    ...Typography.bodySemiBold,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 32,
  },
  codeInput: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    backgroundColor: '#F7FAFC',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  resendText: {
    ...Typography.body,
    color: '#718096',
    fontSize: 14,
    marginBottom: 4,
  },
  resendLink: {
    color: '#609902',
    fontSize: 14,
    ...Typography.bodySemiBold,
  },
  verifyButton: {
    backgroundColor: '#609902',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    ...Typography.bodySemiBold,
  },
});