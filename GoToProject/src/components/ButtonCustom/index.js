import React from 'react';
import { colors } from '../../library/constants/colors';
import {CustomButton, FlexContainer, TextButton} from '../styled';
export const ButtonCustom = ({onPress, ButtonRoute,color, ...props}) => {
  return (
    <FlexContainer h={props.h} mt={props.mt} mbt={props.mbt}>
      <CustomButton
       br="3px solid #59bcf4;"
       c={color? colors.black:colors.blue}
        onPress={onPress}
        h={props.hb}>
        <TextButton>{props.text}</TextButton>
      </CustomButton>
    </FlexContainer>
  );
};
