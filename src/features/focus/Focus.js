import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';

import { fontSizes, spacing } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
   const [subject, setSubject] = useState(null);

   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <View style={styles.inputContainer}>
               <TextInput
                  label='What would you like to focus on?'
                  onChangeText={setSubject}
                  style={styles.input}
               />
               <RoundedButton
                  title='+'
                  size={50}
                  onPress={() => addSubject(subject)}
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
      padding: spacing.md,
      justifyContent: 'center',
   },
   title: {
      color: 'white',
      fontSize: fontSizes.lg,
      fontWeight: 'bold',
      marginBottom: 15,
   },
   input: {
      backgroundColor: 'white',
      flex: 1,
      marginRight: spacing.md,
   },
   inputContainer: {
      alignItems: 'center',
      flexDirection: 'row',
   },
});
