import React from 'react';
import { FlexContainer } from '../styled';
import { InputLabel } from '../styled';
import { ScheduleBox, SchedulesContainer, ScheduleTitle } from './styledComponent';

export const SchedulesBlock = () => {
  return(
    <FlexContainer h="15%" dir="row" jc="space-between">
        <SchedulesContainer>
          <ScheduleTitle>Opening hours</ScheduleTitle>
          <ScheduleBox></ScheduleBox>
        </SchedulesContainer>
        <InputLabel
          mr="20px"
          top="50px">
            to
        </InputLabel>
        <SchedulesContainer>
          <ScheduleTitle>Closing time</ScheduleTitle>
          <ScheduleBox></ScheduleBox>
        </SchedulesContainer>
    </FlexContainer>
  );
};
