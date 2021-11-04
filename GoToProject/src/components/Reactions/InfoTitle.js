import React from 'react';

import {
  TitleCart,
  TouchableOpacity,
} from '../../containers/Reactions/styled';

import { InfoTitle } from '../../containers/Reactions/styled';
import {colors} from '../../library/constants/colors';
import Icon from 'react-native-ionicons';

export const InfoTitleCart = ({name}) => {
  return (
    <InfoTitle w="190px" h="60px" dir="row" jc="space-between">
      <TitleCart>
        {name}
      </TitleCart>
      <TouchableOpacity>
        <Icon name="heart" style={{fontSize: 23, color: colors.white}} />
      </TouchableOpacity>
    </InfoTitle>
  );
};
