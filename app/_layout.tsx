import { Text } from "react-native";

import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    // PTSans
    'PTSans': require('./assets/fonts/PTSans.ttf'),
    'PTSans-Bold': require('./assets/fonts/PTSans-Bold.ttf'),
    'PTSans-BoldItalic': require('./assets/fonts/PTSans-BoldItalic.ttf'),
    'PTSans-Italic': require('./assets/fonts/PTSans-Italic.ttf'),
    // Poppins
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  if (error) {
    return <Text>Error loading fonts: </Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: 'default' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="setting/index"  />
      <Stack.Screen name="kalkulator-investasi/index"  />
    </Stack>
  );
}
