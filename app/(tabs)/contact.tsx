import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Typography, Colors } from '../../constants/Typography';

export default function ContactScreen(): React.ReactElement {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Billing Question',
    'Feature Request',
    'Bug Report',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>Write us a message our team will get back to you shortly</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Subject Dropdown */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Subject</Text>
          <TouchableOpacity 
            style={styles.dropdownButton}
            onPress={() => setShowSubjectDropdown(!showSubjectDropdown)}
          >
            <Text style={[styles.dropdownText, !subject && styles.placeholderText]}>
              {subject || 'Select a subject'}
            </Text>
            <Ionicons 
              name={showSubjectDropdown ? "chevron-up" : "chevron-down"} 
              size={20} 
              color={Colors.textSecondary} 
            />
          </TouchableOpacity>
          
          {showSubjectDropdown && (
            <View style={styles.dropdownList}>
              {subjects.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSubject(item);
                    setShowSubjectDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Message Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Message</Text>
          <TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Write a message"
            placeholderTextColor={Colors.textLight}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
  },
  headerContent: {
    marginLeft: 15,
    flex: 1,
  },
  headerTitle: {
    ...Typography.heading,
    fontSize: 20,
    color: Colors.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    ...Typography.body,
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    ...Typography.bodySemiBold,
    fontSize: 16,
    color: Colors.text,
    marginBottom: 12,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  dropdownText: {
    ...Typography.body,
    fontSize: 16,
    color: Colors.text,
  },
  placeholderText: {
    color: Colors.textLight,
  },
  dropdownList: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    marginTop: 8,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F8FA',
  },
  dropdownItemText: {
    ...Typography.body,
    fontSize: 16,
    color: Colors.text,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    height: 200,
    ...Typography.body,
    fontSize: 16,
    color: Colors.text,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  sendButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.white,
    fontSize: 16,
  },
});