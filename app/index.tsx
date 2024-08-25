import { View, StyleSheet } from 'react-native';

import Container from '@/components/container';
import TextInput from '@/components/TextInput';
import { useState } from 'react';

export default function HomeScreen() {
  const [target, setTarget] = useState<number>(0);

  const handleChange = (value: string) => {
    value = value.replace(/[^0-9]/g, '');

    setTarget(value ? parseInt(value) : 0);
  };

  const formattedTarget = target.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    currencySign: 'accounting',
  });

  return (
    <Container>
      <View style={styles.container}>
        <TextInput
          keyboardType="numeric"
          placeholder="Username"
          onChangeText={handleChange}
          value={formattedTarget}
          style={{
            textAlign: 'right',
          }}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Password"
          onChangeText={handleChange}
          value={formattedTarget}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#69afbe',
    paddingHorizontal: 48,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
});
