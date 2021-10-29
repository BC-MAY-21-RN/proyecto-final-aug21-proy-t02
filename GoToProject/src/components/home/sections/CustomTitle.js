import React from 'react';
import {TitleText, FlexContainer} from '../../../components/styled';
import {colors} from '../../../library/constants/colors';
export const CustomTitle = ({text, mbt, top}) => {
  return (
    <FlexContainer mbt={mbt} h="45px" dir="row" jc="flex-start">
      <TitleText
        color={colors.blue}
        left="-2px"
        top={top}
        fontt="500"
        fonz="25px">
        {text}
      </TitleText>
    </FlexContainer>
  );
};
