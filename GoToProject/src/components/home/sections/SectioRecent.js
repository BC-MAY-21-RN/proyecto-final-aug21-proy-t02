import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import images from '../../../library/images/images.json';
import {ScrollListItem} from '../../../components/home/scrollList/Index';
import {CustomTitle} from './CustomTitle';
export const Recents = ({title}) => {
  return (
    <FlexContainer h="240px" mbt="10px" mt="0px" aline="flex-start">
      <CustomTitle top="2px" mbt="15px" text={title} />
      <FlexContainer h="220px" mbt="0px" mt="2px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {images?.map(value => {
            return (
              <View key={value.id}>
                <ScrollListItem url={value.url}  />
              </View>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </FlexContainer>
  );
};
