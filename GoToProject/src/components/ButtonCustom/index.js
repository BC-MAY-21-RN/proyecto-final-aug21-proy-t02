import React from 'react';
import {CustomButton, FlexContainer, TextButton} from '../styled';
import {useNavigation} from '@react-navigation/native';
export const ButtonCustom = ({ButtonRoute, ...props}) => {
  const navigation = useNavigation();
  return (
    <FlexContainer h={props.h} mt={props.mt}>
      <CustomButton
        onPress={() =>navigation.navigate(ButtonRoute)}
        h="45%">
        <TextButton>{props.text}</TextButton>
      </CustomButton>
    </FlexContainer>
  );
};
