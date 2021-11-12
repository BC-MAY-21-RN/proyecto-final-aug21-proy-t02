import React from 'react';
import {FlexContainer, InputLabel} from '../styled';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as mapConstants from '../../library/constants/mapConstants';

export const CustomMapView = ({
  mapHeight,
  mapWidth,
  siteLatitude,
  siteLongitude,
  siteName,
}) => {

  return (
    <FlexContainer h={mapHeight} w={mapWidth} alin>
      <InputLabel fonz="22px">Location</InputLabel>
      <MapView
        style={{
          flex: 1,
          height: mapConstants.height,
          width: mapConstants.width}}
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
        <Marker title={siteName}
          coordinate={{latitude: siteLatitude, longitude: siteLongitude}}/>
      </MapView>
    </FlexContainer>
  );
};
