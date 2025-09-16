import { Colors, Fonts } from "../../constants/colors";

export const screenOptions = {
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.textSecondary,
    tabBarStyle: {
      backgroundColor: Colors.background,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
    },
    tabBarIndicatorStyle: {
      backgroundColor: Colors.primary,
      height: 3,
    },
    tabBarLabelStyle: {
      fontSize: 16,
      fontFamily: Fonts.medium,
      textTransform: 'none',
    },
    tabBarScrollEnabled: true,
    tabBarItemStyle: {
      width: 140,
      paddingHorizontal: 0,
    },
    tabBarContentContainerStyle: {
      paddingHorizontal: 16,
    },
  }