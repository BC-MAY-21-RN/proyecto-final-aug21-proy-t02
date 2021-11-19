import React from 'react';
import { colors } from '../../library/constants/colors';
import {FlexContainer, InputLabel, InputText} from '../styled';


export const CustomInput = ({
  label,
  name,
  onChangeText,
  value,
  hasErrors,
  hasTouched,
  secureTextEntry
}) => {
  return (
    <FlexContainer h="15%" alin mbt="0" jc="center">
      <InputLabel>
        {label}</InputLabel>
      <InputText 
        onChangeText={onChangeText}
        value={value}
        name={name}
        secureTextEntry={secureTextEntry}/>
      {hasErrors && hasTouched ? (
        <InputLabel top="0px" color={colors.red}>
          {hasErrors}
        </InputLabel>
      ) : null}
    </FlexContainer>
  );
};
