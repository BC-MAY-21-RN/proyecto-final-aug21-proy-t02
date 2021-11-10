import React from 'react';
import {FlexContainer, TitleText} from '../styled';
import Icon from 'react-native-ionicons';
import {colors} from '../../library/constants/colors';

const rateTitles = [
  {
    title: 'Category',
  },
  {
    title: 'Stars',
  },
  {
    title: 'Schedules',
  },
];

const reactionIcons = [
  {name: 'star'},
  {name: 'eye'},
  {name: 'heart'},
];
const titlesList = rateTitles.map(titles => (
  <TitleText fonz="22px" key={titles.title}>
    {titles.title} </TitleText>
));

const iconList = reactionIcons.map(names => ( 
    <Icon key={names.name} name={names.name} size={30} color={colors.white} />
));
export const PlaceDetails = () => {
  return (
    <FlexContainer h="400px" dir="row" alin >
      <FlexContainer w="55%">
        <TitleText fonz="30px">Piedra Acampanada</TitleText>
        {titlesList}
      </FlexContainer>
      <FlexContainer h="65%" w="45%">
        {iconList}
      </FlexContainer>
    </FlexContainer>
  );
};
