import React from 'react';
import {
    TitleText,
    FlexContainer,
    ButtonCategori,
    TextButton,
  } from '../../styled';
  import {ScrollView} from 'react-native';
  import categories from '../../../library/images/categories.json';
export const Categories = () => {
  return (
    <>
      <FlexContainer mt="5px" h="50px" dir="row" jc="space-between">
        <TitleText top="5px" left="5px" fontt="500" fonz="25px">
          Categories of tourism
        </TitleText>
      </FlexContainer>
      <FlexContainer  h="8%" mt="-10px" mbt="20px" dir="row" jc="space-between">
        <ScrollView horizontal={true}>
          {categories.map(value => {
            return (
              <ButtonCategori key={value.id}>
                <TextButton fontt="100" clt="#8B8FA4">
                  {value.name}
                </TextButton>
              </ButtonCategori>
            );
          })}
        </ScrollView>
      </FlexContainer>
    </>
  );
};
