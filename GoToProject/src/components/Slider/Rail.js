import React, { memo } from 'react';
import { colors } from '../../library/constants/colors';
import { View, StyleSheet } from 'react-native';

const Rail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 18,
    borderRadius: 18,
    backgroundColor: colors.darkGray,
  },
});
