import React, { useState } from 'react';
import {
  CustomButton,
  Layout,
  TextButton,
} from '../../components/styled';
import {FlexContainer} from '../../components/styled';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';
import { register } from '../../library/methods/auth';
import { Spiner } from '../../components/Spiner';
import { SafeAreaView } from 'react-native';

export const SelectLocation = ({route: {params}, navigation}) => {
  const { email, password, username } = params.values;
  const latitude= "11.21181";
  const length= "-12.12";
  const [status, setStatus] = useState(false);
  const handleSelectLocation = () =>{
    register(email, password, username, latitude, length)
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
  return (
    <SafeAreaView>
      { status === true && <Spiner title={'SignedUP'}/>}
      <Layout>
        <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
        <LocationMap></LocationMap>
        <FlexContainer h="20%">
          <CustomButton onPress={ handleSelectLocation }  h="40%">
            <TextButton>Sign up</TextButton>
          </CustomButton>
        </FlexContainer>
      </Layout>
    </SafeAreaView>
  );
};
