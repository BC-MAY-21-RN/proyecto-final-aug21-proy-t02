import React from 'react';
import Icon from 'react-native-ionicons';
import {View, TouchableOpacity} from 'react-native';
import {colors} from '../../library/constants/colors';
export const CustomIcons = ({
  name,
  showState = false,
  action,
  designIcon = {fontSize: 40,top:-15, color: colors.white},
  design = {
    backgroundColor: showState ? colors.white : 'transparent',
    left: -9,
    top:-15,
    width: 50,
    height: 5,
  },
}) => {
  return (
    <TouchableOpacity>
      <Icon name={name} style={designIcon} />
      <View style={design}></View>
    </TouchableOpacity>
  );
};
