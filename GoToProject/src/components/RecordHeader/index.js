import React from 'react';
import { FlexContainer, InputLabel } from '../styled';
import { colors } from '../../library/constants/colors';
import { BackButton } from '../BackButton';

export const RecordHeader = ({title}) =>{
  return(
    <FlexContainer
        h="20%"
        dir="row">
          <BackButton></BackButton>
          <InputLabel
            fonz="35px"
            color={colors.white}
            mr="150px"
            ml="20px">
            {title}
          </InputLabel>
      </FlexContainer>
  );
};
