import React from 'react';
import { FlexContainer,TitleText  } from '../styled';
import { DetailsText, Point } from '../../containers/DetailsScreen/styled';

export const Description = ({description}) => {
  return (
    <FlexContainer h="270px" mbt="80px">
      <TitleText fonz="30px" fontt="500" left="30px">
        Details
      </TitleText>
      <Point />
      <DetailsText>{description}</DetailsText>
    </FlexContainer>
  );
};
