import React, {useState} from 'react';
import {
  Layout,
  TitleText,
  FlexContainer,
  ButtonIcon,
  InputText,
  ButtonCategori,
  TextButton,
} from '../../components/styled';
import {ScrollView, View} from 'react-native';
import Icon from 'react-native-ionicons';
import images from '../../library/images/images.json';
import categories from '../../library/images/categories.json';
import {colors} from '../../library/constants/colors';
import {ScrollListItem} from './ScrollList/ScrollListItem';

export const Home = () => {
  return (
    <Layout aline="flex-start">
      <FlexContainer h="8%" dir="row" jc="space-between">
        <TitleText left="20px">GoTo</TitleText>
        <ButtonIcon pt="0px" pttn="relative" pl="0px">
          <Icon
            name="close"
            style={{fontSize: 30, color: colors.white, left: -20}}
          />
        </ButtonIcon>
      </FlexContainer>
      <FlexContainer h="8%" dir="column" jc="space-between">
        <InputText
          h="100%"
          placeholder="  Search"
          placeholderTextColor={colors.lettersGray}
        />
        <ButtonIcon pt="20px" pl="310px">
          <Icon name="search" style={{fontSize: 30, color: colors.white}} />
        </ButtonIcon>
      </FlexContainer>
      <FlexContainer mt="5px" h="7%" dir="row" jc="space-between">
        <TitleText top="5px" left="5px" fontt="500" fonz="25px">
          Categories of tourism
        </TitleText>
      </FlexContainer>
      <FlexContainer h="9%" mbt="20px" dir="row" jc="space-between">
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
      <ScrollView>
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
      </ScrollView>
    </Layout>
  );
};
