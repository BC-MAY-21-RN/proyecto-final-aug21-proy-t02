import React from 'react';
import {ButtonAction} from '../../containers/SelectImagesSite/styled';
import {OpenGaleria} from '../../components/SelectImagesActions';
import {colors} from '../../library/constants/colors';
import {CustomIcon} from '../CustomIcon';
export const ButtonSelectImage = ({iconName, state, boolean}) => {
  return (
    <ButtonAction onPress={() => OpenGaleria(state, boolean)}>
      <CustomIcon name={iconName} size={50} color={colors.white} />
    </ButtonAction>
  );
};
