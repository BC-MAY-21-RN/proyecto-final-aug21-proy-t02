import React from 'react';
import {
    TitleText,
    FlexContainer,
  } from '../../../components/styled';
  import {ScrollView, View} from 'react-native';
  import images from '../../../library/images/images.json';
  import {colors} from '../../../library/constants/colors';
  import {ScrollListItem} from '../../../components/home/scrollList/Index';

export const Recents = () => {
  return (
    <FlexContainer h="225px" mbt="20px" mt="0px" aline="flex-start">
      <FlexContainer mbt="10px" h="45px" dir="row" jc="flex-start">
        <TitleText
          color={colors.blue}
          left="-2px"
          top="2px"
          fontt="500"
          fonz="25px">
          RECENT
        </TitleText>
      </FlexContainer>
      <FlexContainer h="220px" mbt="0px" mt="0px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {images?.map(value => {
            return (
              <View key={value.id}>
                <ScrollListItem url={value.url} textImage={value.name} />
              </View>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </FlexContainer>
  );
};
