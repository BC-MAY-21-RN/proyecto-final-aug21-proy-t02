import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, View} from 'react-native';
import {ScrollListItem} from '../../../components/home/scrollList/Index';
import {CustomTitle} from './CustomTitle';
export const Recents = ({dataImages, title = ''}) => {
  return (
    <FlexContainer h="240px"  mbt="10px" mt="0px" aline="flex-start">
      <CustomTitle top="2px" mbt="15px" text={title} />
      <FlexContainer h="220px" mbt="0px" mt="2px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {dataImages?.map((value, index) => {
            return (
              <View key={index}>
                <ScrollListItem
                  id_Image={value.id_Image}
                  UrlDetails={value.url_image}
                  IdSites={value.id_site}
                  textImage={ value.title}
                  url={value.url_image}
                />
              </View>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </FlexContainer>
  );
};
