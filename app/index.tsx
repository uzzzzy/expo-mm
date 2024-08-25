import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';

import Container from '@/components/container';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'PTSans': require('../assets/fonts/PTSans.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <View style={styles.container}>
        <Text>Home</Text>

        <Link href="/setting">
          <Text>Setting</Text>
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
});
