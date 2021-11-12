import React from 'react';
import {CustomMapView} from '../../components/CustomMapView';
import {Recents} from '../../components/home/sections/SectioRecent';
import {PlaceDetails} from '../../components/PlaceDetails';
import {
  CustomScrollView,
  FlexContainer,
  Layout,
  TitleText,
} from '../../components/styled';
import {
  CustomImage, 
  ScrollContainer, 
  DetailsText
} from './styled';

const placeImg =
  'https://mexicodesconocidoviajes.mx/wp-content/uploads/2019/02/volcan-de-fuego-comala-ok.jpg';

const Details =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const LATITUDE = 19.129579469349792;
const LONGITUDE = -103.88428965974752;
const placeName = 'Piedra Acampanada';

export const DetailsScreen = () => {
  return (
    <Layout justifyCont="center" padd="0">
      <CustomScrollView>
        <FlexContainer h="300px">
          <CustomImage source={{uri: placeImg}} />
        </FlexContainer>
        <ScrollContainer>
          <PlaceDetails />
          <FlexContainer h="300px" mbt="80px">
            <TitleText>Details</TitleText>
            <DetailsText>{Details}</DetailsText>
          </FlexContainer>
          <FlexContainer h="240px">
            <Recents title="Gallery" />
          </FlexContainer>
          <CustomMapView 
          mapHeight="400px" 
          siteName={placeName}
          siteLatitude={LATITUDE}
          siteLongitude={LONGITUDE} />
        </ScrollContainer>
      </CustomScrollView>
    </Layout>
  );
};
