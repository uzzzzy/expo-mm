import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function PrimaryIcon({
  title = 'Title',
  icon = 'add',
  to,
}: {
  title?: string;
  icon?: any;
  to?: string;
}) {

  return (
    <Link href={to || ''}>
      <View style={styles.container}>
        <View style={styles.icon} >
          <Ionicons name={icon} size={24} color="#ffffff" />
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 76,
    padding: 8,
    backgroundColor: '#ffffff',
  },
  icon: {
    padding: 4,
    aspectRatio: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f4cff',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginTop: 8,
  },
});