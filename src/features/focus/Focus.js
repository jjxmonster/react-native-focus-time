import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            label="What would you like to focus on?"
            onChangeText={setTempItem}
            style={styles.input}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(tempItem)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    marginRight: 20,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
