import React from 'react';
import { colors } from '../../library/constants/colors';
import {FlexContainer} from '../styled';
import {
  Title,
  BoxSelect,
  BoxSchedules,
} from '../../containers/DetailsScreen/styled';
import {SliderScreen} from '../screens/Slider/index';

export const SelectStar = ({start, close}) => {
  return (
    <FlexContainer mt="0px" h="205px">
      <FlexContainer mbt="0px" dir="row" w="200px" mt="20px" h="35px">
        <Title h="130px" left="-60px" fonz="30px" fontt="500" top="22px" >
          Stars
        </Title>
      </FlexContainer>
      <BoxSelect>
        <SliderScreen />
      </BoxSelect>
      <BoxSchedules>
        <Title h="36px" fonz="30px" fontt="500"  >
          Schedules
        </Title>
        <Title h="30px" color={colors.lettersGray} left="80px" top="4px" fontt="300" fonz="21px">
        {start} 
        </Title>
        <Title h="30px" color={colors.lettersGray} left="80px" top="-2px" fontt="300" fonz="21px">
          {close} 
        </Title>
      </BoxSchedules>
    </FlexContainer>
  );
};
