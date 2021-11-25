import React, { useState, useEffect } from 'react';
import {
  CustomButton,
  Layout,
  TextButton,
} from '../../components/styled';
import {FlexContainer} from '../../components/styled';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';
import { CustomMapView } from '../../components/CustomMapView';
import * as mapConstants from '../../library/constants/mapConstants';


const [position, setPosition] = useState({
  latitude: 10,
  longitude: 10,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});

export const SelectLocation = () => {
  return (
    <Layout>
      <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
      <CustomMapView
      mapHeight="350px"
      mapWidt="100%"
      siteLatitude={position.latitude}
      siteLongitude={position.longitude}
      onSiteChange={true}
      >

      </CustomMapView>
      <FlexContainer h="20%">
        <CustomButton h="40%">
          <TextButton>Sign up</TextButton>
        </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
