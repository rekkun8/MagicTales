import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Typography, Colors } from '../../constants/Typography';

export default function HomeScreen(): React.ReactElement {
  const handleSubscribePress = () => {
    router.push('/(tabs)/subscriptions');
  };

  const handleStoryCreatorPress = () => {
    router.push('/(tabs)/story-creator');
  };

  const handleAITutorPress = () => {
    router.push('/(tabs)/ai-tutor');
  };

  const handleEducationalGamesPress = () => {
    router.push('/(tabs)/educational-games');
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Good Morning!</Text>
          <Text style={styles.userName}>Mohammed Saquib</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Subscription Banner */}
        <View style={styles.subscriptionBanner}>
          <LinearGradient
            colors={['#b22ab0', '#b22ab0']}
            style={styles.bannerGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.bannerContent}>
              <View style={styles.bannerTextSection}>
                <Text style={styles.bannerTitle}>Let the learning</Text>
                <Text style={styles.bannerTitle}>adventure begin</Text>
                <Text style={styles.bannerSubtitle}>
                  Get up to 30% OFF on your child's learning journey
                </Text>
                <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribePress}>
                  <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bannerImageSection}>
                <Image 
                  source={require('../../assets/images/sub.png')} 
                  style={styles.bannerImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Story Creator Card with Navigation */}
        <View style={styles.storyCreatorContainer}>
          <TouchableOpacity style={styles.storyCreatorCard} onPress={handleStoryCreatorPress}>
            <LinearGradient
              colors={[Colors.primary, '#609902']}
              style={styles.storyCreatorGradient}
            >
              <Text style={styles.storyCreatorTitle}>Story Creator</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.storyCreatorImageContainer}>
            <Image 
              source={require('../../assets/images/story.png')} 
              style={styles.storyCreatorImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Bottom Row Cards with Navigation */}
        <View style={styles.bottomRow}>
          {/* AI Tutor Card */}
          <View style={styles.aiTutorContainer}>
            <TouchableOpacity style={styles.aiTutorCard} onPress={handleAITutorPress}>
              <LinearGradient
                colors={['#609902', '#609902']}
                style={styles.aiTutorGradient}
              >
                <Text style={styles.aiTutorTitle}>AI Tutor</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.aiTutorImageContainer}>
              <Image 
                source={require('../../assets/images/ai.png')} 
                style={styles.aiTutorImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Educational Games Card */}
          <View style={styles.gamesContainer}>
            <TouchableOpacity style={styles.gamesCard} onPress={handleEducationalGamesPress}>
              <LinearGradient
                colors={[Colors.primary, '#609902']}
                style={styles.gamesGradient}
              >
                <Text style={styles.gamesTitle}>Educational</Text>
                <Text style={styles.gamesTitle}>Games</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.gamesImageContainer}>
              <Image 
                source={require('../../assets/images/eg.png')} 
                style={styles.gamesImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
  },
  headerContent: {
    flex: 1,
    marginLeft: 15,
  },
  greeting: {
    ...Typography.heading,
    fontSize: 20,
    color: Colors.text,
  },
  userName: {
    ...Typography.body,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Subscription Banner
  subscriptionBanner: {
    borderRadius: 16,
    marginBottom: 45,
    overflow: 'hidden',
    height: 180,
  },
  bannerGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  bannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTextSection: {
    flex: 1.2,
  },
  bannerTitle: {
    ...Typography.heading,
    fontSize: 16,
    color: Colors.white,
    lineHeight: 20,
  },
  bannerSubtitle: {
    ...Typography.body,
    fontSize: 11,
    color: Colors.white,
    marginTop: 6,
    marginBottom: 12,
    opacity: 0.9,
    lineHeight: 14,
  },
  subscribeButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  subscribeButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.white,
    fontSize: 11,
  },
  bannerImageSection: {
    flex: 0.8,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: -20,
  },
  bannerImage: {
    width: 170,
    height: 170,
    marginRight: -26,
    marginBottom: -10,
  },

  storyCreatorContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  storyCreatorCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 150,
  },
  storyCreatorGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  storyCreatorTitle: {
    ...Typography.heading,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
  storyCreatorImageContainer: {
    position: 'absolute',
    top: -20, // Overflow above the card
    right: 20,
    zIndex: 10,
  },
  storyCreatorImage: {
    width: 130,
    height: 130,
    marginRight: 85,
    top: -10, // Adjust as needed for overflow
  },

  // Bottom Row with Overflow
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 40, // Extra space for overflow
  },

  // AI Tutor Card with Overflow
  aiTutorContainer: {
    flex: 1,
    position: 'relative',
  },
  aiTutorCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 150,
  },
  aiTutorGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  aiTutorTitle: {
    ...Typography.heading,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  aiTutorImageContainer: {
    position: 'absolute',
    top: -25, // Overflow above the card
    left: '50%',
    marginLeft: -40, // Center the image
    zIndex: 10,
  },
  aiTutorImage: {
    width: 100,
    height: 120,
    right: 8, // Adjust as needed for overflow
  },

  // Games Card with Overflow
  gamesContainer: {
    flex: 1,
    position: 'relative',
  },
  gamesCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 150,
  },
  gamesGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  gamesTitle: {
    ...Typography.heading,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 16,
  },
  gamesImageContainer: {
    position: 'absolute',
    top: -30, // Overflow above the card
    right: 10,
    zIndex: 10,
  },
  gamesImage: {
    width: 100,
    height: 120,
    right: 23,
    top: 8, // Adjust as needed for overflow
  },

  // Extra space at bottom
  spacer: {
    height: 20,
  },
});