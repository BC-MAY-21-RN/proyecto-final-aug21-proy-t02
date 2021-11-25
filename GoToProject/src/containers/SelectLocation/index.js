import React, {useState, useEffect} from 'react';
import {CustomButton, Layout, TextButton} from '../../components/styled';
import {FlexContainer} from '../../components/styled';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';
import {CustomMapView} from '../../components/CustomMapView';
import * as mapConstants from '../../library/constants/mapConstants';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';

export const SelectLocation = () => {
  Geolocation.setRNConfiguration('always');

  const config = {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 3600000,
  };
  const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [position, setPosition] = useState({
    latitude: 19,
    longitude: -103.5,
  });

  useEffect(() => {
    const getLocation = async () => {
      return await Geolocation.getCurrentPosition(
        currentPosition => {
          setPosition({
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          });
        },
        null,
        {
          enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 3600000,
        },
        ).catch(err => console.log('THIS IS AN ERROR', err));
      };
      getLocation();
    }),
    [];
    console.log(position);
    
    return (
    <Layout>
      <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
      <CustomMapView
        mapHeight="350px"
        mapWidt="100%"
        siteLatitude={position.latitude}
        siteLongitude={position.longitude}
        onSiteChange={true}/>
      <FlexContainer h="20%">
        <CustomButton h="40%">
          <TextButton>Sign up</TextButton>
        </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
