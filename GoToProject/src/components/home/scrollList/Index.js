import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TitleText} from '../../styled';
import {Image, TouchableOpacity} from 'react-native';
export const ScrollListItem = ({
  id_Image,
  UrlDetails,
  IdSites,
  url,
  desing = {width: 130, height: 130, margin: 5, borderRadius: 10},
  textImage,
  withsize = '120px',
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailsScreen', {
          "urlImage":UrlDetails,
          "idSite":IdSites,
          "id_images": id_Image,
        });
      }}>
      <Image style={desing} source={{uri: url}} />
      <TitleText fonz="20px" fontt="400" w={withsize} left="15px">
        {textImage}
      </TitleText>
    </TouchableOpacity>
  );
};
