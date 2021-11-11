import React from 'react';
import { colors } from '../../library/constants/colors';
import {ContainerSpiner, Title, RowSpiner} from './styled';
import { ActivityIndicator} from 'react-native';
export const Spiner = () => {
  return (
    <ContainerSpiner>
      <RowSpiner>
      <ActivityIndicator size={60} color={colors.white} />
        <Title>Signing up..</Title>
      </RowSpiner>
    </ContainerSpiner>
  );
};
