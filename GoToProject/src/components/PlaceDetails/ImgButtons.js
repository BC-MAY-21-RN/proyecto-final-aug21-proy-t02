import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RowButtons, Buttons} from '../../containers/DetailsScreen/styled';
import {colors} from '../../library/constants/colors';
import {CustomIcon} from '../CustomIcon';
import { addSites } from '../../library/methods/favoritesSites';

export const ImgButtos = ({dataDetails , urlImage}) => {
  const { title, description, stars } = dataDetails;
  const navigation = useNavigation();
  const img = urlImage;
  const handleHeart = () => {
    addSites(title, description, stars, img);
    navigation.navigate('Home');
  };
  return (
    <RowButtons>
      <Buttons
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <CustomIcon name="arrow-back" size={40} color={colors.white} />
      </Buttons>
      <Buttons onPress = { handleHeart }>
        <CustomIcon name="heart" size={35} color={colors.white} />
      </Buttons>
    </RowButtons>
  );
};
