import React from 'react';
import {CustomScrollView, FlexContainer, Layout} from '../../components/styled';
import {CustomImage} from './styled';
import {ImgButtos} from '../../components/PlaceDetails/ImgButtons';
import {PlaceDetails} from '../../components/PlaceDetails';
import {CustomMapView} from '../../components/CustomMapView';
import * as mapConstants from '../../library/constants/mapConstants';
const placeImg =
  'https://www.unionguanajuato.mx/wp-content/uploads/2021/04/lugares-turisticos-los-cabos.jpg';
const Details =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const DetailsScreen = () => {
  return (
    <Layout justifyCont="center" padd="0">
      <CustomScrollView>
        <FlexContainer h="300px">
          <CustomImage source={{uri: placeImg}} />
          <ImgButtos />
        </FlexContainer>
        <PlaceDetails
          schedulePm="Sunday 10:00"
          scheduleAm="Monday 10:00"
          title="Piedra de Acampanada"
          categorie="Camping"
          description={Details}
        />
        <CustomMapView
          mapHeight="400px"
          mapWidt="100%"
          siteName={mapConstants.placeName}
          siteLatitude={mapConstants.LATITUDE}
          siteLongitude={mapConstants.LONGITUDE}
        />
      </CustomScrollView>
    </Layout>
  );
};
