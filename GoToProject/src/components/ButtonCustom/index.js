import React from 'react';
import { colors } from '../../library/constants/colors';
import {CustomButton, FlexContainer, TextButton} from '../styled';
import {useNavigation} from '@react-navigation/native';
export const ButtonCustom = ({onPress, ButtonRoute,color, ...props}) => {
  const navigation = useNavigation();
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

/*
<CustomButton br="3px solid #59bcf4;" w="100%" h="40%"     c={colors.black} onPress={handleSubmit} >
              <TextButton>Login</TextButton>
</CustomButton>*/