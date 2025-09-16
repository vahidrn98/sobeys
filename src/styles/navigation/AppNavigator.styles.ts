import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.titleBold,
    color: Colors.textLight,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    backgroundColor: Colors.background,
  },
});
