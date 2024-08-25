import Colors from '@/constants/colors';
import Fonts from '@/constants/fonts';
import { isLoaded } from 'expo-font';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '@/components/Text';

export default function Container({ children }: { children: React.ReactNode }) {

  const insets = useSafeAreaInsets()

  console.log('SpaceMono: ', isLoaded('SpaceMono'));

  return (
    <View style={{ flex: 1, paddingTop: insets.top + 8 }}>
      <View style={styles.header}>
        <View/>
        <Text style={styles.title}>
          Setting
        </Text>
        <View />
      </View>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary300,
    paddingHorizontal: 24,
  },
  header: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24
  },
});