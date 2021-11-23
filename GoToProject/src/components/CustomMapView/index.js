import React, {useState, useEffect} from 'react';
import {FlexContainer, InputLabel} from '../styled';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as mapConstants from '../../library/constants/mapConstants';
import Geolocation from 'react-native-geolocation-service';

export const CustomMapView = ({
  mapHeight,
  mapWidth,
  siteLatitude,
  siteLongitude,
  siteName,
}) => {
  const [position, setPosition] = useState({
    latitude: siteLatitude,
    longitude: siteLongitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })
  }, []);
  return (
    <FlexContainer h={mapHeight} w={mapWidth} alin>
      <InputLabel fonz="22px">Location</InputLabel>
      <MapView
        style={{
          flex: 1,
          height: mapConstants.height,
          width: mapConstants.width,
        }}
        provider={PROVIDER_GOOGLE}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        region={position}
        showsUserLocation={true}
        onRegionChangeComplete={setPosition}
        // onPress={console.log(position)}
        >
        <Marker
          title={siteName}
          coordinate={{latitude: position.latitude, longitude: position.longitude}}
        />
      </MapView>
    </FlexContainer>
  );
};
