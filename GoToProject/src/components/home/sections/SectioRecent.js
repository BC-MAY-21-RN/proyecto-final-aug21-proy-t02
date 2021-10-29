import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import images from '../../../library/images/images.json';
import {ScrollListItem} from '../../../components/home/scrollList/Index';
import {CustomTitle} from './CustomTitle';
export const Recents = () => {
  return (
    <FlexContainer h="240px" mbt="20px" mt="0px" aline="flex-start">
      <CustomTitle top="2px" mbt="15px" text="RECENT" />
      <FlexContainer h="220px" mbt="0px" mt="2px" dir="row" jc="flex-start">
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
