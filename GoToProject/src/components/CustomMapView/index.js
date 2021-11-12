import React from 'react';
import { FlexContainer, InputLabel } from '../styled';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

const GOOGLE_MAPS_APIKEY = 'AIzaSyB4SwDlMm4Dr2c7j5A-iRbFbAWxIKO-tOA';

export const CustomMapView = ({ mapHeight, mapWidth, siteLatitude, siteLongitude, siteName }) => {

const siteLocation = [
    {
      title: siteName,
      coordinates: {
        latitude: siteLatitude,
        longitude: siteLongitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    },
  ];

const placeMarker = siteLocation.map(place => (
  
    <Marker key={place.title}
    coordinate={{
      latitude: place.coordinates.latitude,
      longitude: place.coordinates.longitude,
    }}
    title={place.title} />
  ));

    return (
        <FlexContainer h={mapHeight} w={mapWidth} alin>
            <InputLabel fonz="22px">Location</InputLabel>
            <MapView
              style={{flex: 1, height: height, width: width}}
              provider={PROVIDER_GOOGLE}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
              initialRegion={{
                latitude: siteLatitude,
                longitude: siteLongitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              {placeMarker}
            </MapView>
          </FlexContainer>          
    )
}
