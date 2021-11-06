import React from 'react';
import {BackButtonContainer} from './styledComponent';
import {colors} from '../../library/constants/colors';
import { CustomIcon } from '../CustomIcon';

export const BackButton = () => {
  return (
    <BackButtonContainer>
     <CustomIcon name="arrow-back" size={38} left={10} color={colors.white} />
    </BackButtonContainer>
  );
};
