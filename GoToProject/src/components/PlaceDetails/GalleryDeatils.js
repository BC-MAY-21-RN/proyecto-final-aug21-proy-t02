import React, {useEffect,useState} from 'react';
import {FlexContainer} from '../styled';
import {Title} from '../../containers/DetailsScreen/styled';

import {colors} from '../../library/constants/colors';
import { getAllImages } from '../../library/methods/firebasegetimagesSIte';
import { SectionDetails } from '../home/sections/SectionDetails';
export const GalleryDetails = ({id_images}) => {
  const [images,setImages]= useState([]);
  useEffect(() => {
    getAllImages(id_images,setImages);
  
  }, [id_images])
  return (
    <FlexContainer mt="-45px" h="255px">
      <Title h="40px" fontt="500" fonz="30px" top="-1px" color={colors.white} left="10px">
        Gallery
      </Title>
      <SectionDetails images={images}/>
    </FlexContainer>
  );
};
