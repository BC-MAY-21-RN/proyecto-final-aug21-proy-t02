import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RowButtons, Buttons} from '../../containers/DetailsScreen/styled';
import {colors} from '../../library/constants/colors';
import {CustomIcon} from '../CustomIcon';
export const ImgButtos = () => {
  const navigation = useNavigation();
  return (
    <RowButtons>
      <Buttons
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <CustomIcon name="arrow-back" size={40} color={colors.white} />
      </Buttons>
      <Buttons>
        <CustomIcon name="heart" size={35} color={colors.white} />
      </Buttons>
    </RowButtons>
  );
};
