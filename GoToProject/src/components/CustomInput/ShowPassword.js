import React from 'react';
import {ButtonIcon} from '../styled';
import Icon from 'react-native-ionicons';
import {colors} from '../../library/constants/colors';
export const ShowPassword = ({showPassword, action })=> {
  return (
    <ButtonIcon pl="88%" pt="45px" onPress={action}>
      <Icon
        name={showPassword ? 'eye-off' : 'eye'}
        style={{fontSize: 30, color: colors.lettersGray}}
      />
    </ButtonIcon>
  );
};
