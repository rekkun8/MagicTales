import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

export default function StoryCreatorScreen(): React.ReactElement {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [showInterestDropdown, setShowInterestDropdown] = useState(false);
  const [showMoodDropdown, setShowMoodDropdown] = useState(false);

  const interests = [
    'Animals & Nature',
    'Space & Adventure',
    'Fairy Tales',
    'Science Fiction',
    'Mystery & Detective',
    'Friendship & Family',
  ];

  const moods = [
    'Happy & Cheerful',
    'Adventurous',
    'Calm & Peaceful',
    'Exciting & Thrilling',
    'Funny & Silly',
    'Mysterious',
  ];

  const handleStartStory = () => {
    if (selectedInterest && selectedMood) {
      // Navigate to story generation or display
      console.log('Starting story with:', { selectedInterest, selectedMood });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Story Creator</Text>
          <Text style={styles.headerSubtitle}>Just a few details and your magical story begins!</Text>
        </View>
      </View>

      {/* Content with Purple Background */}
      <View style={styles.content}>
        <View style={styles.purpleSection}>
          {/* Interest Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Interest</Text>
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => {
                setShowInterestDropdown(!showInterestDropdown);
                setShowMoodDropdown(false);
              }}
            >
              <Text style={[styles.dropdownText, !selectedInterest && styles.placeholderText]}>
                {selectedInterest || 'Select your interest'}
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
                      setSelectedInterest(item);
                      setShowInterestDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Mood Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mood</Text>
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => {
                setShowMoodDropdown(!showMoodDropdown);
                setShowInterestDropdown(false);
              }}
            >
              <Text style={[styles.dropdownText, !selectedMood && styles.placeholderText]}>
                {selectedMood || 'Select the mood'}
              </Text>
              <Ionicons 
                name={showMoodDropdown ? "chevron-up" : "chevron-down"} 
                size={16} 
                color="#A0ADB8" 
              />
            </TouchableOpacity>
            
            {showMoodDropdown && (
              <View style={styles.dropdownList}>
                {moods.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedMood(item);
                      setShowMoodDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Start Button */}
          <TouchableOpacity 
            style={[styles.startButton, (!selectedInterest || !selectedMood) && styles.disabledButton]} 
            onPress={handleStartStory}
            disabled={!selectedInterest || !selectedMood}
          >
            <Text style={styles.startButtonText}>Start Your Magical Story</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom White Section */}
        <View style={styles.bottomSection} />
      </View>
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
  },
  purpleSection: {
    backgroundColor: '#bca4e5',
    paddingHorizontal: 24,
    paddingVertical: 32,
    flex: 0.6,
  },
  inputContainer: {
    marginBottom: 24,
    position: 'relative',
  },
  inputLabel: {
    ...Typography.heading,
    fontSize: 18,
    color: Colors.text,
    marginBottom: 12,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dropdownText: {
    ...Typography.body,
    fontSize: 16,
    color: Colors.text,
    flex: 1,
  },
  placeholderText: {
    color: '#A0ADB8',
  },
  dropdownList: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderRadius: 12,
    maxHeight: 200,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
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
  startButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#A0ADB8',
  },
  startButtonText: {
    color: Colors.white,
    fontSize: 16,
    ...Typography.bodySemiBold,
  },
  bottomSection: {
    flex: 0.4,
    backgroundColor: Colors.background,
  },
});