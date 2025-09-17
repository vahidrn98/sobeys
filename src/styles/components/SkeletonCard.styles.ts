import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
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
    width: '100%',
  },
  imageSkeleton: {
    height: 150,
    backgroundColor: '#E0E0E0',
  },
  content: {
    padding: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8,
  },
  tagSkeleton: {
    height: 24,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
  },
  tagSkeletonSmall: {
    width: 40,
  },
  tagSkeletonMedium: {
    width: 60,
  },
  titleSkeleton: {
    height: 22,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 8,
    width: '80%',
  },
  descriptionContainer: {
    marginBottom: 16,
    gap: 6,
  },
  descriptionLine: {
    height: 14,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  descriptionLineFull: {
    width: '100%',
  },
  descriptionLineMedium: {
    width: '70%',
  },
  buttonSkeleton: {
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 24,
    width: 120,
  },
});
