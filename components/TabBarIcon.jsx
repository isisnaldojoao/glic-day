import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function TabBarIcon({ name, size, color }) {
  return (
    <FontAwesome name={name} size={size} color={color} style={styles.tabBarIcon} />
  );
}

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});