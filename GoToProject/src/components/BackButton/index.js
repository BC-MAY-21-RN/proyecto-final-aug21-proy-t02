import React from 'react';
import {BackButtonContainer} from './styledComponent';
import {colors} from '../../library/constants/colors';
export const BackButton = () => {
  return (
    <BackButtonContainer>
      <CustomIco name="arrow-back" size="30" color={colors.white} />
    </BackButtonContainer>
  );
};
