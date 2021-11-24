import React from 'react';
import {
   View,
   StyleSheet,
   FlatList,
   Text,
   SafeAreaView,
   TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-paper';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

export const FocusHistory = ({ focusHistory, onClear }) => {
   const clearHistory = () => {
      onClear();
   };
   return (
      <>
         <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
            {focusHistory.length > 0 && (
               <>
                  <List.Accordion
                     style={{
                        width: 300,
                     }}
                     title="Things we've focused on"
                     titleStyle={{ color: '#5E84E2' }}
                  >
                     {focusHistory.map(item => (
                        <List.Item
                           key={item.key}
                           left={props => (
                              <List.Icon
                                 {...props}
                                 icon={item.status > 1 ? 'close' : 'check-bold'}
                                 color={item.status > 1 ? 'red' : 'green'}
                              />
                           )}
                           style={{ backgroundColor: '#5E84E2' }}
                           title={item.subject}
                           titleStyle={{
                              color: 'white',
                              fontSize: 20,
                           }}
                        />
                     ))}
                     <TouchableOpacity onPress={clearHistory}>
                        <List.Item
                           style={{
                              backgroundColor: 'red',
                              height: 50,
                              padding: 0,
                              alignItems: 'center',
                              justifyContent: 'center',
                           }}
                           title={'CLEAR'}
                           titleStyle={{
                              color: 'white',
                              fontSize: 15,
                           }}
                        />
                     </TouchableOpacity>
                  </List.Accordion>
               </>
            )}
         </SafeAreaView>
      </>
   );
};
