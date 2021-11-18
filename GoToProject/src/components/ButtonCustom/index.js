import React from 'react';
import {CustomButton, FlexContainer, TextButton} from '../styled';
import {useNavigation} from '@react-navigation/native';
export const ButtonCustom = ({onPress, ButtonRoute, ...props}) => {
  const navigation = useNavigation();
  return (
    <FlexContainer h={props.h} mt={props.mt} mbt={props.mbt}>
      <CustomButton
        // onPress={() =>navigation.navigate(ButtonRoute)}
        onPress={onPress}
        h={props.hb}>
        <TextButton>{props.text}</TextButton>
      </CustomButton>
    </FlexContainer>
  );
};
