import React from 'react';
import {CartInfoBox, TitleDescription} from '../../containers/Reactions/styled';
import {InfoTitleCart} from './InfoTitle';
import {colors} from '../../library/constants/colors';
export const CartInfo = ({title, description}) => {
  return (
    <CartInfoBox h="100%" w="60%" dir="column" jc="space-between">
      <InfoTitleCart name={title}/>
      <TitleDescription
        h="55px"
        fontt="400"
        color={colors.lettersGray}
        w="200px"
        top="-2px"
        left="-5px"
        fonz="14px">
        {description}
      </TitleDescription>
    </CartInfoBox>
  );
};
