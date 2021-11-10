import React from 'react';
import {Recents} from '../../components/home/sections/SectioRecent';
import {MapContainer} from '../../components/Location/styledComponent';
import {PlaceDetails} from '../../components/PlaceDetails';
import {
  CustomScrollView,
  FlexContainer,
  InputLabel,
  Layout,
  TitleText,
} from '../../components/styled';
import {CustomImage, ScrollContainer, DetailsText} from './styled';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 19.129579469349792;
const LONGITUDE = -103.88428965974752;

const GOOGLE_MAPS_APIKEY = 'AIzaSyB4SwDlMm4Dr2c7j5A-iRbFbAWxIKO-tOA';

const markers = [
  {
    latitude: LATITUDE,
    longitude: LONGITUDE,
  },
];

const region = [
  {
    title: 'Piedra Acampanada',
    coordinates: {
      latitude: 19.129579469349792,
      longitude: -103.88428965974752,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

const placeImg =
  'https://mexicodesconocidoviajes.mx/wp-content/uploads/2019/02/volcan-de-fuego-comala-ok.jpg';

const Details =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
          <FlexContainer h="400px" alin>
            <InputLabel fonz="22px">Location</InputLabel>
            <MapView
              style={{ flex: 1, height: height, width: width, }}
              provider={PROVIDER_GOOGLE}
              //apikey={GOOGLE_MAPS_APIKEY}
              initialRegion={{
              latitude: 19.129579469349792,
              longitude: -103.88428965974752,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421}}></MapView>
          </FlexContainer>
        </ScrollContainer>
      </CustomScrollView>
    </Layout>
  );
};
