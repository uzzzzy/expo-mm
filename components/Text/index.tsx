import { StyleSheet, Text as TextComponent, TextProps } from 'react-native';

import Fonts from '@/constants/fonts';

export default function Text({ style = {}, ...props}: TextProps & { style: Object }) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: Fonts.PTSans.Regular,
    },
  });

  return (
    <TextComponent style={[styles.text, style]} {...props} />
  );
}