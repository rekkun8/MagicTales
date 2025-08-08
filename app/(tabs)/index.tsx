import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Typography, Colors } from '../../constants/Typography';

export default function HomeScreen(): React.ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>
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
        <LinearGradient
          colors={['#E91E63', '#AD1457']}
          style={styles.subscriptionBanner}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.bannerContent}>
            <View style={styles.bannerText}>
              <Text style={styles.bannerTitle}>Let the learning</Text>
              <Text style={styles.bannerTitle}>adventure begin</Text>
              <Text style={styles.bannerSubtitle}>
                Get up to 30% OFF on your child's learning journey
              </Text>
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bannerImage}>
              <Text style={styles.bannerEmoji}>👧📚</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Story Creator Card */}
        <TouchableOpacity style={[styles.featureCard, styles.storyCreatorCard]}>
          <LinearGradient
            colors={[Colors.primary, '#7CB518']}
            style={styles.cardGradient}
          >
            <Text style={styles.cardEmoji}>🎨📖</Text>
            <Text style={styles.cardTitle}>Story Creator</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Bottom Row Cards */}
        <View style={styles.bottomRow}>
          <TouchableOpacity style={[styles.featureCard, styles.halfCard]}>
            <LinearGradient
              colors={['#673AB7', '#512DA8']}
              style={styles.cardGradient}
            >
              <Text style={styles.cardEmoji}>🤖</Text>
              <Text style={styles.cardTitle}>AI Tutor</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.featureCard, styles.halfCard]}>
            <LinearGradient
              colors={[Colors.primary, '#7CB518']}
              style={styles.cardGradient}
            >
              <View style={styles.gameIcons}>
                <View style={styles.gameIcon}>
                  <Text style={styles.gameIconText}>?</Text>
                </View>
                <View style={styles.gameIconRed}>
                  <Text style={styles.gameIconTextWhite}>A</Text>
                </View>
                <View style={styles.gameIconBlue}>
                  <Text style={styles.gameIconTextWhite}>B</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>Educational</Text>
              <Text style={styles.cardTitle}>Games</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
  subscriptionBanner: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    ...Typography.heading,
    fontSize: 18,
    color: Colors.white,
    lineHeight: 22,
  },
  bannerSubtitle: {
    ...Typography.body,
    fontSize: 12,
    color: Colors.white,
    marginTop: 8,
    marginBottom: 16,
    opacity: 0.9,
  },
  subscribeButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  subscribeButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.white,
    fontSize: 12,
  },
  bannerImage: {
    marginLeft: 20,
  },
  bannerEmoji: {
    fontSize: 50,
  },
  featureCard: {
    borderRadius: 16,
    marginBottom: 15,
    overflow: 'hidden',
  },
  storyCreatorCard: {
    height: 120,
  },
  cardGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  cardTitle: {
    ...Typography.heading,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  halfCard: {
    flex: 1,
    height: 120,
  },
  gameIcons: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 5,
  },
  gameIcon: {
    width: 24,
    height: 24,
    backgroundColor: Colors.white,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameIconRed: {
    width: 24,
    height: 24,
    backgroundColor: '#FF5722',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameIconBlue: {
    width: 24,
    height: 24,
    backgroundColor: '#2196F3',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameIconText: {
    ...Typography.bodySemiBold,
    fontSize: 12,
    color: Colors.text,
  },
  gameIconTextWhite: {
    ...Typography.bodySemiBold,
    fontSize: 12,
    color: Colors.white,
  },
});