import React from 'react';
import {TitleText} from '../../styled';
import {Image, TouchableOpacity} from 'react-native';

export const ScrollListItem = ({
  url,
  desing = {width: 130, height: 130, margin: 5, borderRadius: 10},
  textImage,
  withsize = '120px',
}) => {
  return (
    <TouchableOpacity>
      <Image style={desing} source={{uri: url}} />
      <TitleText fonz="20px" fontt="400" w={withsize} left="15px">
        {textImage}
      </TitleText>
    </TouchableOpacity>
  );
};
