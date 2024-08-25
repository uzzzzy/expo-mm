import {
  Animated,
  StyleSheet,
  TextInput as TextInputComponent,
  TextInputProps,
  View,
} from 'react-native';

import Colors from '@/constants/colors';
import { useRef } from 'react';

export default function TextInput({
  style = {},
  ...props
}: TextInputProps & { style?: Object }) {

  const animated = useRef(new Animated.Value(1)).current;

  const styles = StyleSheet.create({
    textInput: {
      fontSize: 24,
      width: '100%',
      color: Colors.alternate950,
      backgroundColor: Colors.white,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
  });

  const onFocus = () => {
    console.log('focus');
    Animated.timing(animated, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const onBlur = () => {
    console.log('blur');
    Animated.timing(animated, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: Colors.white,
        borderRadius: 8,
        paddingVertical: 16,
      }}
    >
      <TextInputComponent
        style={[styles.textInput, style]}
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <Animated.Text
        style={{
          position: 'absolute',
          paddingHorizontal: 4,
          fontSize: 24,
          top: 8 + 16,
          left: 16,
          color: Colors.alternate950,
          transform: [
            {
              translateY: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [-(24), 0],
              }),
            },
            {
              translateX: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [-(24), 0],
              }),
            },
            {
              scale: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [0.6, 1],
              }),
            },
          ],
        }}
      >
        {props.placeholder}
      </Animated.Text>
      <View
        pointerEvents="none"
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            marginTop: 16,
            borderWidth: 1,
            margin: 8,
            flex: 1,
          }}
        />
        <Animated.Text
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 4,
            position: 'absolute',
            fontSize: 24,
            top: 8 + 16,
            left: 16,
            color: Colors.alternate950,
            transform: [
              {
                translateY: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-(24), 0],
                }),
              },
              {
                translateX: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-(24), 0],
                }),
              },
              {
                scale: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.6, 1],
                }),
              },
            ],
          }}
        >
          {props.placeholder}
        </Animated.Text>
      </View>
    </View>
  );
}
