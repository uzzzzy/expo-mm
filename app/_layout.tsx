import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

import Text from '@/components/Text';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'PTSans': require('../assets/fonts/PTSans.ttf'),
    'PTSans-Bold': require('../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-BoldItalic': require('../assets/fonts/PTSans-BoldItalic.ttf'),
    'PTSans-Italic': require('../assets/fonts/PTSans-Italic.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  if (error) {
    return <Text>Error loading fonts: </Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: 'ios' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="setting/index"  />
    </Stack>
  );
}
