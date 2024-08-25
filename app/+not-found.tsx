import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>
          Oops! The page you are looking for doesn't exist.
        </Text>
        <Link href="/">Go to home screen</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
