import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import {View, TouchableOpacity} from 'react-native';
import {colors} from '../../library/constants/colors';
export const CustomIcons = ({
  screen,
  name,
  showState,
  action,
  designIcon = {fontSize: 40,top:-15, color: colors.white},
  design = {
    backgroundColor: showState ? colors.white : 'transparent',
    left: -10,
    top:-16,
    width: 50,
    height: 3,
  },
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate(screen)}}>
      <Icon name={name} style={designIcon} />
      <View style={design}></View>
    </TouchableOpacity>
  );
};
