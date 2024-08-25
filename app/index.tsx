import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

import Container from '@/components/container';
import Text from '@/components/Text';

export default function HomeScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <Text>Home Screen</Text>

        <Link href="/setting">
          <View style={styles.button}>
            <Text>Setting</Text>
          </View>
        </Link>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#69afbe',
    paddingHorizontal: 48,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
});
