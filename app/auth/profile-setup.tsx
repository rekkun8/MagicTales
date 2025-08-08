import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

export default function ProfileSetupScreen(): React.ReactElement {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [interest, setInterest] = useState('');
  const [showInterestDropdown, setShowInterestDropdown] = useState(false);

  const interests = [
    'Animals & Nature',
    'Science & Space',
    'Art & Creativity',
    'Sports & Games',
    'Music & Dance',
    'Stories & Reading',
  ];

  const handleBeginFun = () => {
    if (name && dateOfBirth && interest) {
      router.replace('/(tabs)');
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <LinearGradient
        colors={['#B39DDB', '#9575CD']}
        style={styles.gradientContainer}
      >
        <Text style={styles.headerTitle}>My Profile</Text>
        
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            {/* Empty white circle for avatar */}
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="checkmark" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder=""
              placeholderTextColor="#A0ADB8"
            />
          </View>

          {/* Date of Birth Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.dateInputContainer}>
              <TextInput
                style={styles.input}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder=""
                placeholderTextColor="#A0ADB8"
              />
              <TouchableOpacity style={styles.calendarIcon}>
                <Ionicons name="calendar-outline" size={20} color="#A0ADB8" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Interest Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Interest</Text>
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => setShowInterestDropdown(!showInterestDropdown)}
            >
              <Text style={[styles.dropdownText, !interest && styles.placeholderText]}>
                {interest || ''}
              </Text>
              <Ionicons 
                name={showInterestDropdown ? "chevron-up" : "chevron-down"} 
                size={16} 
                color="#A0ADB8" 
              />
            </TouchableOpacity>
            
            {showInterestDropdown && (
              <View style={styles.dropdownList}>
                {interests.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setInterest(item);
                      setShowInterestDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Begin the Fun Button */}
          <TouchableOpacity style={styles.beginButton} onPress={handleBeginFun}>
            <Text style={styles.beginButtonText}>Begin the Fun</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    paddingTop: 20,
  },
  headerTitle: {
    ...Typography.heading,
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: '50%',
    marginRight: -54, // Half avatar width + button radius
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#609902',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 24,
    position: 'relative',
  },
  inputLabel: {
    ...Typography.bodySemiBold,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    ...Typography.body,
    color: '#2D3748',
  },
  dateInputContainer: {
    position: 'relative',
  },
  calendarIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    ...Typography.body,
    fontSize: 16,
    color: '#2D3748',
    flex: 1,
  },
  placeholderText: {
    color: '#A0ADB8',
  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 8,
    marginTop: 4,
    maxHeight: 200,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F8FA',
  },
  dropdownItemText: {
    ...Typography.body,
    fontSize: 16,
    color: '#2D3748',
  },
  beginButton: {
    backgroundColor: '#609902',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
  },
  beginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    ...Typography.bodySemiBold,
  },
});