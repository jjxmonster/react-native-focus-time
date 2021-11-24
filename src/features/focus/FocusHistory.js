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
                        width: '90vw',
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
                           style={{ background: '#5E84E2' }}
                           title={item.subject}
                           titleStyle={{
                              color: 'white',
                              fontSize: '20px',
                           }}
                        />
                     ))}
                     <TouchableOpacity onPress={() => onClear()}>
                        <List.Item
                           style={{
                              background: 'red',
                              height: '50px',
                              padding: 0,
                              alignItems: 'center',
                              justifyContent: 'center',
                           }}
                           title={'CLEAR'}
                           titleStyle={{
                              color: 'white',
                              fontSize: '15px',
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
