import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import images from '../../../library/images/images.json';
import {ScrollListItem} from '../../../components/home/scrollList/Index';
import {CustomTitle} from './CustomTitle';

export const Suggestions = () => {
  const desing = {width: 190, height: 250, margin: 6, borderRadius: 10};
  return (
    <FlexContainer h="420px" mbt="0px" mt="15px" aline="flex-start">
      <CustomTitle top="8px" mbt="-50px" text="SUGGESTIONS" />
      <FlexContainer h="500px" mbt="0px" mt="22px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {images.reverse()?.map(value => {
            return (
              <View key={value.id}>
                <ScrollListItem
                  withsize="195px"
                  desing={desing}
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
