import React from 'react';
import {FlexContainer} from '../styled';
import {Title} from '../../containers/DetailsScreen/styled';
import {Recents} from '../home/sections/SectioRecent';
import {colors} from '../../library/constants/colors';
export const GalleryDetails = () => {
  return (
    <FlexContainer mt="-75px" h="185px">
      <Title h="40px" fontt="500" fonz="30px" top="-1px" color={colors.white} left="10px">
        Gallery
      </Title>
      <Recents imageName={false} />
    </FlexContainer>
  );
};
