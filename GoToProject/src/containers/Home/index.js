import React,{useEffect, useState} from 'react';
import { Layout, TitleText,  FlexContainer,  ButtonIcon,} from '../../components/styled';
import { ActivityIndicator, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';
import {colors} from '../../library/constants/colors';
import {Categories} from '../../components/home/categoris/index';
import {Search} from '../../components/home/seacrh';
import {Recents} from '../../components/home/sections/SectioRecent';
import {Suggestions} from '../../components/home/sections/SectionSuggestions';
import {Menu} from '../../components/menu';
import { ShowSites } from '../../library/methods/firebaseShowSites';
export const Home = ( {route:{params={"newsite":false}},navigation}) => {
const [dataImages,setDataImages]= useState([]);
  useEffect(() => {
    params.newsite==undefined? null :ShowSites(setDataImages);
  }, [params.newsite]);
  return (
    <Layout aline="flex-start">
      <FlexContainer h="8%" dir="row" jc="space-between">
        <TitleText fontt="500" top="6px" left="20px">GoTo</TitleText>
        <ButtonIcon pt="0px" pttn="relative" pl="0px" onPress={()=>navigation.navigate('Login')}>
          <Icon name="close" style={{fontSize: 30, color: colors.darkGray, left: -20}}
          />
        </ButtonIcon>
      </FlexContainer>
      <Search />
      <Categories />
      {dataImages.length==0? <ActivityIndicator size={100} style={styles.spiner} color={colors.white} />:
      <ScrollView>
        <Recents dataImages={dataImages} title="RECENT"/>
        <Suggestions dataImages={dataImages}/>
      </ScrollView>}
      <Menu stateHome="true" />
    </Layout>
  );
};
const styles = StyleSheet.create({
  spiner:  {left:120,top:120}
})
