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
import { Ionicons } from '@expo/vector-icons';
import { Typography, Colors } from '../../constants/Typography';

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  perUnit: string;
  unitPrice: string;
  description: string;
  isPopular?: boolean;
  backgroundColor?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  period,
  perUnit,
  unitPrice,
  description,
  isPopular,
  backgroundColor = '#F7F8FA'
}) => (
  <View style={[styles.planCard, { backgroundColor }, isPopular && styles.popularCard]}>
    {isPopular && (
      <View style={styles.popularBadge}>
        <Text style={styles.popularBadgeText}>Most Popular • Save 15%</Text>
      </View>
    )}
    <View style={styles.planHeader}>
      <Text style={styles.planTitle}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.planPrice}>{price}</Text>
        <Text style={styles.planPeriod}>{period}</Text>
      </View>
    </View>
    <Text style={styles.planDescription}>{description}</Text>
    <View style={styles.unitPricing}>
      <Text style={styles.perUnit}>{perUnit}</Text>
      <Text style={styles.unitPrice}>{unitPrice}</Text>
    </View>
  </View>
);

export default function SubscriptionsScreen(): React.ReactElement {
  const plans = [
    {
      title: 'Yearly',
      price: '₹999',
      period: 'Per month',
      perUnit: 'Per month',
      unitPrice: '₹99',
      description: 'Get 2-week free trial',
      isPopular: true,
      backgroundColor: '#E8F5E8'
    },
    {
      title: 'Quarterly',
      price: '₹599',
      period: 'Per month',
      perUnit: 'Per month',
      unitPrice: '₹159',
      description: 'Includes 5-days free trial',
    },
    {
      title: 'Per Month',
      price: '₹299',
      period: 'Per day',
      perUnit: 'Per day',
      unitPrice: '₹10',
      description: '',
    }
  ];

  const features = [
    'Unlock all educational games and interactive stories.',
    'Access personalized learning paths tailored to your child\'s age and interests.',
    'Enjoy unlimited questions and answers on fun topics like animals, space, emotions, and more.',
    'Get new content every week fresh stories, games, and quizzes.',
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
          <Text style={styles.headerTitle}>Subscription</Text>
          <Text style={styles.headerSubtitle}>Choose Your Plan</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Plan Cards */}
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed To Payment</Text>
        </TouchableOpacity>

        {/* What's Included Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>What's Included</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.featureNumber}>{index + 1}.</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
  },
  headerContent: {
    marginLeft: 15,
  },
  headerTitle: {
    ...Typography.heading,
    fontSize: 20,
    color: Colors.text,
  },
  headerSubtitle: {
    ...Typography.body,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  planCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    position: 'relative',
  },
  popularCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  popularBadge: {
    position: 'absolute',
    top: -8,
    left: 20,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularBadgeText: {
    ...Typography.bodySemiBold,
    fontSize: 12,
    color: Colors.white,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  planTitle: {
    ...Typography.heading,
    fontSize: 18,
    color: Colors.text,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  planPrice: {
    ...Typography.heading,
    fontSize: 20,
    color: Colors.text,
  },
  planPeriod: {
    ...Typography.body,
    fontSize: 12,
    color: Colors.textSecondary,
  },
  planDescription: {
    ...Typography.body,
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  unitPricing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  perUnit: {
    ...Typography.body,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  unitPrice: {
    ...Typography.bodySemiBold,
    fontSize: 14,
    color: Colors.text,
  },
  proceedButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  proceedButtonText: {
    ...Typography.bodySemiBold,
    color: Colors.white,
    fontSize: 16,
  },
  featuresSection: {
    marginBottom: 30,
  },
  featuresTitle: {
    ...Typography.heading,
    fontSize: 18,
    color: Colors.text,
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingRight: 10,
  },
  featureNumber: {
    ...Typography.bodySemiBold,
    fontSize: 14,
    color: Colors.text,
    marginRight: 8,
    minWidth: 16,
  },
  featureText: {
    ...Typography.body,
    fontSize: 14,
    color: Colors.text,
    flex: 1,
    lineHeight: 20,
  },
});