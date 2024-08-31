import { useRef, useState } from 'react';
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function KalkulatorInvestasiScreen() {
  const [target, setTarget] = useState<string>('0');
  const [form, setForm] = useState<{
    target: number,
  }>({
    target: 0,
  });
  const insets = useSafeAreaInsets();

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>, key: string) => {
    let value = e.nativeEvent.text;

    
    value = value.replace(/[^0-9]/g, '');
    
    value = value.replace(/,/g, '.');
    
    if (value.length > 1) {
      value = value.replace(/^0+/, '');
    }

    if (value.length > 0) {
      setForm(prev => ({ ...prev, target: parseInt(value) }));
      value = value.replace(/\./g, '');
      value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
      value = '0';
    }
  }

  return (
    <View style={{
      paddingTop: insets.top + 24,
      paddingHorizontal: 24,
      paddingBottom: 32,
      backgroundColor: '#e5f2ff',
      flex: 1,
    }}>
      <Text>Jumlah uang yang ingin kamu capai</Text>
      <TextInput 
        style={{
          borderBottomWidth: 0.5,
          width: '50%',
        }}
        keyboardType="numeric"
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => onChange(e, 'investasi')}
        value={target}
      />

      <Text>
        {target}
      </Text>
    </View>
  );
}
