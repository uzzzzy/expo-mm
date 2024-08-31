import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryIcon from './components/button/icons/primary';

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
        <View style={styles.card}>
          <View style={styles.menu}>
            <PrimaryIcon title="Kalkulator Investasi" icon={'calculator'} to="kalkulator-investasi" />
          </View>
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
    aspectRatio: 6 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  bannerText: {
    fontSize: 32,
    fontFamily: 'Poppins-Thin',
  },
  container: {
    flex: 1,
    position: 'relative',
  },

  card: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    backgroundColor: '#ffffff',
  },
  menu: {
    flexDirection: 'row',
  },

});
