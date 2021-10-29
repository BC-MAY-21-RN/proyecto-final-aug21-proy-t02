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
import {ScrollListItem} from '../../components/home/scrollList/Index';
import {Categories} from '../../components/home/categoris/index';
import {Search} from '../../components/home/seacrh';
import {Recents} from '../../components/home/sections/SectioRecent';
import {Suggestions} from '../../components/home/sections/SectionSuggestions';
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
      <Search />
      <Categories />
      <ScrollView>
        <Recents />
        <Suggestions />
      </ScrollView>
    </Layout>
  );
};
