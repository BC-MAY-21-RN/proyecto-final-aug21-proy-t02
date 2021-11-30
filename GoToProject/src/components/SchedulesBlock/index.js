import React,{useState} from 'react';
import { FlexContainer } from '../styled';
import { InputLabel } from '../styled';
import { ScheduleBox, SchedulesContainer, ScheduleTitle } from './styledComponent';

export const SchedulesBlock = () => {
  const [openHours,setOpenHours] = useState('');
  const [closingTime,setClosingTime] = useState('');
  return(
    <FlexContainer h="15%" dir="row" jc="space-between">
        <SchedulesContainer>
          <ScheduleTitle>Opening hours</ScheduleTitle>
          <ScheduleBox onChangeText={setOpenHours} value={openHours} />
        </SchedulesContainer>
        <InputLabel mr="20px"  top="50px"> to </InputLabel>
        <SchedulesContainer>
          <ScheduleTitle>Closing time</ScheduleTitle>
          <ScheduleBox onChangeText={setClosingTime} value={closingTime} />
        </SchedulesContainer>
    </FlexContainer>
  );
};
