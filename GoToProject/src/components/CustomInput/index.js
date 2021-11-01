import React from 'react';
import {FlexContainer, InputLabel, InputText} from '../styled';

export const CustomInput = ({...props}) => {
  return (
    <FlexContainer h="15%" alin>
      <InputLabel>{props.label}</InputLabel>
      <InputText />
    </FlexContainer>
  );
};
