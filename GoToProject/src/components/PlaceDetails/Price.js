import React from 'react';
import {FlexContainer} from '../styled';
import {BoxPrice, PriceLine, Title, TitlePrice} from '../../containers/DetailsScreen/styled';
import {CustomIcon} from '../CustomIcon';
import {colors} from '../../library/constants/colors';
export const Price = ({data}) => {
  return (
    <FlexContainer
      dir="row" jc="space-between" h="60px" mt="-15px" mbt="80px">
      <BoxPrice>
        <Title h="40px" fontt="400" fonz="20px" top="10px" color={colors.lettersGray} left="15px">
          <CustomIcon name="call" size={25} color={colors.white} /> {data.phone}
        </Title>
      </BoxPrice>
      <BoxPrice w="auto">
      <TitlePrice h="50px" fontt="600" fonz="40px" top="-2px" color={colors.white}>
          $ {data.coust}
        </TitlePrice>
        <PriceLine />
      </BoxPrice>
    </FlexContainer>
  );
};
