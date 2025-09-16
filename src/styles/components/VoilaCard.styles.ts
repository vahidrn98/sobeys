import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 0,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    backgroundColor: '#00E5FF', // Bright cyan (more vibrant)
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.titleBold,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#000000',
    marginBottom: 20,
    lineHeight: 14,
  },
  carousel: {
    marginHorizontal: -20, // Extend to edges
  },
  carouselContent: {
    paddingHorizontal: 20,
  },
});
