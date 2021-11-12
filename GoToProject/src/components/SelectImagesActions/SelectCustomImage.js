import React from 'react';
import {ButtonAction} from '../../containers/SelectImagesSite /styled';
import {Image, View} from 'react-native';
import {CustomIcon} from '../CustomIcon';
import {OpenGaleria} from '.';
export const ImgCustom = ({state, value, def}) => {
  return (
    <View>
      <Image
        source={value ? {uri: value} : def}
        style={{borderRadius: 5, margin: 4, width: 74, height: 143}}
      />
      <ButtonAction
        w="60px"
        h="60px"
        left="0px"
        top="30px"
        pttn="absolute"
        onPress={() => OpenGaleria(state, true)}>
        <CustomIcon name="image" size={40} color="#fff" />
      </ButtonAction>
    </View>
  );
};
