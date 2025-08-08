import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Colors } from '../../constants/Typography';

export default function ProfileScreen(): React.ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <LinearGradient
        colors={['#9C27B0', '#673AB7']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>My Profile</Text>
        
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editIcon}>✓</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            defaultValue="Mohammed Saquib"
            placeholder="Enter your name"
            placeholderTextColor="#A0ADB8"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date of Birth</Text>
          <View style={styles.dateInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Select date"
              placeholderTextColor="#A0ADB8"
            />
            <View style={styles.calendarIcon}>
              <Text style={styles.calendarIconText}>📅</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Interest</Text>
          <View style={styles.dropdownContainer}>
            <TextInput
              style={styles.input}
              placeholder="Select interest"
              placeholderTextColor="#A0ADB8"
              editable={false}
            />
            <View style={styles.dropdownIcon}>
              <Text style={styles.dropdownIconText}>▼</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.beginButton}>
          <Text style={styles.beginButtonText}>Begin the Fun</Text>
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
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerTitle: {
    ...Typography.heading,
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  avatarContainer: {
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
  avatarText: {
    fontSize: 40,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#609902',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    ...Typography.bodySemiBold,
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 8,
  },
    input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: '#F7FAFC',
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
  calendarIconText: {
    fontSize: 20,
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 16,
    top: 18,
  },
  dropdownIconText: {
    fontSize: 16,
    color: '#A0ADB8',
  },
  beginButton: {
    backgroundColor: '#609902',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 40,
  },
  beginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    ...Typography.bodySemiBold,
  },
});