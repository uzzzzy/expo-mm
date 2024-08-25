import Colors from '@/constants/colors';
import Fonts from '@/constants/fonts';
import { isLoaded } from 'expo-font';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '@/components/Text';
import { StatusBar } from 'expo-status-bar';

export default function Container({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.statusBar, { paddingTop: insets.top }]} />
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View />
          <Text style={styles.title}>Setting</Text>
          <View />
        </View>
        <View style={styles.container}>{children}</View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Colors.primary900,
  },
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
    fontSize: 24,
  },
});
