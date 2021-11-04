import React from 'react';
import { FlexContainer } from '../styled';
import { InputLabel } from '../styled';
import { InputText } from '../styled';
import { ScheduleBox, SchedulesContainer, ScheduleTitle } from './styledComponent';
import { CustomInput } from '../CustomInput';

export const SchedulesBlock = () => {
  return(
    <FlexContainer h="15%" dir="row" jc="space-between">
        <SchedulesContainer>
          <ScheduleTitle>Opening hours</ScheduleTitle>
          <ScheduleBox></ScheduleBox>
        </SchedulesContainer>
        <SchedulesContainer>
          <ScheduleTitle>Closing time</ScheduleTitle>
          <ScheduleBox></ScheduleBox>
        </SchedulesContainer>
    </FlexContainer>
  );
};
