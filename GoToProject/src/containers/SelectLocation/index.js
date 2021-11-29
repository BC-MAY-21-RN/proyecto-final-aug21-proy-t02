import React, { useState } from 'react';
import { CustomButton, Layout, TextButton, FlexContainer } from '../../components/styled';
import {RecordHeader} from '../../components/RecordHeader';
import {CustomMapView} from '../../components/CustomMapView';
import { useMap } from '../../library/hooks';
import { register } from '../../library/methods/auth';
import { Spiner } from '../../components/Spiner';
import { SafeAreaView } from 'react-native';

export const SelectLocation = ({route: {params}, navigation}) => {
  const { email, password, username } = params.values;
  const [status, setStatus] = useState(false);
  const {position, locationLoaded, setPosition} = useMap();
  
  const handleSelectLocation = () =>{
    register(email, password, username, position.latitude, position.longitude)
    .then(() => {
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
        navigation.navigate("Home");
      }, 2000);
    })
    .catch(()=>{
      console.log("error")
    });
  };
  
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
    <SafeAreaView>
      { status === true && <Spiner title={'SignedUP'}/>}
      <Layout>
        <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
        {locationLoaded ? loadMap() : undefined}
        <FlexContainer h="20%">
          <CustomButton onPress={ handleSelectLocation } h="40%">
            <TextButton>Sign up</TextButton>
          </CustomButton>
        </FlexContainer>
      </Layout>
    </SafeAreaView>
  );
};
