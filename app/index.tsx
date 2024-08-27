import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Menghitung Mimpi
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#e5f2ff',
  },
  banner: {
    width: '100%',
    aspectRatio: 3 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 24,
    fontFamily: 'PTSans-Bold',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
});
