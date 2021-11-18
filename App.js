import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <>
          <Text>{focusSubject}</Text>
    
        </>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
});
