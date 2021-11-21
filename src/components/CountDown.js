import React, { useState, useEffect, useRef } from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 0.1, isPaused, onProgress }) => {
   const [millis, setMillis] = useState(null);

   const interval = useRef(null);

   const countDown = () => {
      setMillis(time => {
         if (time === 0) {
            return time;
         }
         const timeLeft = time - 1000;
         onProgress(timeLeft / minutesToMillis(minutes));
         return timeLeft;
      });
   };

   const minute = Math.floor((millis / 1000 / 60) % 60);
   const seconds = Math.floor((millis / 1000) % 60);

   useEffect(() => {
      setMillis(minutesToMillis(minutes));
   }, [minutes]);
   useEffect(() => {
      if (isPaused) {
         if (interval.current) clearInterval(interval.current);
         return;
      }

      interval.current = setInterval(countDown, 1000);

      return () => clearInterval(interval.current);
   }, [isPaused]);

   return (
      <Text style={styles.text}>
         {formatTime(minute)}:{formatTime(seconds)}
      </Text>
   );
};

const styles = StyleSheet.create({
   text: {
      fontSize: fontSizes.xxxl,
      fontWeight: 'bold',
      color: '#fff',
      padding: spacing.lg,
      backgroundColor: 'rgba(94,132,225,0.2)',
   },
});
