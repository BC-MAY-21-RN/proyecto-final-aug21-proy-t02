import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import images from '../../../library/images/images.json';
import {ScrollListItem} from '../../../components/home/scrollList/Index';
import {CustomTitle} from './CustomTitle';

export const Suggestions = () => {
  return (
    <FlexContainer h="380px" mbt="0px" mt="15px" aline="flex-start">
      <CustomTitle top="8px" mbt="-50px" text="SUGGESTIONS" />
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
