import React from 'react';
import {
  ButtonIcon,
  InputText,
  FlexContainer
} from '../../../components/styled';
import Icon from 'react-native-ionicons';
import {colors} from '../../../library/constants/colors';

export const Search = () => {
  return (
    <>
      <FlexContainer h="8%" dir="column" jc="space-between">
        <InputText
          h="100%"
          placeholder="  Search"
          placeholderTextColor={colors.lettersGray}
        />
        <ButtonIcon pt="20px" pl="310px">
          <Icon name="search" style={{fontSize: 30, color: colors.white}} />
        </ButtonIcon>
      </FlexContainer>
    </>
  );
};
