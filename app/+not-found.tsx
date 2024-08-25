import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

import Text from '@/components/Text';

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
