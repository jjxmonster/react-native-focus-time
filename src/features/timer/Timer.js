import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {spacing} from '../../utils/sizes'

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={{paddingTop:spacing.xxl}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  task: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
