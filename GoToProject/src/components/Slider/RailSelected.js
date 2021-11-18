import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import { colors } from '../../library/constants/colors';
const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 18,
    backgroundColor: colors.blue,
    borderRadius: 18,
  },
});
