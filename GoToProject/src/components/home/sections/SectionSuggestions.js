import React from 'react';
import {TitleText, FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import images from '../../../library/images/images.json';
import {colors} from '../../../library/constants/colors';
import {ScrollListItem} from '../../../components/home/scrollList/Index';

export const Suggestions = () => {
  return (
    <FlexContainer h="380px" mbt="0px" mt="15px" aline="flex-start">
      <FlexContainer mbt="-50px" h="45px" dir="row" jc="flex-start">
        <TitleText
          color={colors.blue}
          left="-2px"
          top="8px"
          fontt="500"
          fonz="25px">
          SUGGESTIONS
        </TitleText>
      </FlexContainer>
      <FlexContainer h="500px" mbt="0px" mt="0px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {images?.map(value => {
            return (
              <View key={value.id}>
                <ScrollListItem
                  withsize="200px"
                  desing={{
                    width: 200,
                    height: 200,
                    margin: 9,
                    borderRadius: 10,
                  }}
                  url={value.url}
                  textImage={value.name}
                />
              </View>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </FlexContainer>
  );
};
