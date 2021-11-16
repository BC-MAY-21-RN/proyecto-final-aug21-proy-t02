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
}) => {
  return (
    <FlexContainer h="15%" alin>
      <InputLabel>
        {label}</InputLabel>
      <InputText 
        onChangeText={onChangeText}
        value={value}
        name={name}/>
      {hasErrors && hasTouched ? (
        <InputLabel top="10px" color={colors.red}>
          {hasErrors}
        </InputLabel>
      ) : null}
    </FlexContainer>
  );
};
