import React from 'react';
import {FlexContainer, InputLabel, InputText} from '../styled';

export const CustomInput = ({label}) => {
  return (
    <FlexContainer h="15%" alin>
      <InputLabel>{label}</InputLabel>
      <InputText />
    </FlexContainer>
  );
};
