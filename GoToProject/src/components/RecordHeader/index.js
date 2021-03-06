import React from 'react';
import {FlexContainer, InputLabel} from '../styled';
import {colors} from '../../library/constants/colors';
import {BackButton} from '../BackButton';

export const RecordHeader = ({route,values, title}) => {
  return (
    <FlexContainer h="20%" dir="row">
      <BackButton route={route} values={values} />
      <InputLabel
        fonz="35px"
        color={colors.white}
        mr="150px"
        fontt="500"
        left="30px"
        ml="15px">
        {title}
      </InputLabel>
    </FlexContainer>
  );
};
