import React, {useState, useEffect} from 'react';
import {CustomButton, Layout, TextButton} from '../../components/styled';
import {FlexContainer} from '../../components/styled';
import {RecordHeader} from '../../components/RecordHeader';
import {CustomMapView} from '../../components/CustomMapView';
import Geolocation from '@react-native-community/geolocation';

export const SelectLocation = () => {

  const [position, setPosition] = useState({});
  const [locationLoaded, setLocationLoaded] = useState(false);
  
  useEffect(() => {
    if (!locationLoaded){
    const getLocation = async () => {
      return await Geolocation.getCurrentPosition(
        currentPosition => {
          setPosition({
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          });
          setLocationLoaded(true);
        },
        null,
        {
          enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 3600000,
        },
        );
      };
      getLocation();
    }}),[];

    const loadMap = (() => {
      return(
        <CustomMapView
        mapHeight="350px"
        mapWidt="100%"
        siteLatitude={position.latitude}
        siteLongitude={position.longitude}
        onSiteChange={true}
        setPlacePosition={setPosition}>
          </CustomMapView>)
    })

    return (
    <Layout>
      <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
      {locationLoaded ? loadMap() : undefined}
      {position ? console.log("this is marker pos", position) : undefined}
      <FlexContainer h="20%">
        <CustomButton h="40%">
          <TextButton>Sign up</TextButton>
        </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
