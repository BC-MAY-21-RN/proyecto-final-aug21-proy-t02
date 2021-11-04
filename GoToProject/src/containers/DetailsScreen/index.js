import React from 'react';
import { Recents } from '../../components/home/sections/SectioRecent';
import {
  CustomScrollView,
  FlexContainer,
  Layout,
  TitleText,
} from '../../components/styled';

export const DetailsScreen = () => {
  return (
    <Layout>
      <CustomScrollView>
        <FlexContainer h="300px">
          <TitleText>Image Here</TitleText>
        </FlexContainer>
        <FlexContainer h="400px" dir="row">
          <FlexContainer w="55%">
            <TitleText>Place to visit</TitleText>
          </FlexContainer>
          <FlexContainer w="45%">
            <TitleText>Rate icons</TitleText>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer h="300px" mbt="80px" >
          <TitleText>Details</TitleText>
        </FlexContainer>
        <FlexContainer h="100px"><Recents title="Gallery" /></FlexContainer>        
      </CustomScrollView>
    </Layout>
  );
};
