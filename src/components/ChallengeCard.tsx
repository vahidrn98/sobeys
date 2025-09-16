import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Challenge } from '../types';

interface ChallengeCardProps {
  challenge: Challenge;
  onPress: () => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: challenge.image }} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.content}>
        <View style={styles.tagsContainer}>
          {challenge.tags.map((tag, index) => (
            <View 
              key={index} 
              style={[
                styles.tag,
                tag === 'voila' ? styles.voilaTag : styles.rewardTag
              ]}
            >
              {tag === '5' && <Ionicons name="logo-bitcoin" size={12} color={Colors.textLight} />}
              <Text style={[
                styles.tagText,
                tag === 'voila' ? styles.voilaTagText : styles.rewardTagText
              ]}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.title}>{challenge.title}</Text>
        <Text style={styles.description}>{challenge.description}</Text>
        
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{challenge.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
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
  },
  voilaTag: {
    backgroundColor: Colors.chip,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  rewardTagText: {
    color: Colors.tagText,
  },
  voilaTagText: {
    color: Colors.textLight,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
});
