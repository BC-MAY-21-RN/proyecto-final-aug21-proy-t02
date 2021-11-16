import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackButtonContainer} from './styledComponent';
import {colors} from '../../library/constants/colors';
import {CustomIcon} from '../CustomIcon';

export const BackButton = ({route}) => {
  const navigation = useNavigation();
  return (
    <BackButtonContainer
      onPress={() => {
        navigation.navigate(route);
      }}>
      <CustomIcon name="arrow-back" size={38} left={10} color={colors.white} />
    </BackButtonContainer>
  );
};
