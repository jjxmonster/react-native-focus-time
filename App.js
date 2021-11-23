import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { FocusHistory } from './src/features/focus/FocusHistory';

import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };
  const onTimerEnd = () => {
    addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
    setFocusSubject(null);
  };
  const onCancelled = () => {
    setFocusSubject(null);
    addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED);
  };
  const onClear = () => {
    setFocusHistory([])
  };
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <>
          <Timer
            focusSubject={focusSubject}
            onTimerEnd={onTimerEnd}
            clearSubject={onCancelled}
          />
        </>
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
});
