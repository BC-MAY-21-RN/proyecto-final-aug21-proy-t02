import React, { memo } from 'react';
import { colors } from '../../library/constants/colors';
import { View, StyleSheet } from 'react-native';

const THUMB_RADIUS = 15;

const Thumb = () => {
  return (
    <View style={styles.root}/>
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor:colors.blue,
    backgroundColor:colors.blue,
  },
});

export default memo(Thumb);
