import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Countdown } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

import { spacing } from '../../utils/sizes';

const DEFAULT_TIME = 0.1;
const PATTERN = [1000, 2000, 3000];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
   // keep app awake
   useKeepAwake();

   const [isStarted, setIsStarted] = useState(false);
   const [progress, setProgress] = useState(1);
   const [minutes, setMinutes] = useState(DEFAULT_TIME);

   const vibrateDevice = () => {
      if (Platform.OS === 'ios') {
         const interval = setInterval(() => Vibration.vibrate(), 1000);
         setTimeout(() => clearInterval(interval), 10000);
      } else {
         Vibration.vibrate(PATTERN);
      }
   };
   const onEnd = () => {
      vibrateDevice();
      setMinutes(DEFAULT_TIME);
      setProgress(1);
      setIsStarted(false);
      onTimerEnd();
   };
   const onProgress = progress => {
      setProgress(progress);
   };

   const changeTime = min => {
      setMinutes(min);
      setProgress(1);
      setIsStarted(false);
   };

   return (
      <View style={styles.container}>
         <View style={styles.countdown}>
            <Countdown
               minutes={minutes}
               isPaused={!isStarted}
               onProgress={onProgress}
               onEnd={onEnd}
            />
         </View>
         <View style={{ paddingTop: spacing.xxl }}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
         </View>
         <View style={{ paddingTop: spacing.sm }}>
            <ProgressBar
               progress={progress}
               color='#5E84E2'
               style={{
                  height: 10,
               }}
            />
         </View>

         <View style={styles.buttonWrapper}>
            <Timing onChangeTime={changeTime} />
         </View>
         <View style={styles.buttonWrapper}>
            {isStarted ? (
               <RoundedButton
                  title='pause'
                  onPress={() => setIsStarted(false)}
               />
            ) : (
               <RoundedButton
                  title='start'
                  onPress={() => setIsStarted(true)}
               />
            )}
         </View>
         <View style={styles.clearSubject}>
            <RoundedButton title='-' size={50} onPress={() => clearSubject()} />
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
   countdown: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
   },
   buttonWrapper: {
      flex: 0.3,
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },
   clearSubject: {
      paddingBottom: 25,
      paddingLeft: 25,
   },
});
