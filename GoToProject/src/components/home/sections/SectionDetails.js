import React from 'react';
import {FlexContainer} from '../../../components/styled';
import {ScrollView, Image, View} from 'react-native';
export const SectionDetails = ({images}) => {
  let data = images?.map((value) => {
    return [
      {name: value.name_imageFive},
      {name: value.name_imageFourt},
      {name: value.name_imageOne},
      {name: value.name_imageThree},
      {name: value.name_imageTwo},
    ]
  });
  const desing = {width: 190, height: 250, margin: 6, borderRadius: 10};
  return (
    <FlexContainer h="420px" mbt="0px" mt="15px" aline="flex-start">
      <FlexContainer h="500px" mbt="0px" mt="22px" dir="row" jc="flex-start">
        <ScrollView horizontal={true}>
          {data[0]?.map((value, index) => {
            return (
              <View key={index}>
               { value.name?<Image style={desing} source={{uri: value.name}} />:null}
              </View>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </FlexContainer>
  );
};
