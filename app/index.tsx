import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import * as Font from 'expo-font';

import Container from '@/components/container';

export default function HomeScreen() {
  console.log('SpaceMono: ', Font.isLoaded('SpaceMono'));
  console.log('PTSans: ', Font.isLoaded('PTSans'));

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
