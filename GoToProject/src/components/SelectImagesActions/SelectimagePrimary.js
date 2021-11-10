import React from 'react';

import {colors} from '../../library/constants/colors';
import {
  ContainerImage,
  ImageButtons,
  ButtonAction,
} from '../../containers/SelectImagesSite /styled';
import { OpenGaleria } from '../../components/SelectImagesActions';
import {Image, Text} from 'react-native';

import { CustomIcon } from '../CustomIcon';
export const ShowPrimaryImage = ({state, value, def}) => {
  return (
<ContainerImage>
      <Image
        source={value ? {uri: value} : def}
        style={{borderRadius: 5, width: 330, height: 140}}
      />
      <ImageButtons>
        <ButtonAction onPress={() => OpenGaleria(state, true)}>
          <CustomIcon name="image" size={50} color={colors.white} />
        </ButtonAction>
        <ButtonAction onPress={() => OpenGaleria(state, false)}>
          <CustomIcon name="camera" size={50} color={colors.white} />
        </ButtonAction>
      </ImageButtons>
    </ContainerImage>

  )
};
