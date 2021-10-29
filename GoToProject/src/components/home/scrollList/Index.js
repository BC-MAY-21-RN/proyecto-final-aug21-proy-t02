import React from 'react';
import {TitleText} from '../../styled';
import {Image, TouchableOpacity} from 'react-native';

export const ScrollListItem = ({
  url,
  desing = {width: 130, height: 130, margin: 9, borderRadius: 10},
  textImage,
  withsize = '150px',
}) => {
  return (
    <TouchableOpacity>
      <Image style={desing} source={{uri: url}} />
      <TitleText fonz="20px" w={withsize} left="15px">
        {textImage}
      </TitleText>
    </TouchableOpacity>
  );
};
