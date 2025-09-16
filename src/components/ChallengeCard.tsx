import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts } from '../constants/colors';
import { Challenge } from '../types';
import { VoilaIcon } from './VoilaIcon';

interface ChallengeCardProps {
  challenge: Challenge;
  onPress: () => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onPress }) => {
  const isDisabled = challenge.isDisabled || challenge.status === 'completed' || challenge.status === 'upcoming';
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/challenge.png')} 
          style={styles.image}
          resizeMode="cover"
        />
        {challenge.status === 'completed' && (
          <View style={styles.completedBadge}>
            <Ionicons name="checkmark" size={16} color="white" />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.tagsContainer}>

        {challenge.reward && challenge.reward > 0 && (
            <View style={[styles.tag, styles.rewardTag]}>
              <Ionicons name="gift" size={12} color={Colors.textLight} />
              <Text style={styles.rewardTagText}>{challenge.reward}</Text>
            </View>
          )}
        
          {challenge.voila && (
            <View style={[styles.tag, styles.voilaTag]}>
              <VoilaIcon size={24} color={Colors.primary} />
            </View>
          )}
          
          {challenge.offer && (
            <View style={[styles.tag, styles.offerTag]}>
              
              <Text style={styles.offerTagText}>{challenge.offer}</Text>
            </View>
          )}
        </View>
        
        <Text style={styles.title}>{challenge.title}</Text>
        <Text style={styles.description}>{challenge.description}</Text>
        
        <TouchableOpacity 
          style={[styles.button, isDisabled && styles.disabledButton]} 
          onPress={onPress}
          disabled={isDisabled}
        >
          <Text style={[styles.buttonText, isDisabled && styles.disabledButtonText]}>
            {challenge.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    flex: 1,
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  completedBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "#35A131",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  completedText: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.medium,
    lineHeight: 12,
  },
  content: {
    padding: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rewardTag: {
    backgroundColor: Colors.tag,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  freeProductTag: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  voilaTag: {
    backgroundColor: '#00D6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  offerTag: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.text,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tagText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
  rewardTagText: {
    color: Colors.tagText,
  },
  voilaTagText: {
    color: Colors.textLight,
  },
  freeProductTagText: {
    color: Colors.text,
  },
  offerTagText: {
    color: Colors.text,
    fontFamily: Fonts.bold,
    lineHeight: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  disabledButtonText: {
    color: '#9E9E9E',
  },
});
