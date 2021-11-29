import React from 'react';
import {
  CustomButton,
  Layout,
  TextButton,
  FlexContainer,
} from '../../components/styled';
import {RecordHeader} from '../../components/RecordHeader';
import {CustomMapView} from '../../components/CustomMapView';
import { useMap } from '../../library/hooks';

export const SelectLocation = () => {
  const {position, locationLoaded, setPosition} = useMap();
  const loadMap = () => {
    return (
      <CustomMapView
        mapHeight="350px"
        mapWidt="100%"
        siteLatitude={position.latitude}
        siteLongitude={position.longitude}
        onSiteChange={true}
        setPlacePosition={setPosition}></CustomMapView>
    );
  };

  return (
    <Layout>
      <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
      {locationLoaded ? loadMap() : undefined}
      <FlexContainer h="20%">
        <CustomButton h="40%">
          <TextButton>Sign up</TextButton>
        </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
