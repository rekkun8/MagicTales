import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

export default function AITutorScreen(): React.ReactElement {
  const handleSubjectPress = (subject: string) => {
    console.log('Selected subject:', subject);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>AI Tutor</Text>
          <Text style={styles.headerSubtitle}>Fun, friendly lessons made just{'\n'}for you</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Maths Card (Large) with Overflow */}
        <View style={styles.mathsContainer}>
          <TouchableOpacity 
            style={styles.largeCard} 
            onPress={() => handleSubjectPress('Maths')}
          >
            <LinearGradient
              colors={[Colors.primary, '#7CB518']}
              style={styles.largeCardGradient}
            >
              <Text style={styles.largeCardTitle}>Maths</Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* Overflowing Math Image - Boy with blackboard */}
          <View style={styles.mathsImageContainer}>
            <Image 
              source={require('../../assets/images/maths.png')}
              style={styles.mathsImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* First Row - Reading & Science */}
        <View style={styles.row}>
          {/* Reading & Vocabulary Card */}
          <View style={styles.subjectContainer}>
            <TouchableOpacity 
              style={styles.smallCard} 
              onPress={() => handleSubjectPress('Reading')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.smallCardGradient}
              >
                <Text style={styles.smallCardTitle}>Reading{'\n'}& Vocabulary</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Reading Image - Girl reading */}
            <View style={styles.readingImageContainer}>
              <Image 
                source={require('../../assets/images/reading.png')}
                style={styles.readingImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Science Card */}
          <View style={styles.subjectContainer}>
            <TouchableOpacity 
              style={styles.smallCard} 
              onPress={() => handleSubjectPress('Science')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.smallCardGradient}
              >
                <Text style={styles.smallCardTitle}>Science</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Science Image - Scientist with equipment */}
            <View style={styles.scienceImageContainer}>
              <Image 
                source={require('../../assets/images/science.png')}
                style={styles.scienceImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Second Row - Language & Coding Logic */}
        <View style={styles.row}>
          {/* Language Card */}
          <View style={styles.subjectContainer}>
            <TouchableOpacity 
              style={styles.smallCard} 
              onPress={() => handleSubjectPress('Language')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.smallCardGradient}
              >
                <Text style={styles.smallCardTitle}>Language</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Language Image - People with speech bubbles */}
            <View style={styles.languageImageContainer}>
              <Image 
                source={require('../../assets/images/language.png')}
                style={styles.languageImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Coding Logic Card */}
          <View style={styles.subjectContainer}>
            <TouchableOpacity 
              style={styles.smallCard} 
              onPress={() => handleSubjectPress('Coding')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.smallCardGradient}
              >
                <Text style={styles.smallCardTitle}>Coding Logic</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Coding Image - Person with computer */}
            <View style={styles.codingImageContainer}>
              <Image 
                source={require('../../assets/images/coding.png')}
                style={styles.codingImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Extra space for overflowing images */}
        <View style={styles.spacer} />
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
    fontSize: 24,
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  headerSubtitle: {
    ...Typography.body,
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 18,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  // Maths Large Card with Overflow
  mathsContainer: {
    position: 'relative',
    marginBottom: 50, // Extra space for overflow
  },
  largeCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 150,
  },
  largeCardGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  largeCardTitle: {
    ...Typography.heading,
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  mathsImageContainer: {
    position: 'absolute',
    top: -35, // Overflow above the card
    right: 75,
    zIndex: 10,
  },
  mathsImage: {
    width: 180,
    height: 130,
  },

  // Small Cards Row
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 55, // Extra space for overflow
  },
  subjectContainer: {
    flex: 1,
    position: 'relative',
  },
  smallCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 140,
  },
  smallCardGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  smallCardTitle: {
    ...Typography.heading,
    fontSize: 13,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 15,
  },

  // Reading Image Overflow (Left side - girl with book)
  readingImageContainer: {
    position: 'absolute',
    top: -30, // Overflow above card
    left: 5,
    zIndex: 10,
  },
  readingImage: {
    width: 160,
    height: 110,
  },

  // Science Image Overflow (Right side - scientist)
  scienceImageContainer: {
    position: 'absolute',
    top: -35, // Overflow above card
    right: 0,
    zIndex: 10,
  },
  scienceImage: {
    width: 170,
    height: 120,
  },

  // Language Image Overflow (Left side - people talking)
  languageImageContainer: {
    position: 'absolute',
    top: -30, // Overflow above card
    left: 0,
    zIndex: 10,
  },
  languageImage: {
    width: 165,
    height: 120,
  },

  // Coding Logic Image Overflow (Right side - person coding)
  codingImageContainer: {
    position: 'absolute',
    top: -30, // Overflow above card
    right: 5,
    zIndex: 10,
  },
  codingImage: {
    width: 160,
    height: 120,
  },

  spacer: {
    height: 40,
  },
});