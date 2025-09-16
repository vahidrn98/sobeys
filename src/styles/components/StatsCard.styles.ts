import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  title: {
    color: Colors.textLight,
    fontSize: 13,
    fontFamily: Fonts.bold,
    marginTop: 8,
    textAlign: 'center',
  },
  value: {
    color: Colors.textLight,
    fontSize: 18,
    fontFamily: Fonts.regular,
    marginTop: 4,
  },
});
