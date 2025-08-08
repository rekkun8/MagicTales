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

export default function EducationalGamesScreen(): React.ReactElement {
  const games = [
    {
      title: 'Question\n& Answer',
      image: require('../../assets/images/qa.png'),
    },
    {
      title: 'Matching\nGames',
      image: require('../../assets/images/matching.png'),
    },
    {
      title: 'Drag &\nDrop Puzzles',
      image: require('../../assets/images/puzzle.png'),
    },
    {
      title: 'Timed Quizzes',
      image: require('../../assets/images/quiz.png'),
    },
  ];

  const handleGamePress = (game: string) => {
    console.log('Selected game:', game);
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
          <Text style={styles.headerTitle}>Educational Games</Text>
          <Text style={styles.headerSubtitle}>Play smart, learn faster games{'\n'}for curious little minds</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* First Row - Q&A & Matching */}
        <View style={styles.row}>
          {/* Question & Answer Card */}
          <View style={styles.gameContainer}>
            <TouchableOpacity 
              style={styles.gameCard} 
              onPress={() => handleGamePress('Question & Answer')}
            >
              <LinearGradient
                colors={[Colors.primary, '#609902']}
                style={styles.cardGradient}
              >
                <Text style={styles.gameCardTitle}>{games[0].title}</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Image */}
            <View style={styles.qaImageContainer}>
              <Image 
                source={games[0].image}
                style={styles.qaImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Matching Games Card */}
          <View style={styles.gameContainer}>
            <TouchableOpacity 
              style={styles.gameCard} 
              onPress={() => handleGamePress('Matching Games')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.cardGradient}
              >
                <Text style={styles.gameCardTitle}>{games[1].title}</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Image */}
            <View style={styles.matchingImageContainer}>
              <Image 
                source={games[1].image}
                style={styles.matchingImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Second Row - Puzzles & Quizzes */}
        <View style={styles.row}>
          {/* Drag & Drop Puzzles Card */}
          <View style={styles.gameContainer}>
            <TouchableOpacity 
              style={styles.gameCard} 
              onPress={() => handleGamePress('Drag & Drop Puzzles')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.cardGradient}
              >
                <Text style={styles.gameCardTitle}>{games[2].title}</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Image */}
            <View style={styles.puzzleImageContainer}>
              <Image 
                source={games[2].image}
                style={styles.puzzleImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Timed Quizzes Card */}
          <View style={styles.gameContainer}>
            <TouchableOpacity 
              style={styles.gameCard} 
              onPress={() => handleGamePress('Timed Quizzes')}
            >
              <LinearGradient
                colors={[Colors.primary, '#7CB518']}
                style={styles.cardGradient}
              >
                <Text style={styles.gameCardTitle}>{games[3].title}</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Overflowing Image */}
            <View style={styles.quizImageContainer}>
              <Image 
                source={games[3].image}
                style={styles.quizImage}
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
    paddingTop: 70,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 60, // Extra space for overflow
  },
  gameContainer: {
    flex: 1,
    position: 'relative',
  },
  gameCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 140,
  },
  cardGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  gameCardTitle: {
    ...Typography.heading,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 16,
  },

  // Question & Answer Image Overflow
  qaImageContainer: {
    position: 'absolute',
    top: -30,
    right: 10,
    zIndex: 10,
  },
  qaImage: {
    width: 180,
    height: 120,
    right: -15, // Adjust as needed for overflow
    top: -20,
  },

  // Matching Games Image Overflow
  matchingImageContainer: {
    position: 'absolute',
    top: -25,
    right: 5,
    zIndex: 10,
  },
  matchingImage: {
    width: 150,
    height: 120,
    right: 6, // Adjust as needed for overflow
    top: -10,
  },

  // Puzzle Image Overflow
  puzzleImageContainer: {
    position: 'absolute',
    top: -20,
    left: 5,
    zIndex: 10,
  },
  puzzleImage: {
    width: 180,
    height: 120,
    right: 8, // Adjust as needed for overflow
    top: -20, // Adjust as needed for overflow
  },

  // Quiz Image Overflow
  quizImageContainer: {
    position: 'absolute',
    top: -35,
    right: 0,
    zIndex: 10,
  },
  quizImage: {
    width: 180,
    height: 120,
    right: -2, // Adjust as needed for overflow
    top: 8,
  },

  spacer: {
    height: 30,
  },
});