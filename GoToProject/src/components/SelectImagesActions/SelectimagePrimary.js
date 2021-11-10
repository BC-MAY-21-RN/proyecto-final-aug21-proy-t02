import React from 'react';
import {
  ContainerImage,
  ImageButtons,
} from '../../containers/SelectImagesSite /styled';
import {Image} from 'react-native';
import {ButtonSelectImage} from './ButtonSelectImage';
export const ShowPrimaryImage = ({state, value, def}) => {
  return (
    <ContainerImage>
      <Image
        source={value ? {uri: value} : def}
        style={{borderRadius: 5, width: 330, height: 140}}
      />
      <ImageButtons>
        <ButtonSelectImage iconName="image" state={state} boolean={true} />
        <ButtonSelectImage iconName="camera" state={state} boolean={false} />
      </ImageButtons>
    </ContainerImage>
  );
};
