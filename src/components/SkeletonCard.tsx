import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { styles } from '../styles/components/SkeletonCard.styles';

interface SkeletonCardProps {
  width?: number;
  height?: number;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ 
  width, 
  height 
}) => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startShimmer = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startShimmer();
  }, [shimmerAnimation]);

  const shimmerStyle = {
    opacity: shimmerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0.7],
    }),
  };

  return (
    <View style={[styles.container, width && { width }, height && { height }]}>
      {/* Image skeleton */}
      <View style={styles.imageSkeleton} />
      
      {/* Content skeleton */}
      <View style={styles.content}>
        {/* Tags skeleton */}
        <View style={styles.tagsContainer}>
          <View style={[styles.tagSkeleton, styles.tagSkeletonSmall]} />
          <View style={[styles.tagSkeleton, styles.tagSkeletonMedium]} />
        </View>
        
        {/* Title skeleton */}
        <Animated.View style={[styles.titleSkeleton, shimmerStyle]} />
        
        {/* Description skeleton */}
        <View style={styles.descriptionContainer}>
          <Animated.View style={[styles.descriptionLine, styles.descriptionLineFull, shimmerStyle]} />
          <Animated.View style={[styles.descriptionLine, styles.descriptionLineMedium, shimmerStyle]} />
        </View>
        
        {/* Button skeleton */}
        <Animated.View style={[styles.buttonSkeleton, shimmerStyle]} />
      </View>
    </View>
  );
};
