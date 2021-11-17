import React from 'react';
import {SectionTitle} from './SectioTitle';
import {FlexContainer} from '../styled';
import {SelectStar} from './SelectStar';
import { Description } from './Description';
import { Price } from './Price';
import { GalleryDetails } from './GalleryDeatils';
export const PlaceDetails = ({title,description, categorie, schedulePm, scheduleAm}) => {
  return (
    <>
      <FlexContainer mt="2px" h="205px">
        <SectionTitle title={title} categorie={categorie} />
      </FlexContainer>
      <SelectStar start={scheduleAm} close={schedulePm} />
      <Description description={description}/>
      <Price />
      <GalleryDetails />
      
    </>
  );
};
