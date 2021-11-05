import React from 'react';
import {FlexContainer, TitleText} from '../styled';

const rateTitles = [
  {
    title: "Category",
  },
  {
    title: "Stars",
  },
  {
    title: "Schedules",
  },
];

const titlesList = rateTitles.map(titles => (
    <TitleText fonz="22px" key={titles.title}>{titles.title} </TitleText>    
  ));
export const PlaceDetails = () => {
    
  return (
    <FlexContainer h="400px" dir="row">
      <FlexContainer w="55%">
        <TitleText fonz="30px">Piedra Acampanada</TitleText>
        {titlesList}
      </FlexContainer>
      <FlexContainer w="45%">
        <TitleText>Rate icons</TitleText>
      </FlexContainer>
    </FlexContainer>
  );
};
