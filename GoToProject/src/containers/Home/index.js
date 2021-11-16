import React from 'react';
import {
  Layout,
  TitleText,
  FlexContainer,
  ButtonIcon,
} from '../../components/styled';
import {ScrollView, View} from 'react-native';
import Icon from 'react-native-ionicons';
import {colors} from '../../library/constants/colors';
import {Categories} from '../../components/home/categoris/index';
import {Search} from '../../components/home/seacrh';
import {Recents} from '../../components/home/sections/SectioRecent';
import {Suggestions} from '../../components/home/sections/SectionSuggestions';
import {Menu} from '../../components/menu';
export const Home = ({navigation}) => {
  return (
    <Layout aline="flex-start">
      <FlexContainer h="8%" dir="row" jc="space-between">
        <TitleText fontt="500" top="6px" left="20px">GoTo</TitleText>
        <ButtonIcon pt="0px" pttn="relative" pl="0px" onPress={()=>navigation.navigate('Login')}>
          <Icon
            name="close"
            style={{fontSize: 30, color: colors.darkGray, left: -20}}
          />
        </ButtonIcon>
      </FlexContainer>
      <Search />
      <Categories />
      <ScrollView>
        <Recents title="RECENT"/>
        <Suggestions />
      </ScrollView>
      <Menu stateHome="true" />
    </Layout>
  );
};
