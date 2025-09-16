import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Fonts } from '../constants/colors';
import { Challenge } from '../types';

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
          {challenge.tags.map((tag, index) => (
            <View 
              key={index} 
              style={[
                styles.tag,
                index === 0 ? styles.rewardTag : styles.freeProductTag
              ]}
            >
              {index === 0 && (
                <>
                  <Ionicons name="logo-bitcoin" size={12} color={Colors.textLight} />
                  <Text style={styles.rewardTagText}>{tag}</Text>
                </>
              )}
              {index === 1 && (
                <Text style={styles.freeProductTagText}>{tag}</Text>
              )}
            </View>
          ))}
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
    top: 12,
    left: 12,
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  completedText: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.medium,
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
