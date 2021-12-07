import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import {ScrollListItem} from '../../../components/home/scrollList/Index';
import {CustomTitle} from './CustomTitle';

export const Suggestions = ({dataImages}) => {
  const desing = {width: 190, height: 250, margin: 6, borderRadius: 10};
  return (
    <FlexContainer h="420px" mbt="0px" mt="15px" aline="flex-start">
      <CustomTitle top="8px" mbt="-50px" text="SUGGESTIONS" />
      <FlexContainer h="500px" mbt="0px" mt="22px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {dataImages.reverse()?.map((value, index) => {
            return (
              <View key={index}>
                <ScrollListItem
                  withsize="195px"
                  desing={desing}
                  id_Image={value.id_Image}
                  UrlDetails={value.url_image}
                  IdSites={value.id_site}
                  url={value.url_image}
                  textImage={value.title}
                />
              </View>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </FlexContainer>
  );
};
